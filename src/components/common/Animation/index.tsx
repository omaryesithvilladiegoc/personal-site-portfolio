import React, { useEffect, useRef } from "react";
import styles from "./styles/animation.module.css";

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = document.documentElement.scrollTop;
      if (videoRef.current) {
        videoRef.current.currentTime = position / 500;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={styles.myVideo}
      width={"100%"}
      src="/assets/856148-hd_1920_1080_25fps.mp4"
      height={"100%"}
      muted
    >
      Tu navegador no soporta la etiqueta de video.
    </video>
  );
};

export default VideoComponent;
