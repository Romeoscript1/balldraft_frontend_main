"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Balance from "@/components/Balance";
import SportsBook from "@/components/SportsBook";
import MoreContext from "@/components/Contests/MoreContextTabs";
import ContextSwiper from "@/components/Contests/contextswiper";

export default function Home() {
  const [leagues, setLeagues] = useState([]);
  const url = process.env.NEXT_PUBLIC_MICROSERVICE_URL;
  const apiUrl = `${url}get-leagues?total_to_win=false&limit=100000000000000`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLeagues(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <div className="bg-white">
      <Balance leagues={leagues} />
      <SportsBook leagues={leagues} loading={loading} />
      <ContextSwiper />
      <MoreContext leagues={leagues} />
    </div>
  );
}
