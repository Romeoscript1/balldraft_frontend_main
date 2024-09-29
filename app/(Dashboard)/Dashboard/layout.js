"use client"

import { Inter } from "next/font/google";
import "../../globals.css";
import Footer from "@/components/Footer";
import DashboardNav from "@/components/DashboardNav";
import { ReactQueryProvider } from "@/app/ReactQueryprovider";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BallDraft Dashbaord",
  description: "The Most Trusted Fantasy Sports Platform",
  
};

export default function RootLayout({ children }) {
  const router = useRouter();

  // useEffect(() => {
  //   const accessToken = sessionStorage.getItem("access_token");
  //   if (!accessToken) {
  //     router.push("/Auth/login");
  //   }
  // }, [router]);

  return (
      <ReactQueryProvider>
        <html lang="en">
          <body className={inter.className}>
            <Toaster></Toaster>
            <div className="center-max-width">
              <div className="content-container">
                <DashboardNav />
                {children}
                <Footer />
              </div>
            </div>
          </body>
        </html>
      </ReactQueryProvider>
  );
}
