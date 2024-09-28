import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPackages = async (url) => {
  let accessToken = null;

  if (typeof window !== "undefined") {
    accessToken = sessionStorage.getItem("access_token");
  }

  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  try {
    const response = await axios.get(url, { headers });
    return response.data || [];

  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
};

export const useFetchDataPlans = (apiUrl) => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: () => fetchPackages(apiUrl),
    initialData: [],
  });
};
