import { motion } from 'framer-motion'
export default function Chip({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="">
      <div className="items-center flex flex-row flex-nowrap gap-[5px] h-min justify-center overflow-hidden relative w-min px-6 py-2.5 backdrop-blur-[10px] rounded-[20px]">
        <div className="chip-text"></div>

        <h6 className="text-sm text-transparent font-semibold tracking-tight leading-4 inline-block whitespace-nowrap bg-clip-text bg-[linear-gradient(91deg,rgb(200,186,232)_0%,rgb(177,149,240)_98.2475%)]">
          {children}
        </h6>
      </div>
    </motion.div>
  )
}

Chip.WithBackground = function WithBackground({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        type: 'spring',
        bounce: 0.4,
        stiffness: 60,
        damping: 10,
        ease: 'easeInOut',
      }}
      viewport={{ once: true }}
    >
      <div className="items-center flex flex-row flex-nowrap gap-[5px] h-min justify-center overflow-hidden relative w-min px-6 py-2.5 bg-[#191624] rounded-[20px]">
        <div className="chip-text"></div>

        <h6 className="text-[15px] text-transparent font-semibold leading-5 inline-block whitespace-nowrap bg-clip-text bg-[linear-gradient(90deg,#a35ca2_0%,#f2f9fe_125%)]">
          {children}
        </h6>
      </div>
    </motion.div>
  )
}
