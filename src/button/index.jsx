'use client'
import { motion } from 'framer-motion'

export function LightGradientButton({ children, className, ...props }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`relative rounded-[15px] overflow-hidden p-[1px] cursor-pointer ${className}`}
      {...props}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background:
            'conic-gradient(from 287deg at 45.6% 44.7%, rgba(0, 0, 0, 0.07) 144.141deg, rgb(203, 182, 250) 178.196deg, rgba(0, 0, 0, 0.36) 330.938deg)',
        }}
        className="inset-[-74px_-80px_-76px_-90px] overflow-visible absolute z-[2]"
      ></motion.div>
      <div className="items-center flex flex-row flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-min z-[3] bg-[#6242a5] px-6 py-3 rounded-[15px]">
        <div className="h-5 flex items-center justify-center gap-2.5 whitespace-nowrap">
          <p className="whitespace-pre tracking-tight leading-6 text-white font-medium">
            {children}
          </p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            variants={{
              initial: {
                rotate: 0,
              },
              hover: {
                rotate: 45,
              },
            }}
            className="w-4 h-4 select-none shrink-0 fill-white text-white inline-block"
          >
            <g color="rgb(255, 255, 255)" weight="bold">
              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
            </g>
          </motion.svg>
        </div>
      </div>
    </motion.div>
  )
}

export function DarkGradientButton({ children, className, ...props }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`relative rounded-[15px] overflow-hidden p-[1px] w-fit cursor-pointer ${className}`}
      {...props}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background:
            'conic-gradient(from 287deg at 45.6% 44.7%, rgba(0, 0, 0, 0.07) 144.141deg, rgb(203, 182, 250) 178.196deg, rgba(0, 0, 0, 0.36) 330.938deg)',
        }}
        className="inset-[-74px_-80px_-76px_-90px] overflow-visible absolute z-[2]"
      ></motion.div>
      <div className="items-center flex flex-row flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-min z-[3] bg-[#01040d] px-6 py-3 rounded-[15px]">
        <div className="h-5 flex items-center justify-center gap-2.5">
          <p className="whitespace-pre tracking-tight leading-6 text-white font-medium">
            {children}
          </p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            variants={{
              initial: {
                rotate: 0,
              },
              hover: {
                rotate: 45,
              },
            }}
            className="w-4 h-4 select-none shrink-0 fill-white text-white inline-block"
          >
            <g color="rgb(255, 255, 255)" weight="bold">
              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
            </g>
          </motion.svg>
        </div>
      </div>
    </motion.div>
  )
}

export default LightGradientButton
