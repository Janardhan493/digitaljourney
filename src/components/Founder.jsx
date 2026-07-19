import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 bg-gradient-to-b from-[#050816] to-[#091126]"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

          <img
            src="/Founder.png"
            alt="Mangali Janardhan"
            className="relative w-full max-w-md rounded-3xl border border-blue-500/20 shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            Meet the Founder
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Mangali Janardhan
          </h2>

          <p className="text-blue-400 text-xl mt-2">
            Founder & CEO
          </p>

          <p className="mt-8 text-gray-300 leading-8">
            Hi, I'm{" "}
            <span className="text-white font-semibold">
              Mangali Janardhan
            </span>
            , Founder & CEO of DigitalJourney. I started this agency with a
            vision to help businesses build a stronger digital presence through
            modern websites, creative branding, photography, and digital
            marketing. My goal is to deliver practical digital solutions that
            help businesses grow from local recognition to a wider audience.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              "Website Development",
              "Digital Marketing",
              "Brand Identity",
              "Photography & Video",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-blue-500 transition-all duration-300"
              >
                ✔ {skill}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">50+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">20+</h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">100%</h3>
              <p className="text-gray-400 text-sm">Commitment</p>
            </div>
          </div>

          {/* Button + Social Icons */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Let's Connect
              <ArrowRight size={18} />
            </a>

     <div className="flex gap-5 text-xl">
  <a
    href="https://www.linkedin.com/in/mangali-janardhan?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/Janardhan493"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.instagram.com/digital_4u59?igsh=MXh6aWRmbWRwZ2Eyag=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}