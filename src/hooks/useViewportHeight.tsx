import { useEffect, useState } from "react";

export function useViewportHeight() {
  const [vh, setVh] = useState(1000);

  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return vh;
}
