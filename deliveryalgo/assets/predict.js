(function () {
  const model = window.MODEL;
  const form = document.getElementById("order-form");
  if (!model || !form) return;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const labels = {
    restaurant_avg_prep_minutes: "Prep time",
    distance_km: "Distance",
    items_count: "Items",
    order_subtotal: "Subtotal",
    courier_trips_completed: "Courier trips",
    hour: "Hour",
    day_of_week: "Weekday",
    month: "Month",
    is_weekend: "Weekend",
    is_lunch_rush: "Lunch rush",
    is_dinner_rush: "Dinner rush",
    is_rush_hour: "Rush hour",
    cuisine: "Cuisine",
    city_zone: "City zone",
    courier_vehicle: "Vehicle",
    weather: "Weather",
  };
  const binary = {
    is_weekend: true,
    is_lunch_rush: true,
    is_dinner_rush: true,
    is_rush_hour: true,
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const catalog = [];
  model.numeric.forEach(function (name) {
    catalog.push({ kind: "num", name: name });
  });
  model.categorical.forEach(function (column) {
    column.categories.forEach(function (category) {
      catalog.push({ kind: "cat", name: column.name, category: category });
    });
  });

  function fillSelect(name, categories, includeMissing) {
    const select = form.elements[name];
    select.innerHTML = "";
    if (includeMissing) {
      const blank = document.createElement("option");
      blank.value = "";
      blank.textContent = "Missing";
      select.appendChild(blank);
    }
    categories.forEach(function (category) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.replaceAll("_", " ");
      select.appendChild(option);
    });
  }

  model.categorical.forEach(function (column) {
    fillSelect(column.name, column.categories, column.name === "weather");
  });

  function applyExample(example) {
    form.elements.order_placed_at.value = example.order_placed_at;
    form.elements.cuisine.value = example.cuisine;
    form.elements.city_zone.value = example.city_zone;
    form.elements.courier_vehicle.value = example.courier_vehicle;
    form.elements.restaurant_avg_prep_minutes.value = example.restaurant_avg_prep_minutes;
    form.elements.distance_km.value = example.distance_km;
    form.elements.items_count.value = example.items_count;
    form.elements.order_subtotal.value = example.order_subtotal;
    form.elements.courier_trips_completed.value =
      example.courier_trips_completed == null ? "" : example.courier_trips_completed;
    form.elements.weather.value = example.weather || "";
  }

  function readOrder() {
    const placed = String(form.elements.order_placed_at.value || "");
    const parts = placed.split("T");
    const date = parts[0].split("-").map(Number);
    const time = (parts[1] || "00:00").split(":").map(Number);
    const year = date[0];
    const month = date[1];
    const day = date[2];
    const hour = time[0];
    const clock = new Date(year, month - 1, day);
    let dayOfWeek = clock.getDay();
    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const lunch = hour >= 12 && hour <= 14 ? 1 : 0;
    const dinner = hour >= 18 && hour <= 21 ? 1 : 0;
    const trips = String(form.elements.courier_trips_completed.value || "").trim();
    const weather = form.elements.weather.value;
    return {
      order_placed_at: placed,
      year: year,
      month: month,
      day: day,
      hour: hour,
      day_of_week: dayOfWeek,
      is_weekend: dayOfWeek >= 5 ? 1 : 0,
      is_lunch_rush: lunch,
      is_dinner_rush: dinner,
      is_rush_hour: lunch || dinner ? 1 : 0,
      cuisine: form.elements.cuisine.value,
      city_zone: form.elements.city_zone.value,
      courier_vehicle: form.elements.courier_vehicle.value,
      weather: weather === "" ? null : weather,
      restaurant_avg_prep_minutes: Number(form.elements.restaurant_avg_prep_minutes.value),
      distance_km: Number(form.elements.distance_km.value),
      items_count: Number(form.elements.items_count.value),
      order_subtotal: Number(form.elements.order_subtotal.value),
      courier_trips_completed: trips === "" ? null : Number(trips),
    };
  }

  function vector(order, notes) {
    const values = [];
    model.numeric.forEach(function (name, index) {
      let value = order[name];
      if (value == null || Number.isNaN(value)) {
        notes.push(
          labels[name] + " was missing, so the training median " +
          model.medians[index].toFixed(1) + " was used."
        );
        value = model.medians[index];
      }
      values.push((value - model.means[index]) / model.scales[index]);
    });
    model.categorical.forEach(function (column) {
      let raw = order[column.name];
      if (raw == null || raw === "") {
        notes.push(labels[column.name] + " was missing, so it was marked Unknown.");
        raw = "Unknown";
      }
      const known = column.categories.indexOf(String(raw)) !== -1;
      if (!known) notes.push(labels[column.name] + " “" + raw + "” was unseen in training and ignored.");
      column.categories.forEach(function (category) {
        values.push(category === String(raw) ? 1 : 0);
      });
    });
    return values;
  }

  const floatBox = new Float32Array(1);
  function f32(value) {
    floatBox[0] = value;
    return floatBox[0];
  }

  function walk(tree, row) {
    let node = 0;
    const path = [];
    while (tree.l[node] !== -1) {
      const feature = tree.f[node];
      const threshold = tree.t[node];
      const goLeft = f32(row[feature]) <= f32(threshold);
      path.push({ feature: feature, threshold: threshold, goLeft: goLeft });
      node = goLeft ? tree.l[node] : tree.r[node];
    }
    return { value: tree.v[node], path: path };
  }

  function describe(step) {
    const info = catalog[step.feature];
    if (!info) return "a split";
    if (info.kind === "cat") {
      const phrase = step.goLeft ? "is not" : "is";
      return labels[info.name] + " " + phrase + " " + info.category.replaceAll("_", " ");
    }
    const mean = model.means[step.feature];
    const scale = model.scales[step.feature];
    if (binary[info.name]) {
      const off = (0 - mean) / scale <= step.threshold;
      const chosenOff = step.goLeft === off;
      return labels[info.name] + (chosenOff ? " is no" : " is yes");
    }
    const cut = step.threshold * scale + mean;
    let shown = cut.toFixed(1);
    if (info.name === "distance_km") shown = cut.toFixed(2) + " km";
    else if (info.name === "restaurant_avg_prep_minutes") shown = cut.toFixed(1) + " min";
    else if (info.name === "order_subtotal") shown = cut.toFixed(2);
    else if (info.name === "hour") shown = String(Math.round(cut)) + ":00";
    else if (info.name === "items_count" || info.name === "courier_trips_completed") shown = cut.toFixed(0);
    else if (info.name === "day_of_week") shown = days[Math.max(0, Math.min(6, Math.round(cut)))] || shown;
    else if (info.name === "month") shown = months[Math.max(0, Math.min(11, Math.round(cut) - 1))] || shown;
    return labels[info.name] + (step.goLeft ? " ≤ " : " > ") + shown;
  }

  function score(order) {
    const notes = [];
    const row = vector(order, notes);
    let prediction = model.init;
    const trace = [{ trees: 0, prediction: prediction }];
    let biggest = { abs: -1, trees: 0, delta: 0, path: [] };
    model.trees.forEach(function (tree, index) {
      const walked = walk(tree, row);
      const delta = model.learning_rate * walked.value;
      prediction += delta;
      if (Math.abs(delta) > biggest.abs) {
        biggest = { abs: Math.abs(delta), trees: index + 1, delta: delta, path: walked.path };
      }
      const step = index + 1;
      if (step === 1 || step % 25 === 0 || step === model.trees.length) {
        trace.push({ trees: step, prediction: prediction });
      }
    });
    return { minutes: prediction, trace: trace, notes: notes, biggest: biggest };
  }

  function draw(trace, revealCount) {
    const chart = document.getElementById("live-chart");
    const shown = trace.slice(0, revealCount);
    const values = trace.map(function (point) { return point.prediction; });
    let min = Math.min.apply(null, values);
    let max = Math.max.apply(null, values);
    const pad = Math.max(0.4, (max - min) * 0.18);
    min -= pad;
    max += pad;
    const box = { l: 44, t: 12, r: 12, b: 28, w: 640, h: 180 };
    const innerW = box.w - box.l - box.r;
    const innerH = box.h - box.t - box.b;
    function x(trees) { return box.l + (trees / model.n_estimators) * innerW; }
    function y(value) { return box.t + (1 - (value - min) / (max - min)) * innerH; }
    let grid = "";
    [min + pad, max - pad].forEach(function (value) {
      const yy = y(value).toFixed(1);
      grid += '<line class="chart-grid" x1="' + box.l + '" x2="' + (box.w - box.r) + '" y1="' + yy + '" y2="' + yy + '"/>';
      grid += '<text class="chart-label" x="4" y="' + (Number(yy) + 4) + '">' + value.toFixed(0) + "</text>";
    });
    const d = shown.map(function (point, index) {
      return (index === 0 ? "M" : "L") + x(point.trees).toFixed(2) + " " + y(point.prediction).toFixed(2);
    }).join(" ");
    const last = shown[shown.length - 1];
    chart.innerHTML =
      grid +
      '<text class="chart-label" x="' + box.l + '" y="' + (box.h - 8) + '">0 trees</text>' +
      '<text class="chart-label" x="' + (box.w - box.r) + '" y="' + (box.h - 8) + '" text-anchor="end">300</text>' +
      (d ? '<path class="chart-path" d="' + d + '"/>' : "") +
      (last ? '<circle class="chart-dot" cx="' + x(last.trees).toFixed(2) + '" cy="' + y(last.prediction).toFixed(2) + '" r="4.5"/>' : "");
    document.getElementById("live-eta").textContent = last.prediction.toFixed(1);
  }

  let playTimer = null;
  function render(order) {
    const result = score(order);
    const rush = order.is_dinner_rush ? "dinner rush" : order.is_lunch_rush ? "lunch rush" : "outside the rush windows";
    const when = days[order.day_of_week] + " " + order.day + " " + months[order.month - 1] + ", " + String(order.hour).padStart(2, "0") + ":00";
    const lines = [
      ["01", "The clock becomes features: " + when + ", " + rush + (order.is_weekend ? ", weekend." : ", weekday.")],
      ["02", result.notes.length ? result.notes.join(" ") : "Nothing was missing, so no imputed value entered the model."],
      ["03", "The order is " + order.cuisine + " in " + order.city_zone.replaceAll("_", " ") + ", " + order.distance_km + " km away, prep " + order.restaurant_avg_prep_minutes + " min, by " + order.courier_vehicle + "."],
      ["04", "The ensemble starts at the training average, " + model.init.toFixed(2) + " minutes, then each tree adds a small correction."],
    ];
    if (result.biggest.path.length) {
      const direction = result.biggest.delta >= 0 ? "up" : "down";
      lines.push([
        "05",
        "Largest single correction is tree " + result.biggest.trees + ", which moves the estimate " +
        direction + " by " + Math.abs(result.biggest.delta).toFixed(2) + " minutes because " +
        result.biggest.path.map(describe).join(", then ") + ".",
      ]);
    }
    lines.push(["06", "After 300 trees the prediction is " + result.minutes.toFixed(2) + " minutes."]);

    const list = document.getElementById("work-list");
    list.innerHTML = "";
    lines.forEach(function (line) {
      const item = document.createElement("li");
      const index = document.createElement("b");
      index.textContent = line[0];
      const copy = document.createElement("p");
      copy.textContent = line[1];
      item.append(index, copy);
      list.appendChild(item);
    });
    document.getElementById("live-meta").textContent = "Same gradient boosting model used for predictions.csv";

    if (playTimer) clearInterval(playTimer);
    if (reduced) {
      draw(result.trace, result.trace.length);
      document.getElementById("live-eta").textContent = result.minutes.toFixed(1);
      return;
    }
    let frame = 1;
    draw(result.trace, 1);
    playTimer = setInterval(function () {
      frame += 1;
      if (frame >= result.trace.length) {
        clearInterval(playTimer);
        playTimer = null;
        draw(result.trace, result.trace.length);
        document.getElementById("live-eta").textContent = result.minutes.toFixed(2);
        return;
      }
      draw(result.trace, frame);
    }, 90);
  }

  applyExample(model.example);
  render(readOrder());
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    render(readOrder());
  });
  document.getElementById("load-example").addEventListener("click", function () {
    applyExample(model.example);
    render(readOrder());
  });
  let queued = null;
  form.addEventListener("input", function () {
    if (!form.checkValidity()) return;
    clearTimeout(queued);
    queued = setTimeout(function () { render(readOrder()); }, 280);
  });
})();
