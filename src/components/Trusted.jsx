import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const clients = [
  "Select Men Salon",
  "Local Businesses",
  "Startups",
  "Growing Brands",
];

const highlights = [
  "Professional Website Design",
  "Promotional Video Creation",
  "SEO Optimized Development",
  "Fast Delivery & Support",
];

export default function Trusted() {
  return (
    <section className="py-24 bg-[#070B1A]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            Trusted By
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Helping Businesses Grow Online
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We create websites, branding, photography, promotional videos,
            and digital experiences that help businesses attract more customers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Clients
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/5 border border-white/10 p-5 text-center text-white"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Businesses Choose Us
            </h3>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-blue-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}