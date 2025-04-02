import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      let newMode;

      if (userPref) {
        newMode = userPref === "dark" ? "dark" : "light";
      } else {
        newMode = mediaQuery.matches ? "dark" : "light";
      }

      setMode(newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
    };

    // Gọi `handleChange` ngay lập tức để áp dụng theme đúng
    handleChange();

    // Sử dụng `addEventListener` thay vì `addListener`
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
