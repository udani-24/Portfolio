import { motion } from 'framer-motion';
import { Briefcase, Trophy, Calendar } from 'lucide-react';

interface VolunteerProject {
  name: string;
  description: string;
  icon: string;
  isCurrent?: boolean;
}

interface VolunteeringExp {
  org: string;
  orgIcon: string;
  role: string;
  period: string;
  color: string;
  borderColor: string;
  projects: VolunteerProject[];
}

const volunteeringData: VolunteeringExp[] = [
  {
    org: 'IEEE - University of Moratuwa',
    orgIcon: '⚡',
    role: 'Design Team Member',
    period: 'Ongoing',
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/20',
    projects: [
      {
        name: 'Ballerina',
        description: 'Created visual identity and promotional materials for the Ballerina project',
        icon: '🩰',
      },
      {
        name: 'Octwave',
        description: 'Designed engaging flyers and social media content for Octwave event',
        icon: '🎵',
      },
      {
        name: 'JamboIEEE',
        description: 'Developed branding and design assets for JamboIEEE initiative',
        icon: '👋',
      },
    ],
  },
  {
    org: 'MoraForesight',
    orgIcon: '🔭',
    role: 'Design Lead',
    period: 'Current',
    color: 'from-purple-600 to-violet-500',
    borderColor: 'border-purple-500/20',
    projects: [
      {
        name: 'Design Lead',
        description: 'Leading the design team, managing visual identity and all creative outputs for MoraForesight',
        icon: '🎨',
        isCurrent: true,
      },
    ],
  },
  {
    org: 'Rotaract Club',
    orgIcon: '🌟',
    role: 'Flyer Designer',
    period: 'Past',
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/20',
    projects: [
      {
        name: 'Monster Mash',
        description: 'Designed promotional flyers and event materials for Monster Mash',
        icon: '👻',
      },
      {
        name: 'Hari Para',
        description: 'Created vibrant event flyers for the Hari Para project',
        icon: '🎪',
      },
      {
        name: 'March General Meeting',
        description: 'Designed professional meeting flyers and promotional content',
        icon: '📋',
      },
      {
        name: 'Charter Day',
        description: 'Developed special charter day celebration materials and designs',
        icon: '🎉',
      },
    ],
  },
];

export default function Volunteering() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] mt-4 mb-6">
            Volunteering <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a855f7] to-[#3b82f6] mx-auto rounded-full" />
          <p className="text-[#9996a8] mt-6 max-w-xl mx-auto">
            Contributing my design skills to meaningful causes and helping organizations build strong visual identities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#a855f7]/30 via-[#3b82f6]/30 to-transparent md:-translate-x-px" />

          {/* Experience cards */}
          <div className="space-y-16">
            {volunteeringData.map((exp, index) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-[#07060b] shadow-lg shadow-purple-500/20`} />
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                  <div className={`glow-card rounded-2xl p-8 bg-[#12101c]/80 backdrop-blur-sm border ${exp.borderColor}`}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${exp.color}/10`}>
                        {exp.orgIcon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Briefcase size={14} className="text-[#a855f7]" />
                          <h3 className="text-xl font-bold font-[Space_Grotesk] text-[#f1f0f5]">
                            {exp.org}
                          </h3>
                        </div>
                        <p className="text-[#a855f7] font-medium text-sm mt-1">{exp.role}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Calendar size={12} className="text-[#5c586e]" />
                          <span className="text-xs text-[#5c586e]">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="space-y-4">
                      {exp.projects.map((project) => (
                        <div
                          key={project.name}
                          className="group p-4 rounded-xl bg-[#0d0b14]/60 hover:bg-[#0d0b14]/80 transition-all duration-300 hoverable border border-transparent hover:border-[#1e1b2e]"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-lg mt-0.5">{project.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-[#f1f0f5] text-sm group-hover:text-[#a855f7] transition-colors">
                                  {project.name}
                                </h4>
                                {project.isCurrent && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/30">
                                    Active
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#9996a8] mt-1 leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glow-card rounded-2xl p-10 bg-[#12101c]/60 backdrop-blur-sm max-w-3xl mx-auto">
            <Trophy size={40} className="text-[#a855f7] mx-auto mb-6" />
            <h3 className="text-2xl font-bold font-[Space_Grotesk] text-[#f1f0f5] mb-4">
              Making an Impact Through Design
            </h3>
            <p className="text-[#9996a8] leading-relaxed max-w-xl mx-auto">
              Over the years, I've had the privilege of working with diverse organizations and teams,
              helping them create memorable visual identities and engaging promotional materials that
              leave lasting impressions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
