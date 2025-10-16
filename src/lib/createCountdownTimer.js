export function createCountdownTimer(key, durationInMinutes) {
  // Check if endTime already exists in localStorage
  let endTime = localStorage.getItem(key);

  if (!endTime) {
    endTime = Date.now() + durationInMinutes * 60 * 1000;
    localStorage.setItem(key, endTime);
  } else {
    endTime = Number(endTime);
  }

  // Helper to calculate time left
  function getTimeLeft() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      localStorage.removeItem(key);
      return { hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { hours, minutes, seconds, expired: false };
  }

  // Return interface
  return {
    getTimeLeft,
    reset: () => {
      const newEndTime = Date.now() + durationInMinutes * 60 * 1000;
      localStorage.setItem(key, newEndTime);
    },
    clear: () => localStorage.removeItem(key),
  };
}

import { useEffect, useState } from "react";

export function useCountdownTimer(key, durationInMinutes) {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(getOrCreateEndTime(key, durationInMinutes))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const endTime = Number(localStorage.getItem(key));
      const left = getTimeLeft(endTime);
      setTimeLeft(left);

      if (left.expired) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [key, durationInMinutes]);

  const reset = () => {
    const newEnd = Date.now() + durationInMinutes * 60 * 1000;
    localStorage.setItem(key, newEnd.toString());
    setTimeLeft(getTimeLeft(newEnd));
  };

  return { ...timeLeft, reset };
}

// ---- Helper functions ----
function getOrCreateEndTime(key, durationInMinutes) {
  let end = localStorage.getItem(key);
  if (!end) {
    const newEnd = Date.now() + durationInMinutes * 60 * 1000;
    localStorage.setItem(key, newEnd.toString());
    return newEnd;
  }
  return Number(end);
}

function getTimeLeft(endTime) {
  const diff = endTime - Date.now();

  if (diff <= 0) {
    localStorage.removeItem(endTime.toString());
    return { hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, expired: false };
}

