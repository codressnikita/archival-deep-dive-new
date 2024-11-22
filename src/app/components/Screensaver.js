"use client";

import { useEffect, useState } from "react";
import { useScreensaverContext } from "../ScreensaverContext";

const Screensaver = ({ idleTimeout = 1000 }) => {
  const { screensaverDisabled } = useScreensaverContext();
  const [isIdle, setIsIdle] = useState(false);

  // Idle detection logic
  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), idleTimeout);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      clearTimeout(timeoutId);
    };
  }, [idleTimeout]);

  if (screensaverDisabled) return null;

  return (
    <>
      {isIdle && (
        <div className="fixed inset-0 z-50">
          {/* Video background with opacity */}
          <video
            className="w-full h-full object-cover opacity-100"
            src="./screensaver.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlay */}
          {/* Logo */}
          {/* <img
              src="./logo.png"
              alt="Logo"
              className="w-[50%] max-w-[500px] mb-12"
            /> */}
          {/* Main Title */}
          <h1 className="text-5xl font-bold text-white">Archival Deep Dive</h1>
        </div>
      )}
    </>
  );
};

export default Screensaver;
