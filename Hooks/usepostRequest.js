/* eslint-disable react-hooks/rules-of-hooks */

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getAccessToken } from "@/constants/constants";

const usePostRequest = () => {
  return (url, onSuccess, onError) => {
    const mutation = useMutation({
      mutationFn: async (data, authorize=true) => {
        const accessToken = getAccessToken();

        const headers = {
          "Content-Type": "application/json",
        };
        
        if (accessToken && authorize) {
          headers.Authorization = `Bearer ${accessToken}`;
        }
    
        return await axios.post(url, data, { headers });
      },
      onSuccess,
      onError,
    });

    const { mutate, isPending, isSuccess, isError } = mutation;

    return {
      mutate,
      isPending,
      isSuccess,
      isError,
    };
  };
};

export default usePostRequest;
