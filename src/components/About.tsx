import { motion } from 'framer-motion';
import { Palette, Code, Monitor, Award, Users, Target } from 'lucide-react';

const skills = [
  { icon: Palette, label: 'Graphic Design', desc: 'Logos, Branding, Print' },
  { icon: Monitor, label: 'UI/UX Design', desc: 'User Interfaces & Experience' },
  { icon: Code, label: 'Web Development', desc: 'HTML, CSS, JavaScript' },
];

const values = [
  { icon: Award, label: 'Originality', desc: 'Every design is unique, never copied' },
  { icon: Target, label: 'Attention to Detail', desc: 'Pixel-perfect craftsmanship' },
  { icon: Users, label: 'Client-Focused', desc: 'Your vision, brought to life' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-4 mb-6">
            Designing with <span className="gradient-text">Purpose</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] mx-auto rounded-full" />
        </motion.div>

        {/* Short Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="glow-card rounded-2xl p-8 bg-[#12101c]/80 backdrop-blur-sm">
            <p className="text-[#9996a8] text-lg leading-relaxed text-center">
              Hi, I'm <span className="text-[#f1f0f5] font-semibold">Udani Wickramasinghe</span>, a Graphic Designer and second-year undergraduate at the{' '}
              <span className="text-[#a855f7]">University of Moratuwa</span>, pursuing a{' '}
              <span className="text-[#f1f0f5]">BSc (Hons) in Information Technology</span>.
              I craft minimalistic, modern visual solutions logos, branding, social media content, posters, T-shirt designs, and digital experiences that communicate ideas clearly. My blend of creativity and technical knowledge lets me design with both aesthetic appeal and real functionality in mind.
            </p>
          </div>
        </motion.div>

        {/* Skills & Values */}
        <div className="max-w-5xl mx-auto">
          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-[Space_Grotesk] text-center mb-10 text-[#f1f0f5]">
              What I <span className="gradient-text">Do</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="glow-card rounded-xl p-6 bg-[#12101c]/60 backdrop-blur-sm hoverable group text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#7c3aed]/20 to-[#3b82f6]/20 group-hover:from-[#7c3aed]/30 group-hover:to-[#3b82f6]/30 transition-all duration-300">
                      <skill.icon size={24} className="text-[#a855f7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#f1f0f5] mb-1">{skill.label}</h4>
                      <p className="text-sm text-[#9996a8]">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Design Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold font-[Space_Grotesk] text-center mb-10 text-[#f1f0f5]">
              My Design <span className="gradient-text">Values</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="glow-card rounded-xl p-6 bg-[#12101c]/60 backdrop-blur-sm hoverable group text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 group-hover:from-[#3b82f6]/30 group-hover:to-[#a855f7]/30 transition-all duration-300">
                      <value.icon size={24} className="text-[#3b82f6]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#f1f0f5] mb-1">{value.label}</h4>
                      <p className="text-sm text-[#9996a8]">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
