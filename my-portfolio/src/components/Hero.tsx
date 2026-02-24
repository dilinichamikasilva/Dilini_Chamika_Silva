import { motion } from 'framer-motion';
import { Download, Github, Code, Heart, Sparkles } from 'lucide-react';
import { PROFILE } from '../constants/profile';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = PROFILE.role; 
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#d946ef] font-mono mb-4 uppercase tracking-[0.3em] text-xs md:text-sm flex items-center gap-2"
          >
            <Sparkles size={20} /> Hi, I am
          </motion.h2>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            {PROFILE.name}
          </motion.h1>

          <div className="h-10 mb-8"> 
              <p className="text-xl md:text-3xl text-gray-400 font-light">
                  I am a <span className="text-white font-medium border-r-4 border-[#d946ef] pr-2 animate-pulse">
                      {displayText}
                  </span>
              </p>
          </div>

          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
            Building digital experiences with <span className="text-[#d946ef]">precision</span> and <span className="text-[#8b5cf6]">passion</span>. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PROFILE.cvUrl} 
              className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white rounded-full font-bold shadow-[0_0_20px_rgba(217,70,239,0.3)]"
            >
              <Download size={20} /> Download CV
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, borderColor: "#d946ef" }}
              href={PROFILE.github} 
              className="flex items-center gap-3 px-8 py-3 border border-white/10 text-white rounded-full font-bold transition-colors hover:bg-white/5"
            >
              <Github size={20} /> GitHub
            </motion.a>
          </div>
        </motion.div>

        <div className="relative hidden lg:flex justify-center items-center">
          <div className="absolute w-[450px] h-[450px] bg-[#d946ef]/10 blur-[120px] rounded-full animate-pulse" />

          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotateX: [12, 18, 12],
              rotateY: [-12, -8, -12]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: 1200 }}
            className="relative z-10 w-full max-w-[500px]"
          >
            <div className="relative bg-[#1a1a1a] border-[6px] border-white/10 rounded-[2.5rem] p-5 shadow-[0_0_50px_rgba(217,70,239,0.15)] aspect-[16/10]">
               {/* Screen Content */}
               <div className="w-full h-full bg-[#050505] rounded-[1.5rem] p-6 font-mono text-xs md:text-sm space-y-3 overflow-hidden select-none border border-white/5">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  <p className="text-[#d946ef]">const <span className="text-white">GirlDeveloper</span> = &#123;</p>
                  <p className="text-gray-400 ml-5">name: <span className="text-[#8b5cf6]">"{PROFILE.name}"</span>,</p>
                  <p className="text-gray-400 ml-5">role: <span className="text-[#8b5cf6]">"Full Stack"</span>,</p>
                  <p className="text-gray-400 ml-5">skills: [<span className="text-[#8b5cf6]">"Java", "React", "Js"...</span>],</p>
                  <p className="text-gray-400 ml-5">coffee: <span className="text-[#8b5cf6]">true</span>,</p>
                  <p className="text-gray-400 ml-5">lovesCoding: <span className="text-[#d946ef]">true</span></p>
                  <p className="text-[#d946ef]">&#125;;</p>
                  <p className="text-pink-500 animate-pulse mt-4">Built with ❤️ and Code</p>
               </div>
            </div>

            {/* Orbiting Elements */}
            <motion.div 
               animate={{ y: [0, 25, 0], rotate: [0, 10, 0] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -left-6 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl"
            >
               <Heart className="text-[#d946ef] fill-[#d946ef]/20" size={32} />
            </motion.div>

            <motion.div 
               animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }} 
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-8 -right-4 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl"
            >
               <Code className="text-[#8b5cf6]" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}