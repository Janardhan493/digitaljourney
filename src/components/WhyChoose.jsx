import { motion } from "framer-motion";
import {
  Laptop,
  Palette,
  Camera,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Laptop size={36} />,
    title: "Modern Websites",
    desc: "Fast, responsive websites built with the latest technologies.",
  },
  {
    icon: <Palette size={36} />,
    title: "Creative Branding",
    desc: "Professional logos, posters and complete brand identity.",
  },
  {
    icon: <Camera size={36} />,
    title: "Premium Content",
    desc: "Photography, reels and promotional videos for your business.",
  },
  {
    icon: <TrendingUp size={36} />,
    title: "Business Growth",
    desc: "Digital marketing strategies that help you reach more customers.",
  },
  {
    icon: <Clock size={36} />,
    title: "On-Time Delivery",
    desc: "Projects delivered quickly without compromising quality.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Long-Term Support",
    desc: "We're your digital partner even after your website goes live.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-blue-400">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Businesses Choose
            <span className="text-blue-500"> DigitalJourney</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We don't just build websites. We create digital experiences that
            help businesses grow, build trust and attract more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-500 mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}