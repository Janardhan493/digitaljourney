import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Select Men 9+ Beauty Salon",
    category: "Website • Branding • Photography",
    description:
      "Complete digital branding solution including website development, menu card design, promotional videos, photography and Google Business Profile setup.",

    image: "/selectmencover.png",
    website: "/selectmen-website.png",
    menu: "/selectmen-menu.png",

    tags: [
      "Website",
      "Brand Film",
      "Photography",
      "Menu Design",
      "Google Business",
    ],

    featured: true,
  },

  {
    title: "Your Business Could Be Here",
    category: "Coming Soon",

    description:
      "Your business can become our next success story with modern branding, website development and digital marketing.",

    image: "/comingsoon.jpg",

    tags: ["Website", "Branding", "Marketing"],

    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-gradient-to-b from-[#091126] via-[#070d1d] to-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Featured
            <span className="text-blue-500"> Projects</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Every project is crafted with creativity, strategy and technology
            to help businesses grow online.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {project.featured && (
                  <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold">
                    ⭐ Featured Project
                  </div>
                )}
              </div>

              {/* Content */}

              <div className="p-8">
                <p className="text-blue-400 text-sm uppercase tracking-wider">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-8">
                  {project.description}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Gallery */}

                {project.website && (
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                      src={project.website}
                      className="rounded-xl border border-white/10 hover:scale-105 transition duration-500"
                      alt=""
                    />

                    <img
                      src={project.menu}
                      className="rounded-xl border border-white/10 hover:scale-105 transition duration-500"
                      alt=""
                    />
                  </div>
                )}

                {/* Buttons */}

                <div className="flex gap-4 mt-8">
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition">
                    View Case Study
                    <ArrowRight size={18} />
                  </button>

                  <button className="flex items-center gap-2 border border-white/20 hover:border-blue-500 px-6 py-3 rounded-xl transition">
                    Live Preview
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}