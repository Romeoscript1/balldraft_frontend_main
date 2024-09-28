export function getFormattedTime(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export function getFormattedDate(date, astime = true) {
  const now = new Date();
  const dayDiff = now.getDate() - date.getDate();

  if (dayDiff === 1) {
    return "Yesterday";
  } else if (dayDiff > 1) {
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    });
  } else {
    if (astime) return getFormattedTime(date);
    return "Today";
  }
}

export const formatunixTime = (unixTime, format = "time") => {
  //unix time is the number of seconds since the Unix epoch
  const date = new Date(unixTime * 1000); //multiplying seconds by 1000 to get milliseconds

  console.log("DATE", date, unixTime);

  if (format == "time") {
    return getFormattedTime(date);
  }

  if (format == "day") {
    return getFormattedDate(date, false);
  }
};

export const getAccessToken = () => {
  let accessToken = null;
  if (typeof window !== "undefined") {
    accessToken = sessionStorage.getItem("access_token");
  }
  return accessToken;
};

export const getRefreshToken = () => {
  let accessToken = null;
  if (typeof window !== "undefined") {
    accessToken = sessionStorage.getItem("refresh_token");
  }
  return accessToken;
};

export const setAccessToken = (accessToken) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("access_token", accessToken);
  }
};

export const setRefreshToken = (accessToken) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("refresh_token", accessToken);
  }
};

export const isAuthenticated = () => {
  if (getAccessToken()) return true;
  return false;
};

export const clearSessionStorage = () => {
  if (typeof window !== "undefined") {
    sessionStorage.clear();
  }
};

export function generateRandomOdds() {
  // Random over/under value between 40 and 60
  const overUnder = (Math.random() * (60 - 40) + 40).toFixed(1);

  // Random point spread between -10 and +10
  const pointSpread = (Math.random() * 20 - 10).toFixed(1);

  return { overUnder, pointSpread };
}


export function getUserImageOrdefault(image){
  return image ? image : "/images/default-user.png"
}