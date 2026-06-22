import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiBootstrap, SiTypescript, SiFirebase, 
  SiSupabase, SiGithub, SiVercel, SiNetlify, SiPostman,
  SiMongodb, SiExpress, SiNodedotjs
} from 'react-icons/si';
import { Code2, Palette, Database, Wrench, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const coreSkills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "90%" },
    { name: "CSS3", icon: SiCss, color: "#1572B6", level: "85%" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "85%" },
    { name: "React.js", icon: SiReact, color: "#61DAFB", level: "85%" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "75%" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "70%" },
  ];

  const stylingSkills = [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "90%" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: "80%" },
  ];

  const backendSkills = [
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: "65%" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: "60%" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "50%" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "45%" },
    { name: "Express.js", icon: SiExpress, color: "#000000", level: "45%" },
  ];

  const toolSkills = [
    { name: "GitHub", icon: SiGithub, color: "#181717", level: "85%" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "75%" },
    { name: "Vercel", icon: SiVercel, color: "#000000", level: "85%" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: "80%" },
  ];

  const SkillCard = ({ skill }: { skill: { name: string; icon: any; color: string; level: string } }) => {
    const Icon = skill.icon;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="glass-card rounded-xl p-3 md:p-4 text-center cursor-pointer group"
      >
        <div className="flex justify-center mb-2 md:mb-3">
          <div 
            className="p-2 md:p-3 rounded-xl bg-neon-cyan/10 neon-border group-hover:neon-glow transition-all"
            style={{ color: skill.color }}
          >
            <Icon size={24} className="md:w-7 md:h-7" />
          </div>
        </div>
        <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">{skill.name}</h3>
        <div className="w-full bg-neon-cyan/20 rounded-full h-1.5 mt-2 md:mt-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: skill.level }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gradient-to-r from-neon-cyan to-electric-blue h-1.5 rounded-full"
            style={{ width: skill.level }}
          />
        </div>
        <p className="text-text-light text-[10px] sm:text-xs mt-1 md:mt-2">{skill.level}</p>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>Technical</span>
            <span className={isDark ? "text-white" : "text-gray-900"}>&nbsp;</span>
            <span className="text-neon-cyan">Expertise</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto mb-5 md:mb-6 rounded-full"></div>
        </motion.div>

        {/* Core Frontend */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Code2 className="text-neon-cyan" size={24} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Core Frontend</h3>
            <Sparkles className="text-neon-cyan" size={18} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {coreSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* UI Framework */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Palette className="text-neon-cyan" size={24} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">UI Framework & Styling</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
            {stylingSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-5 md:mb-7">
            <div className="flex items-center gap-2">
              <Database className="text-neon-cyan" size={24} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Backend & Database</h3>
            </div>
            <span className="text-xs text-text-light bg-neon-cyan/10 px-2 py-0.5 rounded-full">Basic/Familiar</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-5 md:mb-7">
            <Wrench className="text-neon-cyan" size={24} />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Tools & Platforms</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {toolSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;