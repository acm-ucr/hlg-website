/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  defaultTitle: "HLG at UCR",
  description: "Highlander Gaming at UCR",
};

export default function RootLayout({ children, pageTitle }) {
  const title = pageTitle ? `HLG | ${pageTitle}` : metadata.defaultTitle;
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body className={`${montserrat.className}`}>
        <Navigation />
        <div className="py-10" />
        {children}
        <div className="py-10" />
        <Footer />
      </body>
    </html>
  );
}
