'use client'

export default function LightingEffect() {
  return (
    <div className="absolute left-0 top-0 flex justify-center items-center pointer-events-none z-0">
      <video autoPlay loop muted playsInline height={1000} className=" w-full object-fit  ">
        <source src="/LightRaysVideo.mp4" type="video/mp4" autoPlay />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
