import { ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[120px] animate-[float-slow_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[120px] animate-[float-slow_10s_ease-in-out_infinite_2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-[150px]" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-[20%] right-[15%] text-[#a855f7]/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-[25%] left-[12%] text-[#3b82f6]/20"
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Sparkles size={24} />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e1b2e] bg-[#12101c]/60 backdrop-blur-sm mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
          <span className="text-[#9996a8] text-sm font-medium">Available for Projects</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-[Space_Grotesk] leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Udani Wickramasinghe</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] rounded-full opacity-60" />
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-[#9996a8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Graphic Designer · UI/UX Enthusiast · Creative Visual Storyteller
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#designs"
            className="glow-btn group px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white text-sm hoverable flex items-center gap-2"
          >
            View My Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full font-semibold border border-[#1e1b2e] text-[#9996a8] text-sm hover:border-[#a855f7]/50 hover:text-[#f1f0f5] transition-all duration-300 hoverable"
          >
            Know More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#5c586e] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-[#a855f7]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
