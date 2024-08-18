import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function hanldeClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", hanldeClick, listenCapturing);

      return () =>
        document.removeEventListener("click", hanldeClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
