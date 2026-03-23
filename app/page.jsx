export default function VietnamItineraryPage() {
  const itinerary = [
    {
      date: "27/03",
      title: "Ho Chi Minh",
      subtitle: "Llegada + paseo tranquilo",
      city: "Ho Chi Minh",
      mood: "Arrival day",
      highlights: [
        "Llegada 5:55 AM",
        "Notre Dame Cathedral",
        "Central Post Office",
        "Ben Thanh Market",
        "War Remnants Museum",
        "Rooftop o Bui Vien por la noche",
      ],
      sleep: {
        place: "CityHouse - City Oasis",
        note: "Cancelable hasta 25 marzo · pago en alojamiento · ~62€",
        url: "https://www.booking.com/hotel/vn/cityhouse-cityoasis.es.html?label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&aid=2336990&ucfs=1&checkin=2026-03-27&checkout=2026-03-28&dest_id=-3730078&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=oos%3D1&srpvid=831ea6695de20087&srepoch=1772754686&matching_block_id=697150202_287610472_2_0_0&atlas_src=sr_iw_title",
      },
    },
    {
      date: "28/03",
      title: "Cu Chi + Hoi An",
      subtitle: "Tour + vuelo + farolillos",
      city: "Ho Chi Minh → Da Nang → Hoi An",
      mood: "Travel day",
      transport: [
        "Cu Chi Tunnels tour · 7:30–14:00",
        "Vuelo 16:55–18:05 · ~106€",
        "Taxi a Hoi An · 45 min",
      ],
      highlights: [
        "Saigon river walk",
        "Cafés",
        "Mercado",
        "Old Town",
        "Farolillos",
        "Cena junto al río",
      ],
      sleep: {
        place: "Legacy Hoi An Resort",
        note: "Pagado · cancelable hasta 12 marzo · 114€",
        url: "https://www.booking.com/hotel/vn/legacy-hoi-an-resort.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&all_sr_blocks=59405234_0_2_1_0&checkin=2026-03-28&checkout=2026-03-30&dest_id=7048231&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=10&highlighted_blocks=59405234_0_2_1_0&hpos=10&matching_block_id=59405234_0_2_1_0&nflt=oos%3D1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=59405234_0_2_1_0__350266168&srepoch=1772758534&srpvid=68cd02ac6d2b01fb&type=total&ucfs=1#map_closed",
      },
    },
    {
      date: "29/03",
      title: "Hoi An",
      subtitle: "Día completo",
      city: "Hoi An",
      mood: "Relax day",
      highlights: [
        "Coconut basket boats o playa An Bang",
        "Cafés bonitos",
        "Mercado",
        "Farolillos por la noche",
      ],
      sleep: {
        place: "Legacy Hoi An Resort",
        note: "Segunda noche",
        url: "https://www.booking.com/hotel/vn/legacy-hoi-an-resort.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&all_sr_blocks=59405234_0_2_1_0&checkin=2026-03-28&checkout=2026-03-30&dest_id=7048231&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=10&highlighted_blocks=59405234_0_2_1_0&hpos=10&matching_block_id=59405234_0_2_1_0&nflt=oos%3D1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=59405234_0_2_1_0__350266168&srepoch=1772758534&srpvid=68cd02ac6d2b01fb&type=total&ucfs=1#map_closed",
      },
    },
    {
      date: "30/03",
      title: "Hue",
      subtitle: "Ruta escénica + tren nocturno",
      city: "Hoi An → Hue → Hanoi",
      mood: "Scenic transfer",
      transport: [
        "Hoi An → Hue",
        "Parada en Hai Van Pass",
        "Tren nocturno a Hanoi · 121,62€",
      ],
      highlights: ["Imperial City", "Pagoda Thien Mu", "Noche en tren"],
      sleep: { place: "Night train", note: "Dormís en tren" },
    },
    {
      date: "31/03",
      title: "Ninh Binh",
      subtitle: "Llegada + arrozales",
      city: "Hanoi → Ninh Binh",
      mood: "Nature day",
      transport: ["Traslado ~2 horas"],
      highlights: ["Paseo por Tam Coc", "Bicicleta por arrozales"],
      sleepOptions: [
        {
          place: "Hidden Valley Eco Retreat Trang An",
          note: "63€ · 2 noches",
          url: "https://www.booking.com/hotel/vn/green-land-cabins.es.html?label=gen173nr-10CAso9AFCEWdyZWVuLWxhbmQtY2FiaW5zSDNYBGgPiAEBmAEzuAEHyAEN2AED6AEB-AEBiAIBqAIBuAKns6rNBsACAdICJDVmNWNlNWQ0LTY0ZTgtNDU5YS05ZmY2LWEzNzUzNzBjNzMwMdgCAeACAQ&sid=cfa4356566fdcc3ae56de0018bf5c400&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&",
        },
        {
          place: "Nature Garden Ecolodge",
          note: "121€ · 2 noches · anular antes 31 marzo",
        },
        {
          place: "Hang Mua Ecolodge",
          note: "130€ · 2 noches",
          url: "https://www.booking.com/hotel/vn/hang-mua-ecolodge.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&checkin=2026-03-31&checkout=2026-04-02&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1772788015&srpvid=e52540116b630193&type=total&ucfs=1#no_availability_msg",
        },
        {
          place: "Emeralda Resort",
          note: "Opción premium · precio no cerrado",
          url: "https://www.booking.com/hotel/vn/emeralda-ninh-binh-resort-and-spa.es.html?aid=2336990&label=en-au-booking-desktop-LWJbXP0fLLuHVdmWiiFIygS652804038914%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1214534129%3Alp9071353%3Ali%3Adec%3Adm&sid=cfa4356566fdcc3ae56de0018bf5c400&all_sr_blocks=35631801_0_2_1_0&checkin=2026-03-31&checkout=2026-04-02&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=35631801_0_2_1_0&hpos=2&matching_block_id=35631801_0_2_1_0&nflt=class%3D5%3Bht_id%3D206&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=35631801_0_2_1_0__431156601&srepoch=1772690455&srpvid=2bf12a46efab01ff&type=total&ucfs=1&",
        },
      ],
    },
    {
      date: "01/04",
      title: "Ninh Binh",
      subtitle: "Día completo",
      city: "Ninh Binh",
      mood: "Best of Ninh Binh",
      highlights: ["Tam Coc boat ride", "Hang Mua viewpoint", "Bai Dinh pagoda o Trang An"],
      sleep: { place: "Ninh Binh", note: "Segunda noche en la misma base/hotel que elijáis" },
    },
    {
      date: "02/04",
      title: "Ninh Binh → Hanoi",
      subtitle: "Último rato en Ninh Binh + noche en Hanoi",
      city: "Ninh Binh → Hanoi",
      mood: "Transit + city",
      highlights: ["Todavía por Ninh Binh parte del día", "Llegada a Hanoi por la tarde/noche"],
      transport: ["Traslado a Hanoi"],
      sleep: { place: "Hanoi", note: "Hotel en Hanoi por definir" },
    },
    {
      date: "03/04",
      title: "Hanoi",
      subtitle: "Día completo en la ciudad",
      city: "Hanoi",
      mood: "City day",
      highlights: ["Día para Hanoi"],
      sleep: { place: "Hanoi", note: "Segunda noche en Hanoi · hotel por definir" },
    },
    {
      date: "04/04",
      title: "Ha Long Cruise",
      subtitle: "Día 1",
      city: "Hanoi → Ha Long Bay",
      mood: "Cruise day",
      transport: ["Salida 8:00–8:30 · crucero total 218€"],
      highlights: ["Kayak", "Cuevas", "Isla Titop", "Sunset deck", "Dormir en el barco"],
      sleep: { place: "Barco", note: "Noche a bordo" },
    },
    {
      date: "05/04",
      title: "Hanoi",
      subtitle: "Vuelta del crucero",
      city: "Ha Long → Hanoi",
      mood: "Cruise + city",
      highlights: ["Fin del crucero 11:00–12:00", "Transfer a Hanoi", "Pasar el día por Hanoi"],
      sleep: { place: "Sereniity Villa", note: "1 noche · 30€" },
    },
    {
      date: "06/04",
      title: "Vuelo temprano",
      subtitle: "Salida",
      city: "Hanoi → Ho Chi Minh",
      mood: "Return day",
      transport: ["Vuelo 5:20 AM", "Taxi 10–15€ · ~20 min"],
      highlights: ["Conexión con vuelo internacional"],
      sleep: { place: "—", note: "Fin del viaje" },
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <p style={styles.kicker}>Vietnam itinerary</p>
          <h1 style={styles.title}>All your days in one screen</h1>
          <p style={styles.subtitle}>
            Very simple version for Vercel. Tap each day to open the plan.
          </p>
        </header>

        <div style={styles.list}>
          {itinerary.map((day) => (
            <details key={day.date + day.title} style={styles.card}>
              <summary style={styles.summary}>
                <div>
                  <div style={styles.topRow}>
                    <span style={styles.dateBadge}>{day.date}</span>
                    <span style={styles.mood}>{day.mood}</span>
                  </div>
                  <h2 style={styles.cardTitle}>{day.title}</h2>
                  <p style={styles.cardSubtitle}>{day.subtitle}</p>
                  <p style={styles.city}>{day.city}</p>
                </div>
                <span style={styles.chevron}>⌄</span>
              </summary>

              <div style={styles.content}>
                <section style={styles.section}>
                  <h3 style={styles.sectionTitle}>Plan</h3>
                  <div style={styles.tagsWrap}>
                    {(day.highlights || []).map((item) => (
                      <span key={item} style={styles.tag}>{item}</span>
                    ))}
                  </div>
                </section>

                {day.transport && (
                  <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>Transport</h3>
                    <ul style={styles.ul}>
                      {day.transport.map((item) => (
                        <li key={item} style={styles.li}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {day.sleep && (
                  <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>Sleep</h3>
                    <div style={styles.sleepBox}>
                      <strong>{day.sleep.place}</strong>
                      <p style={styles.note}>{day.sleep.note}</p>
                      {day.sleep.url && (
                        <a href={day.sleep.url} target=\"_blank\" rel=\"noreferrer\" style={styles.link}>
                          Open hotel
                        </a>
                      )}
                    </div>
                  </section>
                )}

                {day.sleepOptions && (
                  <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>Sleep options</h3>
                    <div style={styles.optionsList}>
                      {day.sleepOptions.map((option) => (
                        <div key={option.place} style={styles.sleepBox}>
                          <strong>{option.place}</strong>
                          <p style={styles.note}>{option.note}</p>
                          {option.url && (
                            <a href={option.url} target=\"_blank\" rel=\"noreferrer\" style={styles.link}>
                              View option
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: \"100vh\",
    background: \"#121214\",
    color: \"#f5f5f5\",
    fontFamily: \"Arial, sans-serif\",
    padding: \"24px 16px 48px\",
  },
  container: {
    maxWidth: \"900px\",
    margin: \"0 auto\",
  },
  header: {
    marginBottom: \"24px\",
  },
  kicker: {
    color: \"#f0b6bc\",
    fontSize: \"12px\",
    letterSpacing: \"0.2em\",
    textTransform: \"uppercase\",
    margin: 0,
  },
  title: {
    fontSize: \"40px\",
    lineHeight: 1.05,
    margin: \"10px 0 10px\",
  },
  subtitle: {
    color: \"#c8c8cc\",
    margin: 0,
    fontSize: \"16px\",
  },
  list: {
    display: \"grid\",
    gap: \"14px\",
  },
  card: {
    background: \"#1b1b1f\",
    border: \"1px solid #2a2a30\",
    borderRadius: \"18px\",
    overflow: \"hidden\",
  },
  summary: {
    listStyle: \"none\",
    cursor: \"pointer\",
    padding: \"18px\",
    display: \"flex\",
    justifyContent: \"space-between\",
    alignItems: \"flex-start\",
    gap: \"12px\",
  },
  topRow: {
    display: \"flex\",
    alignItems: \"center\",
    gap: \"10px\",
    marginBottom: \"10px\",
    flexWrap: \"wrap\",
  },
  dateBadge: {
    background: \"#fff\",
    color: \"#7f1d1d\",
    borderRadius: \"999px\",
    padding: \"6px 10px\",
    fontSize: \"12px\",
    fontWeight: 700,
  },
  mood: {
    color: \"#9ca3af\",
    fontSize: \"11px\",
    textTransform: \"uppercase\",
    letterSpacing: \"0.15em\",
  },
  cardTitle: {
    margin: \"0 0 6px\",
    fontSize: \"24px\",
  },
  cardSubtitle: {
    margin: \"0 0 8px\",
    color: \"#d4d4d8\",
  },
  city: {
    margin: 0,
    color: \"#a1a1aa\",
    fontSize: \"14px\",
  },
  chevron: {
    color: \"#a1a1aa\",
    fontSize: \"24px\",
    lineHeight: 1,
    paddingTop: \"6px\",
  },
  content: {
    borderTop: \"1px solid #2a2a30\",
    padding: \"18px\",
    display: \"grid\",
    gap: \"18px\",
  },
  section: {},
  sectionTitle: {
    margin: \"0 0 10px\",
    fontSize: \"15px\",
    color: \"#f0b6bc\",
  },
  tagsWrap: {
    display: \"flex\",
    flexWrap: \"wrap\",
    gap: \"8px\",
  },
  tag: {
    border: \"1px solid #33343a\",
    background: \"#232329\",
    borderRadius: \"999px\",
    padding: \"8px 12px\",
    fontSize: \"14px\",
  },
  ul: {
    margin: 0,
    paddingLeft: \"18px\",
    color: \"#d4d4d8\",
  },
  li: {
    marginBottom: \"8px\",
  },
  sleepBox: {
    background: \"#232329\",
    border: \"1px solid #33343a\",
    borderRadius: \"14px\",
    padding: \"14px\",
  },
  note: {
    color: \"#c8c8cc\",
    margin: \"8px 0 0\",
  },
  link: {
    display: \"inline-block\",
    marginTop: \"10px\",
    color: \"#ffffff\",
    textDecoration: \"underline\",
  },
  optionsList: {
    display: \"grid\",
    gap: \"10px\",
  },
};