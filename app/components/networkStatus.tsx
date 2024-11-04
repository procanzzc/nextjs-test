"use client";
import { useEffect, useState } from 'react';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {

    setIsOnline(navigator.onLine);


    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);


    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);


    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="fixed top-0 left-0 bg-amber-100 w-full" onClick={()=>{window.location.reload()}}>
        No Network
      </div>
    );
  }

  return null;
};



export default NetworkStatus;
