import { getAccessToken } from "@/constants/constants";
import { useState } from "react";

const usePostData = () => {
  const [loading, setLoading] = useState(false);

  const postData = async (apiUrl, payload, onSuccess=()=>{}, onError=()=>{}, method="POST") => {
    setLoading(true);
    const accessToken = getAccessToken()
    const headers = {
        "Content-Type": "application/json",
      };
    
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }

    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(
          errData.message || JSON.stringify(errData)
        );
      }

      const data = await response.json();
      onSuccess(data);
    } catch (error) {
      console.log(error)
      onError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};


export default usePostData