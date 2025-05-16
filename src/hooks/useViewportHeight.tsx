import { useEffect, useState } from "react";

export function useViewportHeight() {
  const [vh, setVh] = useState(1000);

  useEffect(() => {
    // Calculate once on mount
    const handleResize = () => {
      setVh(window.innerHeight);
    };

    handleResize(); // Initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return vh;
}
