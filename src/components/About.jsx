import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Modern & Responsive Websites",
  "Creative Branding & UI/UX",
  "Professional Photography & Reels",
  "SEO & Digital Marketing",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            About DigitalJourney
          </p>

          <h2 className="text-5xl font-bold mt-5 leading-tight">
            We Build Digital
            <span className="text-blue-500"> Brands</span>
            <br />
            That People Remember.
          </h2>

          <p className="mt-8 text-gray-400 leading-8">
            DigitalJourney helps local businesses transform into trusted digital
            brands. We combine technology, creativity and marketing to help
            businesses attract more customers and grow online.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="text-blue-500" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl flex items-center gap-2">
            Learn More
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-center">
                <h3 className="text-5xl font-bold">50+</h3>
                <p className="mt-2">Projects</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-8 text-center border border-white/10">
                <h3 className="text-5xl font-bold text-blue-500">20+</h3>
                <p className="mt-2 text-gray-400">Happy Clients</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-8 text-center border border-white/10">
                <h3 className="text-5xl font-bold text-blue-500">98%</h3>
                <p className="mt-2 text-gray-400">Client Satisfaction</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-center">
                <h3 className="text-5xl font-bold">24/7</h3>
                <p className="mt-2">Support</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}