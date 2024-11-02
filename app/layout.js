import "./globals.css";

export const metadata = {
  title: "First Crack Coffee",
  description:
    "Discover First Crack, your destination for exceptional specialty coffee in Liverpool. Explore our expertly roasted beans, sustainable practices, and community-driven ethos. Join us on a journey of flavor and experience the art of coffee crafted with care. Sip, share, and enjoy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
