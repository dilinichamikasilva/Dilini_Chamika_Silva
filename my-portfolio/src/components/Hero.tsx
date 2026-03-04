// import { motion } from 'framer-motion';
// import { Download, Github, Code, Heart, Sparkles } from 'lucide-react';
// import { PROFILE } from '../constants/profile';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [displayText, setDisplayText] = useState('');
//   const fullText = PROFILE.role; 
  
//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       setDisplayText(fullText.substring(0, i));
//       i++;
//       if (i > fullText.length) clearInterval(timer);
//     }, 100);
//     return () => clearInterval(timer);
//   }, [fullText]);

//   return (
//     <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden px-6">
//       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <motion.h2 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-[#d946ef] font-mono mb-4 uppercase tracking-[0.3em] text-xs md:text-sm flex items-center gap-2"
//           >
//             <Sparkles size={20} /> Hi, I am
//           </motion.h2>

//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
//           >
//             {PROFILE.name}
//           </motion.h1>

//           <div className="h-10 mb-8"> 
//               <p className="text-xl md:text-3xl text-gray-400 font-light">
//                   I am a <span className="text-white font-medium border-r-4 border-[#d946ef] pr-2 animate-pulse">
//                       {displayText}
//                   </span>
//               </p>
//           </div>

//           <p className="text-base md:text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
//             Building digital experiences with <span className="text-[#d946ef]">precision</span> and <span className="text-[#8b5cf6]">passion</span>. 
//             Let's create something amazing together.
//           </p>
          
//           <div className="flex flex-wrap gap-4">
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href={PROFILE.cvUrl} 
//               className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white rounded-full font-bold shadow-[0_0_20px_rgba(217,70,239,0.3)]"
//             >
//               <Download size={20} /> Download CV
//             </motion.a>

//             <motion.a 
//               whileHover={{ scale: 1.05, borderColor: "#d946ef" }}
//               href={PROFILE.github} 
//               className="flex items-center gap-3 px-8 py-3 border border-white/10 text-white rounded-full font-bold transition-colors hover:bg-white/5"
//             >
//               <Github size={20} /> GitHub
//             </motion.a>
//           </div>
//         </motion.div>

//         <div className="relative hidden lg:flex justify-center items-center">
//           <div className="absolute w-[450px] h-[450px] bg-[#d946ef]/10 blur-[120px] rounded-full animate-pulse" />

//           <motion.div
//             animate={{ 
//               y: [0, -30, 0],
//               rotateX: [12, 18, 12],
//               rotateY: [-12, -8, -12]
//             }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             style={{ perspective: 1200 }}
//             className="relative z-10 w-full max-w-[500px]"
//           >
//             <div className="relative bg-[#1a1a1a] border-[6px] border-white/10 rounded-[2.5rem] p-5 shadow-[0_0_50px_rgba(217,70,239,0.15)] aspect-[16/10]">
//                {/* Screen Content */}
//                <div className="w-full h-full bg-[#050505] rounded-[1.5rem] p-6 font-mono text-xs md:text-sm space-y-3 overflow-hidden select-none border border-white/5">
//                   <div className="flex gap-2 mb-6">
//                     <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
//                     <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
//                     <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
//                   </div>
                  
//                   <p className="text-[#d946ef]">const <span className="text-white">GirlDeveloper</span> = &#123;</p>
//                   <p className="text-gray-400 ml-5">name: <span className="text-[#8b5cf6]">"{PROFILE.name}"</span>,</p>
//                   <p className="text-gray-400 ml-5">role: <span className="text-[#8b5cf6]">"Full Stack"</span>,</p>
//                   <p className="text-gray-400 ml-5">skills: [<span className="text-[#8b5cf6]">"Java", "React", "Js"...</span>],</p>
//                   <p className="text-gray-400 ml-5">coffee: <span className="text-[#8b5cf6]">true</span>,</p>
//                   <p className="text-gray-400 ml-5">lovesCoding: <span className="text-[#d946ef]">true</span></p>
//                   <p className="text-[#d946ef]">&#125;;</p>
//                   <p className="text-pink-500 animate-pulse mt-4">Built with ❤️ and Code</p>
//                </div>
//             </div>

