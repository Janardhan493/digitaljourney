import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 p-12 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Grow Your Business?
            </h2>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-8">
              Whether you need a website, branding, social media marketing,
              photography, or promotional videos, DigitalJourney is here to
              help you grow from local to global.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a
                href="#contact"
                className="bg-white text-blue-700 hover:bg-gray-100 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>

              <a
                href="#portfolio"
                className="border border-white text-white hover:bg-white/10 transition px-8 py-4 rounded-xl"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}