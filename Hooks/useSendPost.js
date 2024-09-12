import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAccessToken } from "@/constants/constants";

const useSendPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = getAccessToken();

  const sendPost = (apiUrl, payload, onError=()=>{}, onSuccess=()=>{})=>{
    setIsLoading(true)

    const headers = {
      "Content-Type": "application/json",
    };
  
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    
    fetch(apiUrl, {
      method: 'POST', 
      'headers': headers,
      body: JSON.stringify(payload)
    }).then(response => {
      
      
      return response.json()

    })
    .then(data=>{
        onSuccess(data)
    })
    .catch(error=>{
      onError(error)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }

  return { isLoading, sendPost };
};

export default useSendPost;
