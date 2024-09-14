"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import Sport from "@/public/images/Sport.svg";
import GameCard from "@/Reusable/GameCard";
import CircularProgressBar from "@/components/CircularProgressBar";
import Players from "@/components/Players";
import ContestTables from "@/components/Contests/ContestTables";
import { useParams } from "next/navigation";
import LoadingTemplate from "@/components/LoadingTemplate";
import toast, { Toaster } from "react-hot-toast";
import { formatunixTime } from "@/constants/constants";

const Page = () => {
  const dummyLeague = {
    league_id: 5,
    league_name: "UEFA Nations League",
    league_logo: "https://media.api-sports.io/football/leagues/5.png",
    league_country: "World",
    fixtures: [
      {
        id: 1276,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 200,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 5000,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 1000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1277,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 500,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 2000,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 1000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1278,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 1000,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 1000,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 1000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1279,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 2500,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 400,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 1000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1280,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 5000,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 400,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 2000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1281,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 10000,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 400,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 4000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1282,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 50000,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 100,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 5000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1283,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 250000,
        entry_type: "multiple",
        current_entry: 0,
        max_entry: 20,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 5000000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1284,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 5000,
        entry_type: "H2H",
        current_entry: 0,
        max_entry: 2,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 10000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
      {
        id: 1285,
        fixture_id: 1172891,
        title: "Kazakhstan vs Norway | UEFA Nations League",
        date: "2024-09-06T14:00:00+00:00",
        timezone: "UTC",
        timestamp: "1725631200",
        entry_amount: 10000,
        entry_type: "H2H",
        current_entry: 0,
        max_entry: 2,
        home: "Kazakhstan",
        home_id: "1095",
        home_logo: "https://media.api-sports.io/football/teams/1095.png",
        away: "Norway",
        away_id: "1090",
        away_logo: "https://media.api-sports.io/football/teams/1090.png",
        venue: "Ortalyq stadıon | Almaty",
        live: false,
        upcoming: true,
        completed: false,
        total_to_win: 20000,
        home_team_players: [
          {
            team: {
              id: 1095,
              name: "Kazakhstan",
              logo: "https://media.api-sports.io/football/teams/1095.png",
            },
            players: [
              {
                id: 111520,
                name: "B. Shaizada",
                age: 25,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111520.png",
              },
              {
                id: 56075,
                name: "I. Shatskiy",
                age: 34,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/56075.png",
              },
              {
                id: 111556,
                name: "D. Ustimenko",
                age: 23,
                number: null,
                position: "Goalkeeper",
                photo:
                  "https://media.api-sports.io/football/players/111556.png",
              },
              {
                id: 56080,
                name: "N. Alip",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56080.png",
              },
              {
                id: 111607,
                name: "R. Asrankulov",
                age: 24,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111607.png",
              },
              {
                id: 2226,
                name: "A. Beisebekov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/2226.png",
              },
              {
                id: 97575,
                name: "M. Bystrov",
                age: 31,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/97575.png",
              },
              {
                id: 56077,
                name: "T. Erlanov",
                age: 30,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56077.png",
              },
              {
                id: 111595,
                name: "B. Kairov",
                age: 30,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111595.png",
              },
              {
                id: 56078,
                name: "S. Maliy",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56078.png",
              },
              {
                id: 70343,
                name: "A. Marochkin",
                age: 33,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/70343.png",
              },
              {
                id: 111580,
                name: "A. Tanzharikov",
                age: 27,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/111580.png",
              },
              {
                id: 106859,
                name: "Ruslan Valiullin",
                age: 28,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/106859.png",
              },
              {
                id: 56084,
                name: "Y. Vorogovskiy",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/56084.png",
              },
              {
                id: 111485,
                name: "E. Astanov",
                age: 23,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111485.png",
              },
              {
                id: 311508,
                name: "I. Chesnokov",
                age: 24,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/311508.png",
              },
              {
                id: 56083,
                name: "I. Kuat",
                age: 30,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/56083.png",
              },
              {
                id: 111495,
                name: "R. Orazov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111495.png",
              },
              {
                id: 319495,
                name: "A. Sadybekov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/319495.png",
              },
              {
                id: 191889,
                name: "M. Samorodov",
                age: 21,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/191889.png",
              },
              {
                id: 70345,
                name: "A. Tagybergen",
                age: 33,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/70345.png",
              },
              {
                id: 111532,
                name: "E. Tapalov",
                age: 30,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/111532.png",
              },
              {
                id: 53533,
                name: "B. Zaynutdinov",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53533.png",
              },
              {
                id: 53534,
                name: "A. Zuev",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/53534.png",
              },
              {
                id: 70346,
                name: "A. Aymbetov",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/70346.png",
              },
              {
                id: 292349,
                name: "I. Sviridov",
                age: 21,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/292349.png",
              },
            ],
          },
        ],
        away_team_players: [
          {
            team: {
              id: 1090,
              name: "Norway",
              logo: "https://media.api-sports.io/football/teams/1090.png",
            },
            players: [
              {
                id: 19172,
                name: "Ø. Nyland",
                age: 33,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/19172.png",
              },
              {
                id: 57429,
                name: "M. Dyngeland",
                age: 28,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/57429.png",
              },
              {
                id: 39082,
                name: "E. Selvik",
                age: 26,
                number: null,
                position: "Goalkeeper",
                photo: "https://media.api-sports.io/football/players/39082.png",
              },
              {
                id: 39362,
                name: "M. Pedersen",
                age: 23,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39362.png",
              },
              {
                id: 39352,
                name: "J. Gundersen",
                age: 27,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39352.png",
              },
              {
                id: 265782,
                name: "D. Møller Wolfe",
                age: 21,
                number: null,
                position: "Defender",
                photo:
                  "https://media.api-sports.io/football/players/265782.png",
              },
              {
                id: 24845,
                name: "J. Ryerson",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/24845.png",
              },
              {
                id: 39279,
                name: "A. Hanche-Olsen",
                age: 26,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/39279.png",
              },
              {
                id: 18967,
                name: "L. Østigård",
                age: 24,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/18967.png",
              },
              {
                id: 1119,
                name: "K. Ajer",
                age: 25,
                number: null,
                position: "Defender",
                photo: "https://media.api-sports.io/football/players/1119.png",
              },
              {
                id: 39064,
                name: "P. Berg",
                age: 26,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39064.png",
              },
              {
                id: 278133,
                name: "Oscar Bobb",
                age: 20,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/278133.png",
              },
              {
                id: 1934,
                name: "S. Berge",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/1934.png",
              },
              {
                id: 39115,
                name: "A. Dønnum",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39115.png",
              },
              {
                id: 301528,
                name: "A. Schjelderup",
                age: 19,
                number: null,
                position: "Midfielder",
                photo:
                  "https://media.api-sports.io/football/players/301528.png",
              },
              {
                id: 36980,
                name: "M. Thorsby",
                age: 27,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/36980.png",
              },
              {
                id: 39143,
                name: "K. Thorstvedt",
                age: 24,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39143.png",
              },
              {
                id: 39291,
                name: "H. Vetlesen",
                age: 23,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/39291.png",
              },
              {
                id: 37127,
                name: "M. Ødegaard",
                age: 25,
                number: null,
                position: "Midfielder",
                photo: "https://media.api-sports.io/football/players/37127.png",
              },
              {
                id: 1100,
                name: "E. Haaland",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/1100.png",
              },
              {
                id: 314511,
                name: "A. Nusa",
                age: 18,
                number: null,
                position: "Attacker",
                photo:
                  "https://media.api-sports.io/football/players/314511.png",
              },
              {
                id: 2032,
                name: "J. Strand Larsen",
                age: 23,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/2032.png",
              },
              {
                id: 8492,
                name: "A. Sørloth",
                age: 28,
                number: null,
                position: "Attacker",
                photo: "https://media.api-sports.io/football/players/8492.png",
              },
            ],
          },
        ],
      },
    ],
  };

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Increased visible cards to 4
  const { id } = useParams();
  const { lid } = useParams();

  const [cards, setCards] = useState(null);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const oddsContainer = useRef();

  //  const apiUrl = `https://microservice.balldraft.com/get-fixture/${id}`;
  // const apiUrl = `https://api.balldraft.com/get-fixture/1144582`;

  const apiUrl = `https://microservice.balldraft.com/get-league/${lid}`;

  const getCards = (league) => {
    if (id == "l") {
      const lowestEntryFixture = league.fixtures.reduce((lowest, fixture) => {
        return lowest === null || fixture.entry_amount < lowest.entry_amount
          ? fixture
          : lowest;
      }, null);

      return lowestEntryFixture;
    }
    return league.fixtures.find((fixture) => fixture.id == id);
  };

  useEffect(() => {
    // setLeagues(dummyLeague);
    // setCards(getCards(dummyLeague));
    // console.log("CARDS", getCards(dummyLeague));
    // setLoading(false);

    const fetchData = async () => {
      try {
        console.log("MAKING REQUEST");
        const response = await axios.get(apiUrl);
        console.log(response);
        setLeagues(response.data); //get the league
        setCards(getCards(response.data)); ///get the particular fixture from the league
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching games, please try again");
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function scrollContainerLeftByWidth() {
    const container = oddsContainer.current;
    container.scrollLeft -= container.clientWidth;
  }

  function scrollContainerRightByWidth() {
    const container = oddsContainer.current;
    container.scrollLeft += container.clientWidth;
  }

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < (cards?.length || 0) - visibleCards) {
      setStartIndex(startIndex + 1);
    }
  };

  if (loading) {
    return <LoadingTemplate />;
  }

  return (
    <div className="p-[5px] sm:p-[1.5rem]">
      <Toaster />
      <div className="flex items-center justify-between w-full mb-10">
        <div>
          <div className="flex items-center gap-5 mb-5">
            <span className="font-bold text-lg">{cards?.title} </span>
            <img src="/images/Sport.svg" alt="Sport Icon" />
          </div>
          <div className="flex flex-col items-start sm:items-center md:flex-row gap-3 md:gap-10">
            <div className="flex gap-3 whitespace-nowrap text-[14px]">
              <button className="bg-[#FF6D00] rounded-full whitespace-nowrap text-white px-5 tracking-tight py-3">
                $15,000 - $3K To 1st
              </button>
              <button className="text-gray-700 tracking-tight">
                {formatunixTime(cards?.timestamp)} |{" "}
                {formatunixTime(cards?.timestamp, "day")}
              </button>
            </div>
            <div className="flex gap-4 items-center tracking-tight text-[12px] sm:text-[15px]">
              <div className="flex gap-2">
                <p className="w-[25px] sm:w-[30px] text-[E6EAEE] text-[10px] sm:text-[11px] flex justify-center items-center font-[700] h-[25px] sm:h-[30px] rounded-[50%] bg-[#E6EAEE]">
                  G
                </p>
                <button className="text-gray-700 ">
                  Guaranteed Prize Pool
                </button>
              </div>
              <div className="flex gap-2">
                <p className="w-[25px] sm:w-[30px] text-[#ff0000] text-[10px] sm:text-[11px] flex justify-center items-center font-[700] h-[25px] sm:h-[30px] rounded-[50%] bg-[#ffe6e6]">
                  M
                </p>
                <button className="text-gray-700">Multi-Entry (50 max)</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <CircularProgressBar size={10} contestTime={cards?.date} />
        </div>
        <div className="lg:flex hidden">
          <CircularProgressBar contestTime={cards?.date} />
        </div>
      </div>

      <div className="flex flex-col min-[1121px]:flex-row gap-2 sm:gap-5 items-center justify-between w-full">
        <div className="flex gap-2 relative items-center w-full">
          <div className="rounded-xl flex items-center mb-10 sm:p-5">
            <span className="font-semibold sm:mr-10 hidden">8 games</span>
            <button
              onClick={scrollContainerLeftByWidth}
              className="p-3 rounded-lg bg-[#f1f0f0]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_152_12752)">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_152_12752">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div
            className="flex transition-transform duration-300 gap-5 ease-in-out transform overflow-x-scroll w-full max-w-[550px] no-scrollbar"
            ref={oddsContainer}
          >
            {leagues.fixtures
              ?.slice(startIndex, startIndex + visibleCards)
              .map((card, index) => (
                <GameCard
                  key={index}
                  homeTeam={card.home}
                  awayTeam={card.away}
                  homeScore={card.homeScore}
                  awayScore={card.awayScore}
                  time={card.time}
                />
              ))}
          </div>

          {/* <div className="flex sm:hidden transition-transform duration-300 gap-5 ease-in-out transform">
            {leagues.fixtures
              ?.slice(startIndex, startIndex + 2)
              .map((card, index) => (
                <GameCard
                  key={index}
                  homeTeam={card.home}
                  awayTeam={card.away}
                  homeScore={card.homeScore}
                  awayScore={card.awayScore}
                  time={card.time}
                />
              ))}
          </div> */}

          <div className="rounded-xl flex gap-2 items-center mb-10 p-5">
            <button
              onClick={scrollContainerRightByWidth}
              className="p-3 rounded-lg relative bg-[#f1f0f0]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-[0.2rem] left-[40%]"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center mb-10 px-5">
          <div className="flex flex-col gap-3 p-5 justify-center items-center">
            <span className="text-[#808080] text-[0.7rem]">ENTRIES</span>{" "}
            <span className="font-semibold text-md">{`${cards?.current_entry}/${cards?.max_entry}`}</span>
          </div>
          <div className="flex flex-col gap-3 p-5 border-x-[#808080] border-x-[1px] justify-center items-center">
            <span className="text-[#808080] text-[0.7rem]">ENTRY FEE</span>{" "}
            <span className="font-semibold text-md">
              ${cards?.entry_amount}
            </span>
          </div>
          <div className="flex flex-col gap-3 p-5 justify-center items-center">
            <span className="text-[#808080] text-[0.7rem]">PRIZE POOL</span>{" "}
            <span className="font-semibold text-md">
              ${cards?.total_to_win}
            </span>
          </div>
        </div>
      </div>

      {cards && <ContestTables card={cards} leagueName={leagues.league_name} />}
    </div>
  );
};

export default Page;
