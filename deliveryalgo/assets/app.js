(function () {
  const metrics = window.METRICS;
  if (!metrics) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const labels = {
    distance_km: "Distance",
    restaurant_avg_prep_minutes: "Prep time",
    courier_vehicle: "Vehicle",
    order_subtotal: "Subtotal",
    weather: "Weather",
    courier_trips_completed: "Courier trips",
    items_count: "Items",
    hour: "Hour",
    is_rush_hour: "Rush hour",
    day_of_week: "Weekday",
    month: "Month",
    cuisine: "Cuisine",
    is_weekend: "Weekend",
    city_zone: "City zone",
    is_dinner_rush: "Dinner rush",
    is_lunch_rush: "Lunch rush",
  };

  const progress = document.getElementById("progress");
  const nav = document.getElementById("nav");
  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  document.querySelectorAll(".reveal").forEach(function (node) {
    if (reduced || !("IntersectionObserver" in window)) {
      node.classList.add("is-in");
      return;
    }
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
  });

  document.querySelectorAll("[data-count]").forEach(function (node) {
    const target = Number(node.dataset.count);
    const decimals = Number(node.dataset.decimals || 0);
    const suffix = node.dataset.suffix || "";
    if (reduced) {
      node.textContent = target.toFixed(decimals) + suffix;
      return;
    }
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / 1100);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = (target * eased).toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  const eta = document.getElementById("hero-eta");
  const heroOrder = document.getElementById("hero-order");
  const preview = metrics.preview || [];
  let heroIndex = 0;
  function showHero() {
    if (!preview.length) return;
    const row = preview[heroIndex];
    eta.textContent = Number(row.predicted_minutes).toFixed(1);
    heroOrder.textContent = row.order_id;
    heroIndex = (heroIndex + 1) % preview.length;
  }
  showHero();
  if (!reduced && preview.length > 1) setInterval(showHero, 2600);

  const routePath = document.getElementById("route-path");
  const courier = document.getElementById("courier");
  const routeWrap = document.getElementById("route-wrap");
  if (routePath && courier && !reduced) {
    const length = routePath.getTotalLength();
    const started = performance.now();
    function ride(now) {
      const loop = ((now - started) % 7000) / 7000;
      const point = routePath.getPointAtLength(loop * length);
      const svg = routePath.ownerSVGElement;
      const matrix = routePath.getScreenCTM();
      if (matrix) {
        const svgPoint = svg.createSVGPoint();
        svgPoint.x = point.x;
        svgPoint.y = point.y;
        const screen = svgPoint.matrixTransform(matrix);
        const box = routeWrap.getBoundingClientRect();
        courier.style.transform =
          "translate(" + (screen.x - box.left) + "px," + (screen.y - box.top) + "px)";
        courier.style.opacity = "1";
      }
      requestAnimationFrame(ride);
    }
    requestAnimationFrame(ride);
  }

  const steps = Array.from(document.querySelectorAll("#pipeline li"));
  let stepCursor = 0;
  function lightStep() {
    steps.forEach(function (step, index) {
      step.classList.toggle("is-on", index <= stepCursor);
    });
    stepCursor = (stepCursor + 1) % (steps.length + 1);
    if (stepCursor === steps.length) stepCursor = 0;
  }
  if (steps.length && !reduced) {
    lightStep();
    setInterval(lightStep, 1100);
  } else {
    steps.forEach(function (step) { step.classList.add("is-on"); });
  }

  function onceVisible(target, run) {
    if (!target) return;
    if (reduced || !("IntersectionObserver" in window)) {
      run();
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(target);
  }

  const ranks = document.getElementById("ranks");
  const maxImportance = metrics.importances[0].importance;
  const rankFills = [];
  metrics.importances.forEach(function (item) {
    const row = document.createElement("div");
    row.className = "rank";
    const name = document.createElement("b");
    name.textContent = labels[item.feature] || item.feature;
    const track = document.createElement("div");
    track.className = "track";
    const fill = document.createElement("span");
    track.appendChild(fill);
    const value = document.createElement("em");
    value.textContent = (item.importance * 100).toFixed(1) + "%";
    row.append(name, track, value);
    ranks.appendChild(row);
    rankFills.push({ fill: fill, width: (item.importance / maxImportance) * 100 });
  });
  onceVisible(document.getElementById("signals"), function () {
    rankFills.forEach(function (item) { item.fill.style.width = item.width + "%"; });
  });

  const arena = document.getElementById("arena");
  const fills = [];
  const maxMae = Math.max.apply(null, metrics.comparison.map(function (row) { return row.mae; }));
  metrics.comparison.forEach(function (row) {
    const line = document.createElement("div");
    line.className = "model-row" + (row.role === "selected" ? " is-selected" : "") + (row.role === "rejected" ? " is-rejected" : "");
    const name = document.createElement("strong");
    name.textContent = row.model + (row.role === "selected" ? " · selected" : "");
    const bar = document.createElement("div");
    bar.className = "bar";
    const fill = document.createElement("i");
    bar.appendChild(fill);
    const mae = document.createElement("span");
    mae.className = "mae";
    mae.textContent = row.mae.toFixed(5);
    line.append(name, bar, mae);
    arena.appendChild(line);
    fills.push({ fill: fill, width: (row.mae / maxMae) * 100 });
  });
  const note = document.createElement("p");
  note.className = "model-note";
  note.textContent = "Shorter bar, smaller error. The tuned model is shown because it was tested, then declined.";
  arena.appendChild(note);
  onceVisible(document.getElementById("models"), function () {
    fills.forEach(function (item) { item.fill.style.width = item.width + "%"; });
  });

  const cases = metrics.staged;
  const chart = document.getElementById("chart");
  const scrub = document.getElementById("scrub");
  const playButton = document.getElementById("boost-play");
  let caseIndex = 0;
  let frame = reduced ? cases[0].trajectory.length - 1 : 0;
  let playing = !reduced;
  let timer = null;

  cases[0].trajectory.forEach(function (point, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(point.trees);
    button.addEventListener("click", function () {
      frame = index;
      renderBoost();
    });
    scrub.appendChild(button);
  });

  function domain(order) {
    const values = [order.actual].concat(order.trajectory.map(function (point) { return point.prediction; }));
    let min = Math.min.apply(null, values);
    let max = Math.max.apply(null, values);
    const pad = Math.max(1.5, (max - min) * 0.18);
    return { min: min - pad, max: max + pad };
  }

  function renderBoost() {
    const order = cases[caseIndex];
    const point = order.trajectory[frame];
    document.getElementById("boost-order").textContent = String(order.order_id);
    document.getElementById("boost-actual").textContent = order.actual.toFixed(1);
    document.getElementById("boost-pred").textContent = point.prediction.toFixed(2);
    document.getElementById("boost-err").textContent = point.abs_error.toFixed(2);
    document.getElementById("boost-context").textContent =
      order.cuisine + " · " + order.distance_km + " km · prep " + order.prep_minutes +
      " min · " + order.vehicle + " · " + order.weather + " · hour " + order.hour +
      " · after " + point.trees + " trees";

    scrub.querySelectorAll("button").forEach(function (button, index) {
      button.classList.toggle("is-on", index === frame);
    });

    const box = { l: 52, t: 18, r: 18, b: 36, w: 720, h: 340 };
    const innerW = box.w - box.l - box.r;
    const innerH = box.h - box.t - box.b;
    const span = domain(order);
    function x(trees) { return box.l + (trees / 300) * innerW; }
    function y(value) {
      return box.t + (1 - (value - span.min) / (span.max - span.min)) * innerH;
    }

    const step = span.max - span.min > 40 ? 20 : span.max - span.min > 15 ? 5 : 2;
    let grid = "";
    for (let value = Math.ceil(span.min / step) * step; value <= span.max; value += step) {
      const yy = y(value).toFixed(1);
      grid += '<line class="chart-grid" x1="' + box.l + '" x2="' + (box.w - box.r) + '" y1="' + yy + '" y2="' + yy + '"/>';
      grid += '<text class="chart-label" x="8" y="' + (Number(yy) + 4) + '">' + value + "</text>";
    }
    [1, 100, 200, 300].forEach(function (trees) {
      grid += '<text class="chart-label" x="' + x(trees) + '" y="' + (box.h - 12) + '" text-anchor="middle">' + trees + "</text>";
    });

    const shown = order.trajectory.slice(0, frame + 1);
    const d = shown.map(function (item, index) {
      return (index === 0 ? "M" : "L") + x(item.trees).toFixed(2) + " " + y(item.prediction).toFixed(2);
    }).join(" ");
    const last = shown[shown.length - 1];
    const actualY = y(order.actual).toFixed(2);

    chart.innerHTML =
      grid +
      '<line class="chart-actual" x1="' + box.l + '" x2="' + (box.w - box.r) + '" y1="' + actualY + '" y2="' + actualY + '"/>' +
      '<text class="chart-label" x="' + (box.w - box.r) + '" y="' + (Number(actualY) - 6) + '" text-anchor="end">actual ' + order.actual.toFixed(0) + "</text>" +
      '<path class="chart-path" d="' + d + '"/>' +
      '<circle class="chart-dot" cx="' + x(last.trees).toFixed(2) + '" cy="' + y(last.prediction).toFixed(2) + '" r="5"/>';
  }

  function stopPlay() {
    if (timer) clearInterval(timer);
    timer = null;
    playing = false;
    playButton.textContent = "Play";
    playButton.setAttribute("aria-pressed", "false");
  }
  function startPlay() {
    if (reduced) return;
    playing = true;
    playButton.textContent = "Pause";
    playButton.setAttribute("aria-pressed", "true");
    timer = setInterval(function () {
      frame = (frame + 1) % cases[caseIndex].trajectory.length;
      renderBoost();
    }, 850);
  }
  playButton.addEventListener("click", function () {
    if (playing) stopPlay();
    else startPlay();
  });
  document.querySelectorAll("[data-case]").forEach(function (button) {
    button.addEventListener("click", function () {
      caseIndex = Number(button.dataset.case);
      frame = 0;
      document.querySelectorAll("[data-case]").forEach(function (other) {
        const on = other === button;
        other.classList.toggle("is-on", on);
        other.setAttribute("aria-selected", on ? "true" : "false");
      });
      renderBoost();
    });
  });
  renderBoost();
  if (reduced) {
    playButton.textContent = "Play";
    playButton.setAttribute("aria-pressed", "false");
  } else {
    startPlay();
  }

  const values = metrics.all_predictions.map(function (row) { return row.predicted_minutes; });
  const hist = document.getElementById("hist");
  const bins = 16;
  const lo = Math.min.apply(null, values);
  const hi = Math.max.apply(null, values);
  const counts = new Array(bins).fill(0);
  const histBars = [];
  values.forEach(function (value) {
    let index = Math.floor(((value - lo) / (hi - lo)) * bins);
    if (index >= bins) index = bins - 1;
    counts[index] += 1;
  });
  const peak = Math.max.apply(null, counts);
  counts.forEach(function (count) {
    const bar = document.createElement("i");
    hist.appendChild(bar);
    histBars.push({ bar: bar, height: (count / peak) * 100 });
  });
  onceVisible(document.getElementById("predictions"), function () {
    histBars.forEach(function (item) { item.bar.style.height = item.height + "%"; });
  });
  document.getElementById("hist-caption").textContent =
    "From " + lo.toFixed(1) + " to " + hi.toFixed(1) + " minutes. Mean " +
    metrics.predictions.mean.toFixed(2) + ", median " + metrics.predictions.median.toFixed(2) + ".";

  const stats = document.getElementById("predict-stats");
  [
    [metrics.predictions.count, "Rows written"],
    [metrics.predictions.unique_orders, "Unique order ids"],
    [metrics.predictions.missing, "Missing predictions"],
    [metrics.predictions.mean.toFixed(2), "Mean predicted minutes"],
  ].forEach(function (pair) {
    const card = document.createElement("article");
    const strong = document.createElement("strong");
    strong.textContent = String(pair[0]);
    const span = document.createElement("span");
    span.textContent = pair[1];
    card.append(strong, span);
    stats.appendChild(card);
  });

  const body = document.getElementById("pred-body");
  const finder = document.getElementById("finder");
  const pageLabel = document.getElementById("page-label");
  const pageSize = 8;
  let page = 0;
  function filtered() {
    const query = finder.value.trim();
    if (!query) return metrics.all_predictions;
    return metrics.all_predictions.filter(function (row) {
      return String(row.order_id).indexOf(query) !== -1;
    });
  }
  function renderTable() {
    const rows = filtered();
    const pages = Math.max(1, Math.ceil(rows.length / pageSize));
    if (page > pages - 1) page = pages - 1;
    const slice = rows.slice(page * pageSize, page * pageSize + pageSize);
    body.innerHTML = "";
    if (!slice.length) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 2;
      td.textContent = "No order matches that id.";
      tr.appendChild(td);
      body.appendChild(tr);
    }
    slice.forEach(function (row) {
      const tr = document.createElement("tr");
      const id = document.createElement("td");
      id.textContent = String(row.order_id);
      const minutes = document.createElement("td");
      minutes.textContent = row.predicted_minutes.toFixed(2);
      tr.append(id, minutes);
      body.appendChild(tr);
    });
    const from = rows.length ? page * pageSize + 1 : 0;
    const to = Math.min(rows.length, (page + 1) * pageSize);
    pageLabel.textContent = from + "–" + to + " of " + rows.length;
    document.getElementById("prev-page").disabled = page === 0;
    document.getElementById("next-page").disabled = page >= pages - 1;
  }
  finder.addEventListener("input", function () {
    page = 0;
    renderTable();
  });
  document.getElementById("prev-page").addEventListener("click", function () {
    page = Math.max(0, page - 1);
    renderTable();
  });
  document.getElementById("next-page").addEventListener("click", function () {
    page += 1;
    renderTable();
  });
  renderTable();
})();
