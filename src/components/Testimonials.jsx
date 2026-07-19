import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Select Men 9+ Beauty Salon",
    role: "Business Owner",
    review:
      "DigitalJourney transformed our salon's online presence with a premium website, menu card, and branding. The results exceeded our expectations.",
  },
  {
    name: "Future Client",
    role: "Your Business",
    review:
      "Your success story could be featured here after working with DigitalJourney.",
  },
  {
    name: "Future Client",
    role: "Your Business",
    review:
      "Professional websites, branding, photography, and marketing solutions all in one place.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-[#050816] to-[#091126]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our
            <span className="text-blue-500"> Clients Say</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We build long-term relationships by delivering quality digital
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition"
            >

              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-blue-400">{item.role}</p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}