import { useState, useEffect } from "react";



export const cacheImages = async (srcArray: []) => {
    const [isLoading, setIsLoading] = useState(true);

    const promises = srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
  
    try {
      await Promise.all(promises);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading images:", error);
      setIsLoading(false); // Handle errors by setting loading to false
    }
  };
  