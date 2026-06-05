import { motion } from 'framer-motion';
import { ExternalLink, Code2, GitBranch } from 'lucide-react';

interface WebProject {
  title: string;
  description: string;
  icon: string;
}

const webProjects: WebProject[] = [
  {
    title: 'Responsive Design',
    description: 'Creating pixel-perfect, responsive websites that work seamlessly across all devices',
    icon: '📱',
  },
  {
    title: 'Frontend Development',
    description: 'Building interactive web experiences using React, TypeScript, and modern frameworks',
    icon: '⚡',
  },
  {
    title: 'UI/UX Implementation',
    description: 'Transforming design concepts into functional, user-friendly web interfaces',
    icon: '🎨',
  },
];

export default function WebExperience() {
  return (
    <section id="web-experience" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase">Professional Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-4 mb-6">
            Web Designer &<span className="gradient-text"> Developer</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] mx-auto rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-[Space_Grotesk] text-[#f1f0f5] mb-4">
                  Beyond Design, Into Code
                </h3>
                <p className="text-[#9996a8] leading-relaxed">
                  As a web designer and developer, I bridge the gap between beautiful design and functional web experiences. I bring designs to life using modern web technologies, ensuring they're not just visually stunning but also highly performant and user-friendly.
                </p>
              </div>

              {/* Skills grid */}
              <div className="space-y-4">
                {webProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 text-2xl">{project.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#f1f0f5] mb-1 group-hover:text-[#a855f7] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-[#9996a8]">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - GitHub showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Main GitHub card */}
            <div className="glow-card rounded-2xl p-10 bg-gradient-to-br from-[#12101c]/80 to-[#0d0b14]/80 backdrop-blur-sm border border-[#3b82f6]/20 hoverable group transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#3b82f6]/20 to-[#a855f7]/20 group-hover:from-[#3b82f6]/30 group-hover:to-[#a855f7]/30 transition-all">
                  <GitBranch size={32} className="text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-[Space_Grotesk] text-[#f1f0f5]">GitHub Profile</h4>
                  <p className="text-sm text-[#9996a8]">Explore my projects & code</p>
                </div>
              </div>

              <p className="text-[#9996a8] text-sm leading-relaxed mb-8">
                Check out my GitHub profile to see my web development projects, contributions, and the code behind my designs. I'm constantly learning and building new projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#07060b]/50 border border-[#1e1b2e]">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={16} className="text-[#a855f7]" />
                    <span className="text-xs font-semibold text-[#9996a8] uppercase">Projects</span>
                  </div>
                  <p className="text-2xl font-bold text-[#f1f0f5]">Multiple</p>
                </div>
                <div className="p-4 rounded-lg bg-[#07060b]/50 border border-[#1e1b2e]">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch size={16} className="text-[#3b82f6]" />
                    <span className="text-xs font-semibold text-[#9996a8] uppercase">Active</span>
                  </div>
                  <p className="text-2xl font-bold text-[#f1f0f5]">Growing</p>
                </div>
              </div>

              {/* GitHub button */}
              <a
                href="https://github.com/udani-24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-[#f1f0f5] bg-gradient-to-r from-[#3b82f6] to-[#6366f1] hover:from-[#3b82f6]/90 hover:to-[#6366f1]/90 transition-all duration-300 border border-[#3b82f6]/50 hover:border-[#3b82f6] group hoverable shadow-lg hover:shadow-blue-500/25"
              >
                <GitBranch size={20} />
                <span>Visit GitHub Profile</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-xl bg-[#12101c]/60 backdrop-blur-sm border border-[#1e1b2e] text-center"
            >
              <p className="text-sm text-[#9996a8] mb-4">
                Open to collaborations and exciting projects. Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
