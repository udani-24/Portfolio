import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Work" },
  { id: "flyers", label: "Flyer Designs" },
  { id: "posters", label: "Poster Designs" },
  { id: "tshirts", label: "T-Shirt Designs" },
  { id: "wristbands", label: "Wrist Band Designs" },
];

const designs = [
  // Flyers (34)
  {
    id: 1,
    title: "Leo Padura",
    category: "flyers",
    description: "Fund Raising Event Promotional Flyer",
    image: "/images/flyers/flyer1.jpg",
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    pattern: "geometric",
  },
  {
    id: 2,
    title: "Leo Padura",
    category: "flyers",
    description: "Fund Raising Event Promotional Flyer",
    image: "/images/flyers/flyer2.jpg",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    pattern: "waves",
  },
  {
    id: 3,
    title: "Leo Padura",
    category: "flyers",
    description: "Fund Raising Event Promotional Flyer",
    image: "/images/flyers/flyer3.jpg",
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    pattern: "abstract",
  },
  {
    id: 4,
    title: "T Shirt Selling Flyer",
    category: "flyers",
    description: "T Shirt Selling",
    image: "/images/flyers/flyer4.jpg",
    gradient: "from-indigo-600 via-blue-500 to-cyan-500",
    pattern: "minimal",
  },
  {
    id: 5,
    title: "T Shirt Selling",
    category: "flyers",
    description: "T Shirt Selling",
    image: "/images/flyers/flyer5.jpg",
    gradient: "from-fuchsia-600 via-purple-500 to-violet-600",
    pattern: "geometric",
  },
  {
    id: 6,
    title: "Monster Mash",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer6.jpg",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    pattern: "abstract",
  },
  {
    id: 7,
    title: "Treat Street",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer7.jpg",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    pattern: "minimal",
  },
  {
    id: 8,
    title: "Film Festival",
    category: "flyers",
    description: "Film Festival Promotion",
    image: "/images/flyers/flyer8.jpg",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    pattern: "waves",
  },
  {
    id: 9,
    title: "Film Festival",
    category: "flyers",
    description: "Film Festival Promotion",
    image: "/images/flyers/flyer9.jpg",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    pattern: "typography",
  },
  {
    id: 10,
    title: "Tickets",
    category: "flyers",
    description: "Film Festival",
    image: "/images/flyers/flyer10.jpg",
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    pattern: "abstract",
  },
  {
    id: 11,
    title: "Monster Mash",
    category: "flyers",
    description: "Organizing Committee Calling",
    image: "/images/flyers/flyer11.jpg",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    pattern: "geometric",
  },
  {
    id: 12,
    title: "Charter Day",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer12.jpg",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    pattern: "minimal",
  },
  {
    id: 13,
    title: "Charter Day",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer13.jpg",
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    pattern: "waves",
  },
  {
    id: 14,
    title: "Ballerina",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer14.jpg",
    gradient: "from-teal-500 via-emerald-500 to-green-500",
    pattern: "typography",
  },
  {
    id: 15,
    title: "Ballerina",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer15.jpg",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    pattern: "abstract",
  },
  {
    id: 16,
    title: "Ballerina",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer16.jpg",
    gradient: "from-red-500 via-pink-500 to-rose-500",
    pattern: "geometric",
  },
  {
    id: 17,
    title: "Ballerina",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer17.jpg",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    pattern: "minimal",
  },
  {
    id: 18,
    title: "Ballerina",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer18.jpg",
    gradient: "from-slate-500 via-gray-500 to-zinc-500",
    pattern: "waves",
  },
  {
    id: 19,
    title: "Ballerina",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer19.jpg",
    gradient: "from-blue-600 via-indigo-500 to-purple-500",
    pattern: "typography",
  },
  {
    id: 20,
    title: "Octwave",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer20.jpg",
    gradient: "from-lime-500 via-green-500 to-emerald-500",
    pattern: "abstract",
  },
  {
    id: 21,
    title: "Octwave",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer21.jpg",
    gradient: "from-cyan-600 via-teal-500 to-emerald-500",
    pattern: "geometric",
  },
  {
    id: 22,
    title: "Octwave",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer22.jpg",
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    pattern: "minimal",
  },
  {
    id: 23,
    title: "Happy New Year",
    category: "flyers",
    description: "2026 New Year",
    image: "/images/flyers/flyer23.jpg",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    pattern: "waves",
  },
  {
    id: 24,
    title: "T Shirt",
    category: "flyers",
    description: "T Shirt Selling",
    image: "/images/flyers/flyer24.jpg",
    gradient: "from-rose-600 via-pink-500 to-purple-500",
    pattern: "typography",
  },
  {
    id: 25,
    title: "T Shirt",
    category: "flyers",
    description: "T Shirt Selling",
    image: "/images/flyers/flyer25.jpg",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    pattern: "abstract",
  },
  {
    id: 26,
    title: "Leo Padura",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer26.jpg",
    gradient: "from-fuchsia-600 via-pink-500 to-rose-500",
    pattern: "geometric",
  },
  {
    id: 27,
    title: "T Shirt Combo Pack",
    category: "flyers",
    description: "T Shirt Combo Pack Selling",
    image: "/images/flyers/flyer27.jpg",
    gradient: "from-slate-600 via-gray-500 to-zinc-500",
    pattern: "minimal",
  },
  {
    id: 28,
    title: "T Shirt Combo Pack",
    category: "flyers",
    description: "T Shirt Combo Pack Selling",
    image: "/images/flyers/flyer28.jpg",
    gradient: "from-red-600 via-rose-500 to-pink-500",
    pattern: "waves",
  },
  {
    id: 29,
    title: "Happy New Year",
    category: "flyers",
    description: "2026 New Year",
    image: "/images/flyers/flyer29.jpg",
    gradient: "from-green-600 via-emerald-500 to-teal-500",
    pattern: "typography",
  },
  {
    id: 30,
    title: "Hari Para",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer30.jpg",
    gradient: "from-amber-600 via-yellow-500 to-orange-500",
    pattern: "abstract",
  },
  {
    id: 31,
    title: "Mora Foresight",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer31.jpg",
    gradient: "from-blue-600 via-cyan-500 to-sky-500",
    pattern: "geometric",
  },
  {
    id: 32,
    title: "Mora Foresight",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer32.jpg",
    gradient: "from-purple-600 via-violet-500 to-indigo-500",
    pattern: "minimal",
  },
  {
    id: 33,
    title: "Mora Foresight",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer33.jpg",
    gradient: "from-teal-600 via-cyan-500 to-blue-500",
    pattern: "waves",
  },
  {
    id: 34,
    title: "Mora Foresight",
    category: "flyers",
    description: "Event Promotion",
    image: "/images/flyers/flyer34.jpg",
    gradient: "from-indigo-600 via-blue-500 to-violet-600",
    pattern: "typography",
  },
  // Posters (4)
  {
    id: 35,
    title: "T Shirt",
    category: "posters",
    description: "T Shirt Selling",
    image: "/images/posters/poster1.jpg",
    gradient: "from-rose-500 via-red-500 to-orange-500",
    pattern: "abstract",
  },
  {
    id: 36,
    title: "T Shirt",
    category: "posters",
    description: "T Shirt Selling",
    image: "/images/posters/poster2.jpg",
    gradient: "from-blue-600 via-indigo-500 to-purple-500",
    pattern: "minimal",
  },
  {
    id: 37,
    title: "T Shirt",
    category: "posters",
    description: "T Shirt Selling",
    image: "/images/posters/poster3.jpg",
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    pattern: "typography",
  },
  {
    id: 38,
    title: "T Shirt",
    category: "posters",
    description: "T Shirt Selling",
    image: "/images/posters/poster4.jpg",
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    pattern: "geometric",
  },
  // T-Shirts (3)
  {
    id: 39,
    title: "Leo Club",
    category: "tshirts",
    description: "Official T Shirt",
    image: "/images/tshirts/tshirt1.jpg",
    gradient: "from-fuchsia-600 via-purple-500 to-violet-600",
    pattern: "typography",
  },
  {
    id: 40,
    title: "Guiding",
    category: "tshirts",
    description: "Hiking Hoodie",
    image: "/images/tshirts/tshirt2.jpg",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    pattern: "abstract",
  },
  {
    id: 41,
    title: "Society T Shirt",
    category: "tshirts",
    description: "Official T Shirt",
    image: "/images/tshirts/tshirt3.jpg",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    pattern: "minimal",
  },
  // Wrist bands (1)
  {
    id: 42,
    title: "Mora Foresight",
    category: "wristbands",
    description: "Mora Foresight Wristband",
    image: "/images/wristbands/wristband1.jpg",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    pattern: "wristband",
  },
];

