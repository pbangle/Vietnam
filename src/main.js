import itinerary from "./data/itinerary.js";

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function encodeMapQuery(text) {
  return encodeURIComponent(String(text ?? "").trim());
}

function getGoogleMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeMapQuery(query)}`;
}

function renderSleepBox(item, label) {
  return `
    <div class="sleep-box">
      <div class="sleep-title">
        <strong class="sleep-name">${escapeHtml(item.place)}</strong>
        ${item.price ? `<span class="price-pill">${escapeHtml(item.price)}</span>` : ""}
      </div>
      ${item.note ? `<p class="note">${escapeHtml(item.note)}</p>` : ""}
      ${
        item.url
          ? `<a class="hotel-link" href="${item.url}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`
          : ""
      }
    </div>
  `;
}

function getLastPlace(day) {
  const source = day.city || day.title || "";
  const parts = source
    .split(/→|\+/)
    .map((item) => item.trim())
    .filter(Boolean);

  return parts.at(-1) || day.title || "";
}

function getRoadmapLabel(day) {
  if (day.roadmapTitle) {
    return day.roadmapTitle;
  }

  const subtitle = (day.subtitle || "").toLowerCase();
  const mood = (day.mood || "").toLowerCase();
  const place = getLastPlace(day);

  if (subtitle.includes("arrival")) {
    return `Arrival in ${place}`;
  }

  if (
    subtitle.includes("full day") ||
    subtitle.includes("best full day") ||
    subtitle.includes("extra full day")
  ) {
    return `Full day in ${place}`;
  }

  if (subtitle.includes("departure")) {
    return "Departure day";
  }

  if (mood.includes("travel")) {
    return `Travel to ${place}`;
  }

  if (mood.includes("transit")) {
    return `Back to ${place}`;
  }

  if (mood.includes("cruise")) {
    return day.title;
  }

  if ((day.title || "").includes("→")) {
    return day.title;
  }

  return day.subtitle || day.title || place;
}

function getCityMapQuery(day) {
  return day.mapQuery || `${getLastPlace(day)}, Vietnam`;
}

function getHotelMapQuery(day) {
  if (day.hotelMapQuery) {
    return day.hotelMapQuery;
  }

  const stay = day.sleep;
  if (!stay?.place) return "";

  const place = stay.place.trim();
  if (!place || place === "—" || place.toLowerCase() === "night train" || place.toLowerCase() === "cruise boat") {
    return "";
  }

  if ((stay.price || "").toLowerCase() === "tbd") {
    return "";
  }

  const note = (stay.note || "").toLowerCase();
  if (note.includes("still to define") || note.includes("same hotel you choose")) {
    return "";
  }

  return `${place}, ${getLastPlace(day)}, Vietnam`;
}

function renderQuickActions(day) {
  const cityQuery = getCityMapQuery(day);
  const hotelQuery = getHotelMapQuery(day);

  const cityAction = cityQuery
    ? `
      <a
        class="map-action"
        href="${getGoogleMapsLink(cityQuery)}"
        target="_blank"
        rel="noreferrer"
      >
        <span class="map-action-icon" aria-hidden="true">📍</span>
        <span class="map-action-text">
          <span class="map-action-label">Open city</span>
          <span class="map-action-value">${escapeHtml(getLastPlace(day))}</span>
        </span>
      </a>
    `
    : "";

  const hotelAction = hotelQuery
    ? `
      <a
        class="map-action"
        href="${getGoogleMapsLink(hotelQuery)}"
        target="_blank"
        rel="noreferrer"
      >
        <span class="map-action-icon" aria-hidden="true">🏨</span>
        <span class="map-action-text">
          <span class="map-action-label">Open stay</span>
          <span class="map-action-value">${escapeHtml(day.sleep?.place || "Hotel")}</span>
        </span>
      </a>
    `
    : "";

  if (!cityAction && !hotelAction) {
    return "";
  }

  return `
    <section class="detail-section">
      <h3 class="section-title">Quick actions</h3>
      <div class="quick-actions">
        ${cityAction}
        ${hotelAction}
      </div>
    </section>
  `;
}

function renderCover(day) {
  if (!day.cover) return "";

  return `
    <section class="detail-cover">
      <img
        class="detail-cover-image"
        src="${day.cover}"
        alt="${escapeHtml(day.coverAlt || `${day.coverTitle || day.title} cover image`)}"
      />
    </section>
  `;
}

function renderDayNav(index) {
  const isFirst = index === 0;
  const isLast = index === itinerary.length - 1;

  return `
    <section class="detail-section">
      <div class="day-nav">
        <div class="day-nav-status">Day ${index + 1} of ${itinerary.length}</div>
        <button class="day-nav-btn" type="button" data-nav="prev" ${isFirst ? "disabled" : ""}>
          ← Previous day
        </button>
        <button class="day-nav-btn" type="button" data-nav="next" ${isLast ? "disabled" : ""}>
          Next day →
        </button>
      </div>
    </section>
  `;
}

function renderDayDetail(day, index) {
  const highlights = (day.highlights || [])
    .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
    .join("");

  const transport = day.transport?.length
    ? `
      <section class="detail-section">
        <h3 class="section-title">Transport</h3>
        <ul class="transport-list">
          ${day.transport.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    `
    : "";

  const sleep = day.sleep
    ? `
      <section class="detail-section">
        <h3 class="section-title">Stay</h3>
        ${renderSleepBox(day.sleep, "Open hotel")}
      </section>
    `
    : "";

  const sleepOptions = day.sleepOptions?.length
    ? `
      <section class="detail-section">
        <h3 class="section-title">Hotel options</h3>
        <div class="options-list">
          ${day.sleepOptions.map((item) => renderSleepBox(item, "View option")).join("")}
        </div>
      </section>
    `
    : "";

  return `
    ${renderCover(day)}

    <section class="detail-hero">
      <div class="detail-top-row">
        <span class="date-badge">${escapeHtml(day.date)}</span>
        <span class="mood">${escapeHtml(day.mood)}</span>
      </div>

      <h2 class="detail-title" id="overlayTitle">
        ${escapeHtml(day.icon || "")} ${escapeHtml(day.title)}
      </h2>

      <p class="detail-subtitle">
        ${escapeHtml(day.subtitle)}
      </p>

      <p class="city">${escapeHtml(day.city)}</p>
    </section>

    <div class="detail-content">
      ${renderQuickActions(day)}

      <section class="detail-section">
        <h3 class="section-title">Plan</h3>
        <div class="tags-wrap">${highlights}</div>
      </section>

      ${transport}
      ${sleep}
      ${sleepOptions}
      ${renderDayNav(index)}
    </div>
  `;
}

const app = document.getElementById("app");
const overlay = document.getElementById("dayOverlay");
const overlayContent = document.getElementById("overlayContent");
const closeOverlayButton = document.getElementById("closeOverlay");
const overlayHint = document.getElementById("overlayHint");

const instructionsOverlay = document.getElementById("instructionsOverlay");
const openInstructionsButton = document.getElementById("openInstructions");
const closeInstructionsButton = document.getElementById("closeInstructions");

let activeIndex = null;

app.style.setProperty("--day-count", String(itinerary.length));

function anyOverlayOpen() {
  return overlay.classList.contains("open") || instructionsOverlay.classList.contains("open");
}

function syncBodyLock() {
  document.body.classList.toggle("overlay-open", anyOverlayOpen());
}

function updateActiveState() {
  const buttons = app.querySelectorAll(".roadmap-item");

  buttons.forEach((button, index) => {
    button.classList.toggle("active", index === activeIndex);
  });
}

function openDay(index) {
  const day = itinerary[index];
  if (!day) return;

  activeIndex = index;
  overlayContent.innerHTML = renderDayDetail(day, index);
  overlayContent.scrollTop = 0;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");

  if (overlayHint) {
    overlayHint.textContent = `Day ${index + 1} of ${itinerary.length}`;
  }

  syncBodyLock();
  updateActiveState();
}

function closeDay() {
  activeIndex = null;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");

  if (overlayHint) {
    overlayHint.textContent = "Day details";
  }

  syncBodyLock();
  updateActiveState();
}

function openInstructions() {
  instructionsOverlay.classList.add("open");
  instructionsOverlay.setAttribute("aria-hidden", "false");
  syncBodyLock();
}

function closeInstructions() {
  instructionsOverlay.classList.remove("open");
  instructionsOverlay.setAttribute("aria-hidden", "true");
  syncBodyLock();
}

function goToRelativeDay(direction) {
  if (activeIndex === null) return;

  const nextIndex = direction === "next" ? activeIndex + 1 : activeIndex - 1;

  if (nextIndex >= 0 && nextIndex < itinerary.length) {
    openDay(nextIndex);
  }
}

app.innerHTML = itinerary
  .map((day, index) => {
    const label = getRoadmapLabel(day);

    return `
      <button
        class="roadmap-item"
        type="button"
        data-index="${index}"
        aria-label="${escapeHtml(day.date)} — ${escapeHtml(label)}"
      >
        <span class="roadmap-dot" aria-hidden="true"></span>
        <span class="roadmap-date">${escapeHtml(day.date)}</span>
        <span class="roadmap-label">${escapeHtml(label)}</span>
      </button>
    `;
  })
  .join("");

app.addEventListener("click", (event) => {
  const button = event.target.closest(".roadmap-item");
  if (!button) return;

  openDay(Number(button.dataset.index));
});

closeOverlayButton.addEventListener("click", closeDay);
openInstructionsButton.addEventListener("click", openInstructions);
closeInstructionsButton.addEventListener("click", closeInstructions);

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeDay();
    return;
  }

  const navButton = event.target.closest(".day-nav-btn");
  if (!navButton || navButton.disabled) return;

  if (navButton.dataset.nav === "prev") {
    goToRelativeDay("prev");
  }

  if (navButton.dataset.nav === "next") {
    goToRelativeDay("next");
  }
});

instructionsOverlay.addEventListener("click", (event) => {
  if (event.target === instructionsOverlay) {
    closeInstructions();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (instructionsOverlay.classList.contains("open")) {
      closeInstructions();
      return;
    }

    if (overlay.classList.contains("open")) {
      closeDay();
      return;
    }
  }

  if (!overlay.classList.contains("open")) return;

  if (event.key === "ArrowLeft") {
    goToRelativeDay("prev");
  }

  if (event.key === "ArrowRight") {
    goToRelativeDay("next");
  }
});