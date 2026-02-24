import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

import { PROFILE } from './constants/profile';
import Contact from './components/Contact';

import { Coffee, Sparkles, Zap , Code } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#d946ef]/30">
      <Navbar />
      
      {/* Pink & Purple Glow Effect Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-[#8b5cf6]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-[#d946ef]/15 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <Hero />

        {/* About Section */}
<section id="about" className="grid lg:grid-cols-2 gap-12 items-start scroll-mt-24">
  
  {/* LEFT SIDE: Bio, Coffee, and Skills */}
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="space-y-10"
  >
    {/* Title & Description */}
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="h-[2px] w-12 bg-[#d946ef] rounded-full" />
      </div>
      <p className="text-gray-400 leading-relaxed text-lg italic mb-8">
        "{PROFILE.about}"
      </p>

      {/* Coffee Animation integrated here */}
      <div className="relative flex justify-start pl-10">
        <div className="absolute top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#d946ef]/10 blur-[60px] rounded-full animate-pulse" />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Coffee size={100} className="text-white opacity-80" strokeWidth={1} />
          {/* Steam */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -30], opacity: [0, 0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
              className="absolute top-0 left-1/2 w-1 h-4 bg-[#d946ef] rounded-full blur-[1px]"
            />
          ))}
        </motion.div>
      </div>
    </div>

    {/* Skills Grid */}
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="p-5 bg-white/5 border border-white/10 rounded-3xl hover:border-[#d946ef]/50 transition-colors">
        <h4 className="text-[#d946ef] font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
          <Sparkles size={16} /> Soft Skills
        </h4>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {PROFILE.softSkills.map(s => <span key={s} className="bg-white/5 px-2 py-1 rounded-lg"># {s}</span>)}
        </div>
      </div>

      <div className="p-5 bg-white/5 border border-white/10 rounded-3xl hover:border-[#8b5cf6]/50 transition-colors">
        <h4 className="text-[#8b5cf6] font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
          <Code size={16} /> Tech Stack
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {PROFILE.techSkills.slice(0, 8).map(s => (
            <span key={s} className="bg-white/10 px-2.5 py-1 rounded-md text-[10px] text-gray-300 border border-white/5">{s}</span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>

  {/* RIGHT SIDE: Educational Qualifications */}
  <motion.div 
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-[#d946ef]/10 rounded-xl">
        <Zap className="text-[#d946ef]" size={24} />
      </div>
      <h3 className="text-2xl font-bold text-white">Education</h3>
    </div>

    <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#d946ef] before:via-[#8b5cf6] before:to-transparent">
      
      {/* IJSE Diploma */}
      <div className="relative pl-10 group">
        <div className="absolute left-0 top-1.5 w-[22px] h-[22px] bg-[#050505] border-2 border-[#d946ef] rounded-full group-hover:scale-125 transition-transform" />
        <h5 className="text-white font-bold text-lg leading-none">Diploma in Computer Science</h5>
        <p className="text-[#d946ef] text-sm mt-1">IJSE - Institute of Software Engineering</p>
      </div>

      {/* AI Course */}
      <div className="relative pl-10 group">
        <div className="absolute left-0 top-1.5 w-[22px] h-[22px] bg-[#050505] border-2 border-[#8b5cf6] rounded-full group-hover:scale-125 transition-transform" />
        <h5 className="text-white font-bold text-lg leading-none">AI & Machine Learning</h5>
        <p className="text-[#8b5cf6] text-sm mt-1">IJSE - Institute of Software Engineering</p>
      </div>

      {/* A/Ls */}
      <div className="relative pl-10 group">
        <div className="absolute left-[4px] top-1.5 w-[14px] h-[14px] bg-gray-600 rounded-full" />
        <h5 className="text-gray-200 font-semibold leading-none">G.C.E. A/L Physical Science (CCS)</h5>
        <p className="text-gray-500 text-sm mt-1 italic">St. John's College</p>
      </div>

      {/* O/Ls */}
      <div className="relative pl-10 group">
        <div className="absolute left-[4px] top-1.5 w-[14px] h-[14px] bg-gray-600 rounded-full" />
        <h5 className="text-gray-200 font-semibold leading-none">G.C.E. O/L (7A's, 2B's)</h5>
        <p className="text-gray-500 text-sm mt-1 italic">St. John's College</p>
      </div>
    </div>
  </motion.div>

</section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center underline decoration-[#d946ef] underline-offset-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROFILE.projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>

        <Achievements />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}