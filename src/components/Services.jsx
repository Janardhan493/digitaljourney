import {
  Globe,
  Palette,
  Camera,
  Video,
  Search,
  Bot,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Globe size={40} />,
    title: "Website Development",
    desc: "Modern, fast, responsive websites built with the latest technologies.",
  },
  {
    icon: <Palette size={40} />,
    title: "Brand Identity",
    desc: "Logo design, posters, brochures and complete business branding.",
  },
  {
    icon: <Camera size={40} />,
    title: "Photography",
    desc: "Professional business, product and commercial photography.",
  },
  {
    icon: <Video size={40} />,
    title: "Brand Films",
    desc: "Cinematic promotional videos and social media reels.",
  },
  {
    icon: <Search size={40} />,
    title: "SEO & Marketing",
    desc: "Grow your business through Google and digital marketing.",
  },
  {
    icon: <Bot size={40} />,
    title: "AI Solutions",
    desc: "Automation and AI tools to improve your business productivity.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-[#050816] to-[#091126]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="text-blue-400 uppercase tracking-[4px]">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Everything Your Business
            <span className="text-blue-500"> Needs</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We provide complete digital solutions to help businesses build
            their online presence and attract more customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}