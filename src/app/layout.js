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
  title: "HLG at UCR",
  description: "Highlander Gaming at UCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navigation />
        <div className="py-10" />
        {children}
        <div className="mt-16">
          <Footer />
        </div>
      </body>
    </html>
  );
}
