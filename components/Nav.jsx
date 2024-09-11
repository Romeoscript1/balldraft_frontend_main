"use client";
import React from "react";
import { useFetchDataPlans } from "@/Hooks/useFetch";
import Image from "next/image";
import useAuthentication from "@/Hooks/useAuthentication";
import { IoPower } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/profile`;
  const { data, isLoading, error } = useFetchDataPlans(apiUrl);
  console.log(data, isLoading, "fuck");
  const firstname = data?.full_name?.split(" ")[0];
  const { isAuthenticated } = useAuthentication();

  return (
    <section>
      <div className="flex items-center justify-around text-white nav-bg">
        <aside className="text-xs lg:text-lg">
          Welcome back, {firstname} 🦆
        </aside>

        <aside className="flex items-center gap-8">
          <p className="lg:flex items-center gap-3 hidden">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_153_13802)">
                <path
                  d="M3 9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H4C3.73478 12 3.48043 11.8946 3.29289 11.7071C3.10536 11.5196 3 11.2652 3 11V9Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8V21"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 12V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12"
                  fill="white"
                />
                <path
                  d="M19 12V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 8.00044C6.83696 8.00044 6.20107 7.73705 5.73223 7.2682C5.26339 6.79936 5 6.16348 5 5.50044C5 4.8374 5.26339 4.20151 5.73223 3.73267C6.20107 3.26383 6.83696 3.00044 7.5 3.00044C8.46469 2.98363 9.41003 3.4517 10.2127 4.3436C11.0154 5.2355 11.6383 6.50984 12 8.00044C12.3617 6.50984 12.9846 5.2355 13.7873 4.3436C14.59 3.4517 15.5353 2.98363 16.5 3.00044C17.163 3.00044 17.7989 3.26383 18.2678 3.73267C18.7366 4.20151 19 4.8374 19 5.50044C19 6.16348 18.7366 6.79936 18.2678 7.2682C17.7989 7.73705 17.163 8.00044 16.5 8.00044"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_153_13802">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Rewards
          </p>
          <p className="lg:flex items-center gap-3 hidden">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9714 6.58545C17.5018 6.58553 18.0103 6.79624 18.3853 7.17124C18.7603 7.54624 18.9711 8.05482 18.9711 8.58515C20.1198 9.12811 21.099 9.97344 21.8038 11.0305C22.5086 12.0876 22.9124 13.3166 22.9719 14.5857L22.9705 17.5852C23.0458 18.207 23.266 18.8024 23.6135 19.3235C23.9609 19.8447 24.4259 20.2769 24.9709 20.5855L8.97264 20.5862C9.51747 20.2776 9.98224 19.8454 10.3296 19.3244C10.6769 18.8035 10.897 18.2082 10.9723 17.5866L10.9709 14.5857C11.0305 13.3166 11.4343 12.0876 12.1391 11.0305C12.8439 9.97343 13.8231 9.12811 14.9717 8.58515C14.9718 8.05482 15.1825 7.54624 15.5575 7.17124C15.9325 6.79624 16.4411 6.58553 16.9714 6.58545Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9709 20.5855L13.9709 21.5853C13.9709 22.3811 14.287 23.1442 14.8497 23.7068C15.4123 24.2695 16.1754 24.5856 16.9712 24.5856C17.7669 24.5856 18.53 24.2695 19.0927 23.7068C19.6553 23.1442 19.9714 22.3811 19.9714 21.5853V20.5855"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="24.8093"
                cy="5.03979"
                r="5"
                transform="rotate(-45 24.8093 5.03979)"
                fill="#FF0000"
              />
            </svg>
            Notifications
          </p>
          <p className="lg:flex items-center gap-3 hidden">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_153_13812)">
                <path
                  d="M12.9414 2C18.4644 2 22.9414 6.477 22.9414 12C22.9435 14.6255 21.913 17.1464 20.0723 19.0186C18.2317 20.8908 15.7286 21.9641 13.1034 22.0066C10.4783 22.0491 7.94174 21.0576 6.0414 19.246C4.14106 17.4344 3.02939 14.9482 2.94641 12.324L2.94141 12L2.94541 11.72C3.09341 6.327 7.51141 2 12.9414 2ZM12.9414 15C12.6965 15 12.4601 15.09 12.277 15.2527C12.094 15.4155 11.9771 15.6397 11.9484 15.883L11.9414 16L11.9484 16.127C11.9773 16.3701 12.0944 16.5941 12.2774 16.7566C12.4604 16.9191 12.6966 17.0089 12.9414 17.0089C13.1862 17.0089 13.4224 16.9191 13.6054 16.7566C13.7885 16.5941 13.9055 16.3701 13.9344 16.127L13.9414 16.01L13.9344 15.883C13.9057 15.6397 13.7888 15.4155 13.6058 15.2527C13.4227 15.09 13.1863 15 12.9414 15ZM14.3094 8.327C13.7108 8.02097 13.0263 7.92635 12.3671 8.05851C11.7079 8.19067 11.1128 8.54186 10.6784 9.055C10.5128 9.249 10.4276 9.49896 10.4402 9.75373C10.4528 10.0085 10.5623 10.2488 10.7463 10.4255C10.9302 10.6022 11.1748 10.7019 11.4299 10.7042C11.6849 10.7066 11.9312 10.6113 12.1184 10.438L12.2894 10.258C12.4369 10.1226 12.6224 10.0356 12.8209 10.0088C13.0193 9.98197 13.2212 10.0166 13.3994 10.108C13.5915 10.2052 13.7471 10.3618 13.843 10.5545C13.939 10.7473 13.9702 10.9658 13.932 11.1777C13.8938 11.3895 13.7882 11.5834 13.631 11.7305C13.4738 11.8776 13.2733 11.97 13.0594 11.994L12.8274 12.006C12.5731 12.034 12.3391 12.1584 12.1737 12.3536C12.0084 12.5489 11.9241 12.8001 11.9383 13.0556C11.9525 13.3111 12.0642 13.5514 12.2502 13.7271C12.4362 13.9027 12.6825 14.0004 12.9384 14C13.613 14.002 14.2686 13.7766 14.7994 13.3601C15.3301 12.9437 15.705 12.3605 15.8635 11.7047C16.022 11.049 15.9548 10.359 15.6728 9.74609C15.3908 9.13322 14.9105 8.63328 14.3094 8.327Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_153_13812">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.941406)"
                  />
                </clipPath>
              </defs>
            </svg>
            Help
          </p>

          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                {isAuthenticated && (
                  <details>
                    <summary className="flex">
                      <div className="w-10 rounded-full">
                        <Image
                          alt="Navbar component"
                          className="rounded-full bg-slate-500 object-cover object-center"
                          src="https://via.placeholder.com/30"
                          width={34}
                          height={34}
                        />
                      </div>
                      <div>
                        <span className="font-bold text-sm">
                          {data?.full_name}
                        </span>
                        <br />
                        <span className="font-bold text-xs">{data?.email}</span>
                      </div>
                      {/* johndoe@gmaul.com */}
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                      <li>
                        <a href="/Dashboard/account">
                          <FaRegUser className="fill-white" />
                          Profile
                        </a>
                      </li>
                      <li>
                        <a>
                          <IoPower className="fill-red-600" />
                          Logout
                        </a>
                      </li>
                    </ul>
                  </details>
                )}

                {!isAuthenticated && (
                  <a
                    href="/Auth/login"
                    className="border border-slate-300 rounded-full my-2"
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Nav;
