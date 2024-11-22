"use client";

import { useEffect } from "react";

export const Track = () => {
  useEffect(() => {
    const trackVisit = async (url: string) => {
      await fetch("/api/track-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          timestamp: new Date().toISOString(),
        }),
      });
    };

    const handleRouteChange = () => {
      trackVisit(window.location.href);
    };

    // Track initial page load
    trackVisit(window.location.href);

    // Track subsequent navigations
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
};
