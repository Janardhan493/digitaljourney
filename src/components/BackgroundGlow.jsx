import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/15 blur-[150px]"
      />

    </div>
  );
}