//             {/* Orbiting Elements */}
//             <motion.div 
//                animate={{ y: [0, 25, 0], rotate: [0, 10, 0] }} 
//                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                className="absolute -top-6 -left-6 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl"
//             >
//                <Heart className="text-[#d946ef] fill-[#d946ef]/20" size={32} />
//             </motion.div>

//             <motion.div 
//                animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }} 
//                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                className="absolute -bottom-8 -right-4 p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-xl"
//             >
//                <Code className="text-[#8b5cf6]" size={32} />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#d946ef] font-mono mb-4 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm flex items-center justify-center lg:justify-start gap-2"
          >
            <Sparkles size={18} /> Hi, I am
          </motion.h2>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {PROFILE.name}
          </motion.h1>

          <div className="h-8 md:h-12 mb-8"> 
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light">
              I am a <span className="text-white font-medium border-r-4 border-[#d946ef] pr-2 animate-pulse">
                {displayText}
              </span>
            </p>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Building digital experiences with <span className="text-[#d946ef]">precision</span> and <span className="text-[#8b5cf6]">passion</span>. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PROFILE.cvUrl} 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] text-white rounded-full font-bold shadow-[0_0_20px_rgba(217,70,239,0.3)]"
            >
              <Download size={20} /> Download CV
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, borderColor: "#d946ef" }}
              href={PROFILE.github} 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 border border-white/10 text-white rounded-full font-bold transition-colors hover:bg-white/5"
            >
              <Github size={20} /> GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: IDE Mockup */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 mt-10 lg:mt-0 scale-75 md:scale-90 lg:scale-100">
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#d946ef]/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />

          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateX: [10, 15, 10],
              rotateY: [-10, -5, -10]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: 1200 }}
            className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px]"
          >
            <div className="relative bg-[#1a1a1a] border-[4px] md:border-[6px] border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-5 shadow-[0_0_50px_rgba(217,70,239,0.15)] aspect-[16/10]">
               {/* Screen Content */}
               <div className="w-full h-full bg-[#050505] rounded-[1.2rem] md:rounded-[1.5rem] p-4 md:p-6 font-mono text-[10px] md:text-xs lg:text-sm space-y-2 md:space-y-3 overflow-hidden select-none border border-white/5">
                  <div className="flex gap-1.5 md:gap-2 mb-4 md:mb-6">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  <p className="text-[#d946ef]">const <span className="text-white">GirlDeveloper</span> = &#123;</p>
                  <p className="text-gray-400 ml-4 md:ml-5">name: <span className="text-[#8b5cf6]">"{PROFILE.name}"</span>,</p>
                  <p className="text-gray-400 ml-4 md:ml-5">role: <span className="text-[#8b5cf6]">"Full Stack"</span>,</p>
                  <p className="text-gray-400 ml-4 md:ml-5 text-nowrap">skills: [<span className="text-[#8b5cf6]">"Java", "React"...</span>],</p>
                  <p className="text-gray-400 ml-4 md:ml-5">coffee: <span className="text-[#8b5cf6]">true</span>,</p>
                  <p className="text-gray-400 ml-4 md:ml-5">lovesCoding: <span className="text-[#d946ef]">true</span></p>
                  <p className="text-[#d946ef]">&#125;;</p>
                  <p className="text-pink-500 animate-pulse mt-2 md:mt-4 text-[9px] md:text-xs text-center">Built with ❤️ and Code</p>
               </div>
            </div>

            <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 md:-top-6 md:-left-6 p-2 md:p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl"
          >
            {/* Removed size props and used Tailwind classes for responsive sizing */}
            <Heart className="text-[#d946ef] fill-[#d946ef]/20 w-6 h-6 md:w-8 md:h-8" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 md:-bottom-8 -right-2 md:-right-4 p-2 md:p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl"
            >
              {/* Removed size props and used Tailwind classes for responsive sizing */}
              <Code className="text-[#8b5cf6] w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}