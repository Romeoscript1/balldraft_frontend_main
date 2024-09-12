import { getAccessToken } from "@/constants/constants";
import { useState } from "react";

const usePostData = () => {
  const [loading, setLoading] = useState(false);

  const postData = async (apiUrl, payload, onSuccess=()=>{}, onError=()=>{}) => {
    setLoading(true);
    console.log('is loading is now true')
    const accessToken = getAccessToken()
    const headers = {
        "Content-Type": "application/json",
      };
    
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(
          `An error occured. ${errData.message || JSON.stringify(errData)}`
        );
      }

      const data = await response.json();
      onSuccess(data);
    } catch (error) {
      onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};


export default usePostData