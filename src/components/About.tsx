import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const education = [
    {
      degree: "Modern Web Application Development",
      institution: "Saylani Mass IT Training Center",
      period: "2024 - 2026",
      icon: BookOpen,
      description: "Full-stack web development with modern technologies (React.js, Next.js, TypeScript)"
    },
    {
      degree: "Master's in Islamiat",
      institution: "University of Karachi & Madrasa Faizan-e-Raza",
      period: "2018 - 2023",
      icon: GraduationCap,
      description: "Islamic Studies with Equivalence Certificate from University of Karachi"
    },
    {
      degree: "Intermediate (Pre-Medical)",
      institution: "Govt. Degree Girls College",
      period: "2015 - 2017",
      icon: BookOpen,
      description: "Pre-Medical with Biology, Chemistry, Physics"
    },
    {
      degree: "Matriculation (Science)",
      institution: "London Cambridge School",
      period: "2002 - 2014",
      icon: BookOpen,
      description: "Biology"
    }
  ];

  const certifications = [
    "Modern Web Application Development Certification - Saylani Mass IT Training Center (2026)",
    "Hackathon Certification - Saylani Mass IT Training Center (April 2025)",
    "Hackathon Certification - Saylani Mass IT Training Center (January 2026)",
    "Hackathon Certification - Saylani Mass IT Training Center (February 2026)",
    "HTML Essential Certification - Cisco Networking Academy (2025)",
    "CSS Essential Certification - Cisco Networking Academy (2025)",
    "JavaScript Essential Certification - Cisco Networking Academy (2025)",
    "Equivalence Certificate - University of Karachi (Masters in Islamiat)"
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>About</span>
            <span className={isDark ? "text-white" : "text-gray-900"}>&nbsp;</span>
            <span className="text-neon-cyan">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto mb-5 md:mb-6 rounded-full"></div>
          <p className={`${isDark ? 'text-text-light' : 'text-gray-600'} text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4`}>
            I'm a passionate Frontend Developer with expertise in building modern web applications. 
            I love creating beautiful, responsive interfaces that provide exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
              <GraduationCap className="text-neon-cyan" size={20} />
              Education
            </h3>
            <div className="space-y-4 md:space-y-5">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div key={index} className="border-b border-neon-cyan/20 pb-3 md:pb-4 last:border-0">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 bg-neon-cyan/10 rounded-lg neon-border shrink-0 mt-0.5">
                        <Icon className="text-neon-cyan" size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">{edu.degree}</h4>
                        <p className={`${isDark ? 'text-text-light' : 'text-gray-600'} text-xs sm:text-sm mt-1 break-words`}>{edu.institution}</p>
                        <p className="text-neon-cyan text-[10px] sm:text-xs mt-1 flex items-center gap-1">
                          <Calendar size={10} />
                          {edu.period}
                        </p>
                        <p className={`${isDark ? 'text-text-light/70' : 'text-gray-500'} text-[10px] sm:text-xs mt-1 break-words`}>
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
              <Award className="text-neon-cyan" size={20} />
              Certifications
            </h3>
            <div className="space-y-2 md:space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 group hover:bg-neon-cyan/5 p-1.5 md:p-2 rounded-lg transition-all">
                  <div className="p-1 bg-neon-cyan/10 rounded-lg mt-0.5 shrink-0 group-hover:bg-neon-cyan/20 transition-all">
                    <Award className="text-neon-cyan" size={12} />
                  </div>
                  <p className={`${isDark ? 'text-text-light' : 'text-gray-600'} text-xs sm:text-sm md:text-base break-words flex-1`}>
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;