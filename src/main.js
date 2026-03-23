const itinerary = [
  {
    date: "27/03",
    title: "Ho Chi Minh",
    subtitle: "Arrival + easy first day",
    city: "Ho Chi Minh",
    mood: "Arrival day",
    icon: "✦",
    highlights: [
      "Arrive 5:55 AM",
      "Notre Dame Cathedral",
      "Central Post Office",
      "Ben Thanh Market",
      "War Remnants Museum",
      "Rooftop or Bui Vien at night",
    ],
    sleep: {
      place: "CityHouse - City Oasis",
      note: "Free cancellation until 25 March · pay at property · 1,886,000 VND ≈ 62€",
      price: "62€",
      url: "https://www.booking.com/hotel/vn/cityhouse-cityoasis.es.html?label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&aid=2336990&ucfs=1&checkin=2026-03-27&checkout=2026-03-28&dest_id=-3730078&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=oos%3D1&srpvid=831ea6695de20087&srepoch=1772754686&matching_block_id=697150202_287610472_2_0_0&atlas_src=sr_iw_title",
    },
  },
  {
    date: "28/03",
    title: "Ho Chi Minh + Cu Chi + Hoi An",
    subtitle: "Morning tour, afternoon flight, evening in Hoi An",
    city: "Ho Chi Minh → Da Nang → Hoi An",
    mood: "Travel day",
    icon: "✈",
    transport: [
      "Cu Chi Tunnels tour · 7:30–14:00",
      "Flight Ho Chi Minh → Da Nang · 16:55–18:05 · 106€",
      "Taxi Da Nang → Hoi An · 45 min",
    ],
    highlights: [
      "Saigon river walk",
      "Cafés",
      "Market",
      "Old Town",
      "Lanterns",
      "Dinner by the river",
    ],
    sleep: {
      place: "Legacy Hoi An Resort",
      note: "Already paid · free cancellation until 12 March · 114€",
      price: "114€",
      url: "https://www.booking.com/hotel/vn/legacy-hoi-an-resort.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&all_sr_blocks=59405234_0_2_1_0&checkin=2026-03-28&checkout=2026-03-30&dest_id=7048231&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=10&highlighted_blocks=59405234_0_2_1_0&hpos=10&matching_block_id=59405234_0_2_1_0&nflt=oos%3D1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=59405234_0_2_1_0__350266168&srepoch=1772758534&srpvid=68cd02ac6d2b01fb&type=total&ucfs=1#map_closed",
    },
  },
  {
    date: "29/03",
    title: "Hoi An",
    subtitle: "Full day",
    city: "Hoi An",
    mood: "Relax day",
    icon: "✦",
    highlights: [
      "Coconut basket boats or An Bang beach",
      "Cute cafés",
      "Market",
      "Lanterns again at night",
    ],
    sleep: {
      place: "Legacy Hoi An Resort",
      note: "Second night in Hoi An",
      price: "Included",
      url: "https://www.booking.com/hotel/vn/legacy-hoi-an-resort.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&all_sr_blocks=59405234_0_2_1_0&checkin=2026-03-28&checkout=2026-03-30&dest_id=7048231&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=10&highlighted_blocks=59405234_0_2_1_0&hpos=10&matching_block_id=59405234_0_2_1_0&nflt=oos%3D1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=59405234_0_2_1_0__350266168&srepoch=1772758534&srpvid=68cd02ac6d2b01fb&type=total&ucfs=1#map_closed",
    },
  },
  {
    date: "30/03",
    title: "Hoi An → Hue → Hanoi",
    subtitle: "Scenic transfer + night train",
    city: "Hoi An → Hue → Hanoi",
    mood: "Scenic transfer",
    icon: "✦",
    transport: [
      "Private car or taxi Hoi An → Hue",
      "Stop at Hai Van Pass",
      "Night train Hue → Hanoi · 121.62€",
    ],
    highlights: [
      "Imperial City",
      "Thien Mu Pagoda",
      "Sleep on the train",
    ],
    sleep: {
      place: "Night train",
      note: "You sleep on the train",
      price: "121.62€",
    },
  },
  {
    date: "31/03",
    title: "Hanoi → Ninh Binh",
    subtitle: "Arrival + Tam Coc afternoon",
    city: "Hanoi → Ninh Binh",
    mood: "Nature day",
    icon: "✦",
    transport: [
      "Arrive early in Hanoi",
      "Transfer to Ninh Binh / Tam Coc · around 2 hours",
    ],
    highlights: [
      "Tam Coc walk",
      "Bike through rice fields",
    ],
    sleepOptions: [
      {
        place: "Hidden Valley Eco Retreat Trang An",
        note: "2 nights · best value option",
        price: "63€",
        url: "https://www.booking.com/hotel/vn/green-land-cabins.es.html?label=gen173nr-10CAso9AFCEWdyZWVuLWxhbmQtY2FiaW5zSDNYBGgPiAEBmAEzuAEHyAEN2AED6AEB-AEBiAIBqAIBuAKns6rNBsACAdICJDVmNWNlNWQ0LTY0ZTgtNDU5YS05ZmY2LWEzNzUzNzBjNzMwMdgCAeACAQ&sid=cfa4356566fdcc3ae56de0018bf5c400&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&",
      },
      {
        place: "Nature Garden Ecolodge Ninh Bình",
        note: "2 nights · cancel before 31 March",
        price: "121€",
      },
      {
        place: "Hang Mua Ecolodge",
        note: "2 nights",
        price: "130€",
        url: "https://www.booking.com/hotel/vn/hang-mua-ecolodge.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&checkin=2026-03-31&checkout=2026-04-02&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1772788015&srpvid=e52540116b630193&type=total&ucfs=1#no_availability_msg",
      },
      {
        place: "Emeralda Resort",
        note: "Premium option",
        price: "TBD",
        url: "https://www.booking.com/hotel/vn/emeralda-ninh-binh-resort-and-spa.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&all_sr_blocks=35631801_0_2_1_0&checkin=2026-03-31&checkout=2026-04-02&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=35631801_0_2_1_0&hpos=2&matching_block_id=35631801_0_2_1_0&nflt=class%3D5%3Bht_id%3D206&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=35631801_0_2_1_0__431156601&srepoch=1772690455&srpvid=2bf12a46efab01ff&type=total&ucfs=1&",
      },
    ],
  },
  {
    date: "01/04",
    title: "Ninh Binh",
    subtitle: "Best full day there",
    city: "Ninh Binh",
    mood: "Best of Ninh Binh",
    icon: "✦",
    highlights: [
      "Tam Coc boat ride",
      "Hang Mua viewpoint",
      "Bai Dinh Pagoda or Trang An",
    ],
    sleep: {
      place: "Ninh Binh",
      note: "Second night in the same hotel you choose",
      price: "Included",
    },
  },
  {
    date: "02/04",
    title: "Ninh Binh → Hanoi",
    subtitle: "Last hours in Ninh Binh + Hanoi at night",
    city: "Ninh Binh → Hanoi",
    mood: "Transit + city",
    icon: "✦",
    transport: ["Transfer to Hanoi"],
    highlights: [
      "Still around Ninh Binh for part of the day",
      "Arrive in Hanoi in the afternoon / evening",
    ],
    sleep: {
      place: "Hanoi",
      note: "Hotel in Hanoi still to define",
      price: "TBD",
    },
  },
  {
    date: "03/04",
    title: "Hanoi",
    subtitle: "City day",
    city: "Hanoi",
    mood: "City day",
    icon: "✦",
    highlights: ["Day in Hanoi"],
    sleep: {
      place: "Hanoi",
      note: "Second night in Hanoi · hotel still to define",
      price: "TBD",
    },
  },
  {
    date: "04/04",
    title: "Ha Long Cruise",
    subtitle: "Cruise day 1",
    city: "Hanoi → Ha Long Bay",
    mood: "Cruise day",
    icon: "✦",
    transport: [
      "Departure from Hanoi 8:00–8:30",
      "Cruise total: 218€",
    ],
    highlights: [
      "Kayak",
      "Caves",
      "Titop Island",
      "Sunset deck",
      "Sleep on the boat",
    ],
    sleep: {
      place: "Cruise boat",
      note: "Night on board",
      price: "218€ total",
    },
  },
  {
    date: "05/04",
    title: "Ha Long → Hanoi",
    subtitle: "Cruise day 2 + back to Hanoi",
    city: "Ha Long → Hanoi",
    mood: "Cruise + city",
    icon: "✦",
    highlights: [
      "Cruise ends 11:00–12:00",
      "Transfer back to Hanoi",
      "Spend the day in Hanoi",
    ],
    sleep: {
      place: "Sereniity Villa",
      note: "1 night in Hanoi",
      price: "30€",
    },
  },
  {
    date: "06/04",
    title: "Early flight",
    subtitle: "Departure day",
    city: "Hanoi → Ho Chi Minh",
    mood: "Return day",
    icon: "✈",
    transport: [
      "Flight 5:20 AM Hanoi → Ho Chi Minh",
      "Taxi to airport around 10–15€ · roughly 20 min",
    ],
    highlights: [
      "International connection afterwards",
    ],
    sleep: {
      place: "—",
      note: "End of trip",
      price: "",
    },
  },
];

function escapeHtml(text) {
  return String(text)
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
            <h2 class="card-title">${escapeHtml(day.icon)} ${escapeHtml(day.title)}</h2>
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