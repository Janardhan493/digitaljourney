import Founder from "../components/Founder";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full animate-pulse" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-8">
            🚀 Trusted Digital Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            From{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Local
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Global
            </span>
            <br />
            with DigitalJourney
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-8">
            We build high-converting websites, create stunning branding,
            cinematic promotional videos, and result-driven digital marketing
            strategies to help your business grow online.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-2 font-semibold shadow-lg shadow-blue-600/30"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="border border-white/20 hover:border-blue-500 hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-2"
            >
              <PlayCircle size={18} />
              View Portfolio
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-8 text-gray-300 text-sm">
            <span>🚀 Modern Websites</span>
            <span>📱 Digital Marketing</span>
            <span>🎥 Professional Reels</span>
            <span>💬 Free Consultation</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-14">
            <div>
              <h2 className="text-4xl font-bold text-blue-400">50+</h2>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">20+</h2>
              <p className="text-gray-400 mt-2">Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">5★</h2>
              <p className="text-gray-400 mt-2">Customer Rating</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-[120px] opacity-40 rounded-full" />

            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-5">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
                alt="DigitalJourney"
                className="rounded-2xl w-full max-w-[520px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}