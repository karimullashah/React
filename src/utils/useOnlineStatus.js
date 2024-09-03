import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // try to check in user is online

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("you are online");
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      console.log("you are offline");
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
