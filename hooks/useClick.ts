import { useCallback, useEffect, useRef } from "react";

const useClick = (onClose: () => void) => {
  const clickRef = useRef(null);
  const ESCKey = useCallback((e: KeyboardEvent) => {
    e.key === "Escape" && onClose();
  }, []);

  const MouseKey = useCallback(
    (evt: MouseEvent | TouchEvent) => {
      const current = clickRef.current as any;
      if (!current || current.contains(evt.target)) {
      } else {
        onClose?.();
      }
    },
    [clickRef.current]
  );

  useEffect(() => {
    window.addEventListener("keyup", ESCKey);
    window.addEventListener("mouseup", MouseKey);
    window.addEventListener("touchstart", MouseKey);
    return () => {
      window.removeEventListener("keyup", ESCKey);
      window.removeEventListener("mouseup", MouseKey);
      window.removeEventListener("touchstart", MouseKey);
    };
  }, []);

  return clickRef;
};
export default useClick;
