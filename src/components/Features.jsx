import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Camera,
  Megaphone,
  Palette,
  Headphones,
} from "lucide-react";

const features = [
  {
    Icon: Globe,
    title: "Website Development",
    description: "Fast, modern and SEO-friendly websites that convert visitors into customers.",
  },
  {
    Icon: Smartphone,
    title: "Social Media Marketing",
    description: "Instagram, Facebook and Google campaigns to grow your business online.",
  },
  {
    Icon: Camera,
    title: "Photography & Reels",
    description: "Professional photos and cinematic reels that make your brand stand out.",
  },
  {
    Icon: Palette,
    title: "Brand Identity",
    description: "Logos, menu cards, posters and complete branding solutions.",
  },
  {
    Icon: Megaphone,
    title: "Digital Promotions",
    description: "Promotional campaigns designed to reach more customers.",
  },
  {
    Icon: Headphones,
    title: "Support",
    description: "We continue supporting your business even after delivery.",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Everything Your Business
            <span className="text-blue-500"> Needs</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            From websites to branding and digital marketing, we help businesses
            build a strong online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition">
                <Icon size={32} />
              </div>

              <h3 className="text-2xl font-semibold">{title}</h3>

              <p className="text-gray-400 mt-4 leading-7">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}