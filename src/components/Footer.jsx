import { ArrowUp } from "lucide-react";
import {
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#040612] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">Digital</span>Journey
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              From Local to Digital Success.
              <br />
              We help businesses grow with modern websites, branding,
              photography and digital marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Website Development</li>
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Photography</li>
              <li>Brand Films</li>
              <li>SEO & Marketing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <p className="text-gray-400">
              Bengaluru, Karnataka
            </p>

            <p className="text-gray-400 mt-2">
              digitaljourney@gmail.com
            </p>

            <p className="text-gray-400 mt-2">
              +91 93907 20106
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-600 transition flex items-center justify-center"
              >
               <FaGlobe size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-pink-600 transition flex items-center justify-center"
              >
   <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-blue-500 transition flex items-center justify-center"
              >
               <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-red-600 transition flex items-center justify-center"
              >
    <FaYoutube size={18} />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} DigitalJourney. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}