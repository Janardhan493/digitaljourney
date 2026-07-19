import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "01. Discover",
    description:
      "We understand your business goals, audience, and requirements to create the perfect digital strategy.",
  },
  {
    icon: PenTool,
    title: "02. Design",
    description:
      "Our team designs modern, user-friendly, and visually stunning experiences tailored to your brand.",
  },
  {
    icon: Code2,
    title: "03. Develop",
    description:
      "We build fast, responsive, and SEO-friendly websites using the latest technologies.",
  },
  {
    icon: Rocket,
    title: "04. Launch & Grow",
    description:
      "After launch, we provide ongoing support, optimization, and digital marketing to help your business grow.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Our Process
          </p>

          <h2 className="text-5xl font-bold mt-4">
            How We Bring Your Ideas to Life
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            From understanding your business to launching your digital presence,
            we follow a proven process that delivers beautiful designs,
            high-performance websites, and measurable business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}