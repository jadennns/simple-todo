import { useEffect, useState } from "react";

export default function useDevice() {
  const [width, setWidth] = useState(1);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return isMobile;
}
