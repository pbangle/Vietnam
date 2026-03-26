const makeCover = ({ title, subtitle, date, colors }) => {
  const [c1, c2, c3] = colors;

  const svg = `
    <svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="108" y1="78" x2="1042" y2="834" gradientUnits="userSpaceOnUse">
          <stop stop-color="${c1}" />
          <stop offset="0.55" stop-color="${c2}" />
          <stop offset="1" stop-color="${c3}" />
        </linearGradient>
        <radialGradient id="glow1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(935 210) rotate(120) scale(520 520)">
          <stop stop-color="white" stop-opacity="0.22"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glow2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 730) rotate(65) scale(430 430)">
          <stop stop-color="white" stop-opacity="0.12"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="1200" height="900" rx="0" fill="url(#bg)"/>
      <rect width="1200" height="900" fill="url(#glow1)"/>
      <rect width="1200" height="900" fill="url(#glow2)"/>

      <circle cx="1020" cy="186" r="146" fill="white" fill-opacity="0.08"/>
      <circle cx="910" cy="262" r="236" stroke="white" stroke-opacity="0.10" stroke-width="2"/>
      <circle cx="210" cy="734" r="160" stroke="white" stroke-opacity="0.08" stroke-width="2"/>

      <path d="M-30 716C138 608 314 578 495 622C644 658 741 726 898 736C1011 744 1100 715 1230 640V930H-30V716Z" fill="white" fill-opacity="0.08"/>
      <path d="M-40 790C95 704 240 680 387 705C526 730 637 799 802 811C942 821 1068 785 1240 676V930H-40V790Z" fill="white" fill-opacity="0.06"/>

      <rect x="72" y="74" width="164" height="42" rx="21" fill="white" fill-opacity="0.14"/>
      <text x="107" y="101" fill="white" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700">${date}</text>

      <text x="72" y="660" fill="white" font-family="Inter, Arial, sans-serif" font-size="88" font-weight="800" letter-spacing="-2">${title}</text>
      <text x="76" y="720" fill="white" fill-opacity="0.92" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="500">${subtitle}</text>

      <text x="72" y="834" fill="white" fill-opacity="0.72" font-family="Inter, Arial, sans-serif" font-size="22" letter-spacing="4">GEMMA &amp; ALEX</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const itinerary = [
  {
    date: "27/03",
    title: "Ho Chi Minh",
    roadmapTitle: "Arrival in Ho Chi Minh",
    coverTitle: "Ho Chi Minh Arrival",
    cover: makeCover({
      title: "Ho Chi Minh",
      subtitle: "Arrival day + Cu Chi tunnels",
      date: "27/03",
      colors: ["#3e1321", "#b63b67", "#f59e66"],
    }),
    subtitle: "Arrival + Cu Chi tunnels + easy evening",
    city: "Ho Chi Minh",
    mood: "Arrival day",
    icon: "✦",
    highlights: [
      "09:00-ish · Arrive in District 1, drop bags, quick breakfast / coffee near the hotel",
      "10:00–11:00 · Easy central walk or short reset before the tour",
      "11:15–11:45 · Get ready for the Cu Chi tunnels plan",
      "12:00 · Cu Chi tunnels tour",
      "Back in the city later in the afternoon / evening",
      "Light dinner, Nguyen Hue / Saigon river walk or rooftop only if you still have energy",
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
    title: "Ho Chi Minh + Hoi An",
    roadmapTitle: "Fly to Hoi An",
    coverTitle: "Hoi An Arrival",
    cover: makeCover({
      title: "Hoi An",
      subtitle: "Arrival + lantern atmosphere",
      date: "28/03",
      colors: ["#4a1f18", "#c56a2e", "#e7b65d"],
    }),
    subtitle: "Slow morning, flight, and easy first evening in Hoi An",
    city: "Ho Chi Minh → Da Nang → Hoi An",
    mood: "Travel day",
    icon: "✈",
    transport: [
      "13:45–14:00 · Leave for the airport",
      "Flight Ho Chi Minh → Da Nang · 16:55–18:05 · 106€",
      "18:05–18:40 · Bags + airport exit",
      "18:40–19:25 · Taxi to Hoi An",
      "19:30-ish · Check-in at Legacy Hoi An Resort",
      "20:15–20:30 · Taxi / shuttle into Old Town",
      "22:15–22:30 · Back to hotel",
    ],
    highlights: [
      "08:30–10:15 · Relaxed breakfast + easy café morning",
      "10:15–11:30 · Free time nearby / packing / short stroll only",
      "11:30–12:30 · Early lunch",
      "12:30–13:15 · Back to hotel, collect bags, final reset",
      "20:30–22:15 · Slow lantern walk around Tran Phu / Bach Dang / riverside area in Hoi An",
      "Simple dinner by the river in Hoi An",
      "Keep it light · first contact evening only",
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
    roadmapTitle: "Full day in Hoi An",
    coverTitle: "Proper Hoi An Day",
    cover: makeCover({
      title: "Hoi An",
      subtitle: "Beach or countryside + Ancient Town",
      date: "29/03",
      colors: ["#66311f", "#b44f39", "#efb95f"],
    }),
    subtitle: "Proper Hoi An day",
    city: "Hoi An",
    mood: "Full day",
    icon: "✦",
    highlights: [
      "08:30–09:30 · Slow breakfast at the resort",
      "09:30–11:30 · An Bang Beach or Cam Thanh / Tra Que countryside",
      "11:45–13:15 · Lunch",
      "13:15–15:00 · Back to hotel / pool / shower / rest",
      "15:30–18:30 · Ancient Town proper · use the heritage ticket here",
      "Japanese Covered Bridge + one old house + assembly hall / museum + market area",
      "18:30–21:30 · Lantern hours · riverside walk · dinner · café / bar",
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
    roadmapTitle: "Hue + night train",
    coverTitle: "Hue & Night Train",
    cover: makeCover({
      title: "Hue",
      subtitle: "Scenic route + efficient stop",
      date: "30/03",
      colors: ["#2d1c4a", "#5a3d96", "#4eb0c5"],
    }),
    subtitle: "Early departure, scenic Hue route, then night train",
    city: "Hoi An → Hue → Hanoi",
    mood: "Scenic transfer",
    icon: "✦",
    transport: [
      "07:00–08:00 · Breakfast + check-out prep",
      "08:00–08:30 · Final check-out, car arrives",
      "08:30–12:00 / 12:30 · Private car Hoi An → Hue with scenic stops",
      "Hai Van Pass viewpoint + short stop if needed",
      "Night train Hue → Hanoi · 121.62€",
    ],
    highlights: [
      "12:30–13:30 · Lunch in Hue",
      "13:45–16:00 · Imperial City",
      "16:15–17:00 · Thien Mu Pagoda",
      "17:15–18:30 · Early dinner / café / buffer before train",
      "Treat the drive itself as part of the experience",
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
    roadmapTitle: "Arrival in Ninh Binh",
    coverTitle: "Ninh Binh Arrival",
    cover: makeCover({
      title: "Ninh Binh",
      subtitle: "Tam Coc afternoon",
      date: "31/03",
      colors: ["#16352a", "#2f7b5c", "#9fcf78"],
    }),
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
    roadmapTitle: "Full day in Ninh Binh",
    coverTitle: "Best of Ninh Binh",
    cover: makeCover({
      title: "Ninh Binh",
      subtitle: "Boat ride, viewpoint, temples",
      date: "01/04",
      colors: ["#163126", "#2e6b52", "#7cbf84"],
    }),
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
    title: "Ninh Binh",
    roadmapTitle: "Extra day in Ninh Binh",
    coverTitle: "More Time in Ninh Binh",
    cover: makeCover({
      title: "Ninh Binh",
      subtitle: "Extra full day to explore",
      date: "02/04",
      colors: ["#1a3528", "#49745f", "#b9c980"],
    }),
    subtitle: "Extra full day there",
    city: "Ninh Binh",
    mood: "Nature day",
    icon: "✦",
    highlights: [
      "Extra full day in Ninh Binh",
      "Time for anything missed the day before",
      "Relaxed morning or more exploring",
    ],
    sleep: {
      place: "Ninh Binh",
      note: "Third night in the same hotel you choose",
      price: "Included",
    },
  },
  {
    date: "03/04",
    title: "Ninh Binh → Hanoi",
    roadmapTitle: "Back to Hanoi",
    coverTitle: "Hanoi Night",
    cover: makeCover({
      title: "Hanoi",
      subtitle: "Transfer day + evening in the city",
      date: "03/04",
      colors: ["#211724", "#50314e", "#b85165"],
    }),
    subtitle: "Transfer day + Hanoi at night",
    city: "Ninh Binh → Hanoi",
    mood: "Transit + city",
    icon: "✦",
    transport: ["Transfer to Hanoi"],
    highlights: [
      "Last hours in Ninh Binh",
      "Arrive in Hanoi in the afternoon / evening",
      "Evening in Hanoi",
    ],
    sleep: {
      place: "Hanoi",
      note: "Night in Hanoi · hotel still to define",
      price: "TBD",
    },
  },
  {
    date: "04/04",
    title: "Ha Long Cruise",
    roadmapTitle: "Ha Long cruise",
    coverTitle: "Ha Long Bay Cruise",
    cover: makeCover({
      title: "Ha Long",
      subtitle: "Cruise day one",
      date: "04/04",
      colors: ["#0f2f45", "#1e6f87", "#77c8cf"],
    }),
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
    roadmapTitle: "Hanoi after cruise",
    coverTitle: "Back to Hanoi",
    cover: makeCover({
      title: "Hanoi",
      subtitle: "Cruise ends + city return",
      date: "05/04",
      colors: ["#18243f", "#354f77", "#d86a86"],
    }),
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
    roadmapTitle: "Departure day",
    coverTitle: "Departure",
    cover: makeCover({
      title: "Departure",
      subtitle: "Early flight from Hanoi",
      date: "06/04",
      colors: ["#2a2430", "#5a4e65", "#d4a373"],
    }),
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

export default itinerary;