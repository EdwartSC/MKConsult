import { useEffect } from "react";

export function useScrollToTop(trigger: unknown) {
  useEffect(() => {
    // scroll de la ventana
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // por si algún contenedor scrollea
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [trigger]);
}
