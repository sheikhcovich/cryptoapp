import { useEffect } from "react";

export const useScrollToTop = (simple) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (simple) return;
};
