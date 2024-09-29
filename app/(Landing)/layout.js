import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactQueryProvider } from "../ReactQueryprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BallDraft",
  description: "The Most Trusted Fantasy Sports Platform",
  
};

export default function RootLayout({ children }) {

  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="center-max-width">
            <div className="content-container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
