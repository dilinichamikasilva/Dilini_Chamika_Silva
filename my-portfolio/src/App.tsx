
import { motion } from 'framer-motion';
import { Coffee, Zap, Code, Users, ShieldCheck } from 'lucide-react';
import diliniProfile from './assets/dilini_2.png';
import treasurerImg from './assets/treasurer.jpeg'; 
import viceTreasurerImg from './assets/vice_t.jpeg';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Achievements from './components/Achievements';
import DocumentSection from './components/DocumentSection';
import Footer from './components/Footer';
import Contact from './components/Contact';

// Constants
import { PROFILE } from './constants/profile';

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
        <section id="about" className="grid lg:grid-cols-2 gap-16 items-start scroll-mt-24">
          
          {/* LEFT SIDE: Image, Bio, Coffee, and Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image with Animated Border */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d946ef] to-[#8b5cf6] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-48 h-48 bg-[#050505] rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src={diliniProfile} 
                    alt={PROFILE.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Floating Coffee Animation Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-[#050505] p-3 rounded-2xl border border-white/10 shadow-2xl z-20"
                >
                  <div className="relative">
                     <Coffee size={28} className="text-[#d946ef]" strokeWidth={1.5} />
                     {/* Animated Steam */}
                     <motion.div
                        animate={{ y: [0, -12], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-2 left-1/2 w-[1.5px] h-3 bg-gradient-to-t from-[#d946ef] to-transparent blur-[0.5px]"
                     />
                  </div>
                </motion.div>
              </div>

              {/* Title & Description */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <h2 className="text-4xl font-bold text-white">About Me</h2>
                  <div className="hidden md:block h-[2px] w-12 bg-[#d946ef] rounded-full" />
                </div>
                <p className="text-gray-400 leading-relaxed text-lg italic">
                  "{PROFILE.about}"
                </p>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#8b5cf6]/50 transition-all duration-500 group">
              <h4 className="text-[#8b5cf6] font-bold mb-5 flex items-center gap-2 text-sm uppercase tracking-widest">
                <Code size={18} /> Technical Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE.techSkills.map((s) => (
                  <span 
                    key={s} 
                    className="bg-white/5 px-3 py-1.5 rounded-xl text-xs text-gray-400 border border-white/5 hover:border-[#d946ef]/50 hover:text-white hover:bg-white/10 transition-all cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Educational Qualifications */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden h-full"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#d946ef]/10 rounded-xl">
                <Zap className="text-[#d946ef]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education Journey</h3>
            </div>

            <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#d946ef] before:via-[#8b5cf6] before:to-transparent">
              
              {/* IJSE Diploma */}
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-[22px] h-[22px] bg-[#050505] border-2 border-[#d946ef] rounded-full group-hover:scale-125 group-hover:shadow-[0_0_15px_#d946ef] transition-all duration-300" />
                <h5 className="text-white font-bold text-lg leading-tight">Diploma in Computer Science</h5>
                <p className="text-[#d946ef] text-sm font-medium mt-1">IJSE - Institute of Software Engineering</p>
              </div>

              {/* AI Course */}
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-[22px] h-[22px] bg-[#050505] border-2 border-[#8b5cf6] rounded-full group-hover:scale-125 group-hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300" />
                <h5 className="text-white font-bold text-lg leading-tight">AI & Machine Learning</h5>
                <p className="text-[#8b5cf6] text-sm font-medium mt-1">IJSE - Institute of Software Engineering</p>
              </div>

              {/* A/Ls */}
              <div className="relative pl-10 group">
                <div className="absolute left-[4px] top-1.5 w-[14px] h-[14px] bg-gray-700 rounded-full group-hover:bg-gray-400 transition-colors" />
                <h5 className="text-gray-200 font-semibold leading-tight">G.C.E. A/L Physical Science (CCS)</h5>
                <p className="text-gray-500 text-sm mt-1">St. John's College</p>
              </div>

              {/* O/Ls */}
              <div className="relative pl-10 group">
                <div className="absolute left-[4px] top-1.5 w-[14px] h-[14px] bg-gray-700 rounded-full group-hover:bg-gray-400 transition-colors" />
                <h5 className="text-gray-200 font-semibold leading-tight">G.C.E. O/L (7A's, 2B's)</h5>
                <p className="text-gray-500 text-sm mt-1">St. John's College</p>
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

        {/* Technical Documentation Section */}
        <DocumentSection />

        {/* Leadership & Community Section */}
<section id="leadership" className="scroll-mt-24">
  <div className="flex items-center gap-4 mb-12">
    <div className="p-3 bg-[#d946ef]/10 rounded-2xl">
      <Users className="text-[#d946ef]" size={28} />
    </div>
    <div>
      <h2 className="text-3xl font-bold text-white">Leadership & Community</h2>
      <p className="text-gray-400 text-sm">Empowering the tech student community at IJSE</p>
    </div>
  </div>

  {/* Added items-stretch to grid to help with matching heights */}
  <div className="grid md:grid-cols-2 gap-8 items-stretch">
    
    {/* First Card: Treasurer (Current) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group min-h-[550px] flex flex-col justify-between"
    >
      <div> 
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[#8b5cf6] text-[10px] font-bold uppercase tracking-widest bg-[#8b5cf6]/10 px-3 py-1 rounded-full">
              2026 - PRESENT (5TH COMMITTEE)
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Treasurer</h3>
            <p className="text-[#d946ef] font-medium text-sm">IJSE Student Committee</p>
          </div>
          <ShieldCheck className="text-white/20 group-hover:text-[#d946ef] transition-colors" size={32} />
        </div>

        <p className="text-gray-400 mb-8 text-sm leading-relaxed italic h-[5rem]">
          "Managing committee finances, budgeting for major tech events, and ensuring financial transparency. Leading team collaborations for student welfare and event planning."
        </p>
      </div>

      {/* Image Container */}
      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-auto">
        <img 
          src={treasurerImg} 
          alt="Treasurer Role" 
          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700" 
        />
      </div>
    </motion.div>

    {/* Second Card: Vice Treasurer (Past) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group min-h-[550px] flex flex-col justify-between"
    >
      <div> {/* Wrapper for top content */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
              2025 - 2026 (4TH COMMITTEE)
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Vice Treasurer</h3>
            <p className="text-[#8b5cf6] font-medium text-sm">IJSE Student Committee</p>
          </div>
          <ShieldCheck className="text-white/20" size={32} />
        </div>

        <p className="text-gray-400 mb-8 text-sm leading-relaxed italic h-[5rem]">
          "Assisted in financial record-keeping and coordinated with sub-committees for funding approvals and event logistics."
        </p>
      </div>

      {/* Image Container */}
      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-auto">
        <img 
          src={viceTreasurerImg} 
          alt="Vice Treasurer Role" 
          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700" 
        />
      </div>
    </motion.div>
  </div>
</section>

        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}