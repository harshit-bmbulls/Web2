'use client'

export default function LightingEffectCenter() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex justify-between items-center -mt-36 opacity-45 w-full">
      {/* 🔁 Left Flipped Video */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fit scale-x-[-1]" // flip horizontally
        >
          <source src="/LightRaysVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* 🎯 Center Video */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fit"
        >
          <source src="/LightRaysVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)]" />
      </div>
    </div>
  )
}