function DesignPattern({ pattern }: { pattern: string; gradient: string }) {
  switch (pattern) {
    case "geometric":
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative w-40 h-40">
            <div className="absolute top-0 left-8 w-24 h-24 border-2 border-white/40 rotate-45" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-2 border-white/30 rotate-12" />
            <div className="absolute top-8 right-4 w-16 h-16 border-2 border-white/20 -rotate-12" />
          </div>
        </div>
      );
    case "waves":
      return (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute bottom-0 w-full">
            <svg viewBox="0 0 200 80" className="w-full h-24">
              <path
                d="M0,40 C30,20 70,60 100,40 C130,20 170,60 200,40 L200,80 L0,80 Z"
                fill="rgba(255,255,255,0.15)"
              />
              <path
                d="M0,50 C40,30 60,70 100,50 C140,30 160,70 200,50 L200,80 L0,80 Z"
                fill="rgba(255,255,255,0.1)"
              />
              <path
                d="M0,60 C50,40 50,80 100,60 C150,40 150,80 200,60 L200,80 L0,80 Z"
                fill="rgba(255,255,255,0.08)"
              />
            </svg>
          </div>
        </div>
      );
    case "abstract":
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-2 border-white/30" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border border-white/20" />
          </div>
        </div>
      );
    case "minimal":
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="text-center space-y-4">
            <div className="w-20 h-[2px] bg-white/40 mx-auto" />
            <div className="text-3xl font-bold text-white/50 font-[Space_Grotesk]">
              Aa
            </div>
            <div className="w-12 h-[2px] bg-white/30 mx-auto" />
          </div>
        </div>
      );
    case "typography":
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="text-center space-y-1">
            <div className="text-5xl font-black text-white/30 font-[Space_Grotesk] tracking-tighter">
              STREET
            </div>
            <div className="text-5xl font-black text-white/20 font-[Space_Grotesk] tracking-tighter">
              WEAR
            </div>
          </div>
        </div>
      );
    case "wristband":
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative">
            <div className="w-48 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
              <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-6 bg-white/20 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-24 h-24 border-2 border-white/30 rounded-lg rotate-45" />
        </div>
      );
  }
}

