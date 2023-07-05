import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border-2 border-[#6dff9e]/40 drop-shadow-[0_0_10px_rgba(110,231,183,0.8)] rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
    
      <div className="absolute w-[650px] h-[650px] mt-52 items-center justify-center overflow-hidden rounded-full opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="30 -30 311.6 382.6" className='drop-shadow-[0_0_10px_rgba(110,231,183,0.8)]'>
          <path
            d="M12.5 145H1V224H12.5V238H24.5V250.5H50.5V263H62.5V294H68.5V311H93.5V299H81V280.5H93.5V267.5H106V255.5H119V243H131.5V274H137.5V311H167.5V299H149.5V243H163V230.5H175V217.5H186.5V207H199.5V150.5H218V163.5H231V139H199.5V99.5H255V94.5H212V74.5H286.5V14H267V1H138.5V14H125V139H113.5V150.5H93.5V163.5H76V174.5H62.5V187.5H37.5V174.5H24.5V163.5H12.5V145Z"
            fill="none"
            stroke="#6dff9e"
            strokeWidth={1}
            strokeMiterlimit={10}
            className='animate-draw'
            style={{ strokeDasharray: 500, strokeDashoffset: 3860, strokeLinecap: "round", strokeLinejoin: "round" }}
          />
          <path
            d="M12.5 145H1V224H12.5V238H24.5V250.5H50.5V263H62.5V294H68.5V311H93.5V299H81V280.5H93.5V267.5H106V255.5H119V243H131.5V274H137.5V311H167.5V299H149.5V243H163V230.5H175V217.5H186.5V207H199.5V150.5H218V163.5H231V139H199.5V99.5H255V94.5H212V74.5H286.5V14H267V1H138.5V14H125V139H113.5V150.5H93.5V163.5H76V174.5H62.5V187.5H37.5V174.5H24.5V163.5H12.5V145Z"
            fill="none"
            stroke="#6dff9e"
            strokeWidth={1}
            strokeMiterlimit={10}
            className='animate-fade delay-1000 opacity-20 blur-[1px]'
            style={{ strokeDasharray: 500, strokeDashoffset: 3860, strokeLinecap: "round", strokeLinejoin: "round" }}
          />
        </svg>
      </div>
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  )
}