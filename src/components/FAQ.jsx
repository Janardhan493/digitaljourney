import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 3–7 business days depending on the project size and requirements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer website maintenance, updates, security improvements, and technical support after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can redesign your current website with a modern UI, improved performance, and better user experience.",
  },
  {
    question: "Do you create promotional videos?",
    answer:
      "Yes. We create high-quality promotional reels, business videos, product showcases, and social media content.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. Every website includes basic SEO, and we also offer advanced SEO packages to improve your online visibility.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply book a free consultation through our contact form or WhatsApp. We'll discuss your goals and recommend the best solution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 bg-[#050816]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            FAQ
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5">
            Everything you need to know before starting your project with us.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}