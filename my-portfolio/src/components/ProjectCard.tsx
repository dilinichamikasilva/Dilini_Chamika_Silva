import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectCard({ project }: { project: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-[#8b5cf6]/50 transition-all cursor-pointer">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#d946ef] transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
        
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="px-5 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-[#d946ef] hover:text-white transition-colors"
          >
            View Demo
          </button>
          <a href={project.github} target="_blank" className="text-gray-400 hover:text-[#8b5cf6] text-sm underline">Source Code</a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe className="w-full h-full" src={project.videoUrl} title="Demo" allowFullScreen />
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 bg-white/10 hover:bg-[#d946ef] p-2 rounded-full backdrop-blur-md transition-colors">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}