import { Briefcase, Users, Globe, Star } from "lucide-react";

const stats = [
  {
    Icon: Briefcase,
    number: "50+",
    title: "Projects Completed",
  },
  {
    Icon: Users,
    number: "20+",
    title: "Happy Clients",
  },
  {
    Icon: Globe,
    number: "10+",
    title: "Industries Served",
  },
  {
    Icon: Star,
    number: "5★",
    title: "Client Rating",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center text-blue-400 mb-5">
                <item.Icon size={32} />
              </div>

              <h2 className="text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}