const DesignCard = ({ design }: { design: (typeof designs)[number] }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isPoster = design.category === "posters";
  const isSquareDesign =
    design.category === "flyers" || design.category === "wristbands";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="design-card rounded-2xl bg-[#12101c]/80 backdrop-blur-sm overflow-hidden group hoverable"
    >
      <div
        className={`${design.gradient} gradient-animate relative overflow-hidden ${
          isPoster
            ? "h-[460px] sm:h-[520px]"
            : isSquareDesign
              ? "aspect-square h-auto"
              : "h-64"
        }`}
      >
        <DesignPattern pattern={design.pattern} gradient={design.gradient} />

        {design.image && !error && (
          <img
            src={design.image}
            alt={design.title}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100 z-[2]" : "opacity-0"
            }`}
          />
        )}

        {design.image && !loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center z-[1]">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/40 animate-[ping_1.2s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/30 backdrop-blur-sm text-white/80 border border-white/10">
            {design.category.charAt(0).toUpperCase() + design.category.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#f1f0f5] mb-2 group-hover:text-[#a855f7] transition-colors duration-300">
          {design.title}
        </h3>
        <p className="text-sm text-[#9996a8]">{design.description}</p>
      </div>
    </motion.div>
  );
};

export default function DesignShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDesigns =
    activeCategory === "all"
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  return (
    <section id="designs" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-4 mb-6">
            My <span className="gradient-text">Design Work</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] mx-auto rounded-full" />
          <p className="text-[#9996a8] mt-6 max-w-xl mx-auto">
            A collection of my creative works spanning flyers, posters, apparel,
            and event materials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tag px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hoverable ${
                activeCategory === cat.id
                  ? "bg-[#a855f7]/20 border-[#a855f7]/40 text-[#a855f7]"
                  : "bg-[#12101c]/60 border-[#1e1b2e] text-[#9996a8] hover:border-[#a855f7]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
