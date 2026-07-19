import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999*",
    subtitle: "Perfect for Small Businesses",
    popular: false,
    features: [
      "1 Landing Page Website",
      "Mobile Responsive Design",
      "Modern UI/UX",
      "WhatsApp Integration",
      "Contact Form",
      "Basic SEO Setup",
      "Google Maps Integration",
      "1 Promotional Reel (30–45 sec)",
      "3–5 Days Delivery",
    ],
  },
  {
    name: "Business",
    price: "₹9,999*",
    subtitle: "Most Popular",
    popular: true,
    features: [
      "Up to 5 Pages Website",
      "Premium UI/UX Design",
      "Google Business Profile Setup",
      "Advanced SEO",
      "Performance & Speed Optimization",
      "Social Media Integration",
      "2 Promotional Reels",
      "1 Professional Photo Shoot (Up to 20 Photos)",
      "7 Days Free Support",
      "5–7 Days Delivery",
    ],
  },
  {
    name: "Premium",
    price: "Custom Quote",
    subtitle: "Complete Digital Growth",
    popular: false,
    features: [
      "Custom Website Development",
      "Unlimited Pages",
      "Brand Identity & Logo Design",
      "Professional Photography",
      "3–5 Cinematic Promotional Videos",
      "Social Media Management",
      "AI Features (Optional)",
      "Priority Support",
      "Monthly Website Maintenance",
      "Dedicated Consultation",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">Pricing</p>
          <h2 className="text-5xl font-bold mt-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-gray-400 mt-4">
            Affordable solutions for every business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl ${
                plan.popular
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                  <Star size={16} fill="white" />
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <p className="text-gray-400 mt-2">{plan.subtitle}</p>

              <h2 className="text-5xl font-bold mt-8">{plan.price}</h2>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <Check size={18} className="text-blue-400 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 w-full py-4 rounded-xl font-semibold flex justify-center transition ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "border border-white/20 hover:bg-white/10"
                }`}
              >
                Book Free Consultation
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            *Prices shown are starting prices. Final cost depends on project
            scope, features, and requirements.
          </p>

          <p className="text-blue-400 mt-3 font-medium">
            🎉 Free consultation before every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;