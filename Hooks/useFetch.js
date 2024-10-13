import { getAccessToken } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { deleteAccessToken } from "@/constants/constants";
import { useRouter } from "next/navigation";

const fetchPackages = async (url) => {
  let accessToken = null;
  // const router= useRouter()

  if (typeof window !== "undefined") {
    accessToken = getAccessToken()
  }

  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  try {
    const response = await axios.get(url, { headers });
    return response.data || [];

  } catch (error) {
    if (error?.response && error?.response?.status == 401){
      deleteAccessToken()
      // router.push('/Auth/login')
    }
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
