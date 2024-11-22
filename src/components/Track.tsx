"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Track = () => {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisit = async (url: string | null) => {
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
      trackVisit(pathname && pathname);
    };

    trackVisit(pathname && pathname);

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname]);

  return null;
};
