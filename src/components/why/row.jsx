"use client";

import { Pause } from "lucide-react";
import { memo, useRef } from "react";

const Rows = () => {
  const videoRef = useRef(null);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative w-full md:max-w-xl overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/written.mp4" type="video/mp4" />
      </video>

      {/* Play/Pause Toggle Button */}
      <button
        onClick={handleToggle}
        className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-2 rounded-full"
      >
        <Pause size={24} />
      </button>
    </div>
  );
};

export default memo(Rows);
