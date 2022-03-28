import { useEffect, useState } from "react";

export const useFullScreen = () => {
  const [fullscreen, setFullscreen] = useState(false);

  function changeFullScreenEnabled() {
    if (document.fullscreenElement?.tagName === "HTML") {
      setFullscreen(true);
    } else {
      setFullscreen(false);
    }
  }

  const onOpenFullScreen = () => {
    document.documentElement.requestFullscreen();
  };

  const onCloseFullScreen = () => {
    document.exitFullscreen();
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", changeFullScreenEnabled);

    return () => {
      document.removeEventListener("fullscreenchange", changeFullScreenEnabled);
    };
  }, []);

  return { fullscreen, onOpenFullScreen, onCloseFullScreen };
};

export function useOutside(
  ref: React.RefObject<HTMLDivElement>,
  onClickOutside: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
