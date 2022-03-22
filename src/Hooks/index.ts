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
