export const metadata = {
  title: "Vietnam Itinerary",
  description: "Vietnam trip itinerary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}