import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
emailjs.sendForm(
  "service_ikneap8",
  "template_9btgfqm",
  form.current,
  "OfeOwy-staPYzUpMg"
)
      .then((result) => {
        console.log(result);

        alert("✅ Message sent successfully!");

        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        alert(
          `Status: ${error.status}\n${error.text || error.message}`
        );

        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-28 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Let's Build Your
            <span className="text-blue-500"> Next Project</span>
          </h2>

          <p className="text-gray-400 mt-6">
            Tell us about your business and we'll help you grow digitally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-5">
              <Phone className="text-blue-500" />

              <div>
                <h3 className="font-bold text-xl text-white">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 93907 20106
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-blue-500" />

              <div>
                <h3 className="font-bold text-xl text-white">
                  Email
                </h3>

                <p className="text-gray-400">
                  digitaljourney59@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="text-blue-500" />

              <div>
                <h3 className="font-bold text-xl text-white">
                  Location
                </h3>

                <p className="text-gray-400">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder-gray-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder-gray-400"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder-gray-400"
            />

            <input
              type="text"
              name="service"
              placeholder="Business Name / Service Required"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder-gray-400"
            />

            <textarea
              rows="6"
              name="message"
              required
              placeholder="Tell us about your project..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder-gray-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}

              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
