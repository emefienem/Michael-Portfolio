"use client";

import { useEffect } from "react";

export const Track = () => {
  useEffect(() => {
    const trackVisit = async (url: string) => {
      const response = await fetch("/api/track-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Log success to the console
        console.log("Notification sent successfully!");
      } else {
        // Log failure to the console
        const errorData = await response.json();
        console.error("Failed to send notification:", errorData.message);
      }
    };

    const handleRouteChange = () => {
      trackVisit(window.location.href);
    };

    trackVisit(window.location.href);

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
};
