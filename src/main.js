import itinerary from "./data/itinerary.js";

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSleepBox(item, label) {
  return `
    <div class="sleep-box">
      <div class="sleep-title">
        <strong class="sleep-name">${escapeHtml(item.place)}</strong>
        ${item.price ? `<span class="price-pill">${escapeHtml(item.price)}</span>` : ""}
      </div>
      <p class="note">${escapeHtml(item.note || "")}</p>
      ${
        item.url
          ? `<a class="hotel-link" href="${item.url}" target="_blank" rel="noreferrer">${label}</a>`
          : ""
      }
    </div>
  `;
}

const app = document.getElementById("app");

app.innerHTML = itinerary
  .map((day) => {
    const highlights = (day.highlights || [])
      .map((item) => `<span class="tag">${escapeHtml(item)}</span>`)
      .join("");

    const transport = day.transport
      ? `
        <section>
          <h3 class="section-title">Transport</h3>
          <ul class="transport-list">
            ${day.transport.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>
      `
      : "";

    const sleep = day.sleep
      ? `
        <section>
          <h3 class="section-title">Stay</h3>
          ${renderSleepBox(day.sleep, "Open hotel")}
        </section>
      `
      : "";

    const sleepOptions = day.sleepOptions
      ? `
        <section>
          <h3 class="section-title">Hotel options</h3>
          <div class="options-list">
            ${day.sleepOptions.map((item) => renderSleepBox(item, "View option")).join("")}
          </div>
        </section>
      `
      : "";

    return `
      <details class="card" ${day.date === "27/03" ? "open" : ""}>
        <summary class="summary">
          <div class="summary-left">
            <div class="top-row">
              <span class="date-badge">${escapeHtml(day.date)}</span>
              <span class="mood">${escapeHtml(day.mood)}</span>
            </div>
            <h2 class="card-title">${escapeHtml(day.icon || "")} ${escapeHtml(day.title)}</h2>
            <p class="card-subtitle">${escapeHtml(day.subtitle)}</p>
            <p class="city">${escapeHtml(day.city)}</p>
          </div>
          <span class="chevron">⌄</span>
        </summary>

        <div class="content">
          <section>
            <h3 class="section-title">Plan</h3>
            <div class="tags-wrap">${highlights}</div>
          </section>
          ${transport}
          ${sleep}
          ${sleepOptions}
        </div>
      </details>
    `;
  })
  .join("");