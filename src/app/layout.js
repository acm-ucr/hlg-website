/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Teammate from "../components/team/Teammate";
import Slides from "../components/events/Slides";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200"],
  variable: "--font-montserrat",
});
export const metadata = {
  title: "HLG at UCR",
  description: "Highlander Gaming at UCR",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={montserrat.className}>
//         <Navigation />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

function Test() {
  return <Teammate />;
}

export default Test;
