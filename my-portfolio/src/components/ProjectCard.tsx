import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Play, X } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const isVideoFile = project.videoUrl?.toLowerCase().endsWith('.mp4');
  const isExternalLink = project.videoUrl?.includes('linkedin.com') || !isVideoFile;

  const handleDemoClick = () => {
    if (isExternalLink && !isVideoFile) {
      window.open(project.videoUrl, '_blank', 'noreferrer');
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 hover:border-[#8b5cf6]/50 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full"
      >
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d946ef]/10 blur-[80px] rounded-full group-hover:bg-[#d946ef]/20 transition-all" />

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-[#d946ef] transition-colors flex items-center gap-2">
            {project.title}
            <span className="w-2 h-2 bg-[#d946ef] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          
          <p className="text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.slice(0, 5).map((t: string) => (
              <span key={t} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2.5 py-1 rounded-md text-gray-500 border border-white/5">
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[10px] text-gray-600 font-bold">+{project.tech.length - 5}</span>
            )}
          </div>
          
          {/* Action Buttons Container */}
          <div className="flex flex-wrap gap-4 items-center mt-auto">
            <button 
              onClick={handleDemoClick}
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:bg-[#d946ef] hover:text-white transition-all transform active:scale-95"
            >
              <Play size={14} fill="currentColor" /> 
              {isExternalLink && !isVideoFile ? 'LinkedIn Demo' : 'Watch Demo'}
            </button>
            
            <div className="flex items-center gap-2">
              {Array.isArray(project.github) ? (
                project.github.map((repo: any, idx: number) => (
                  <a 
                    key={idx}
                    href={typeof repo === 'string' ? repo : repo.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-[#8b5cf6] transition-all"
                    title={repo.label || "Source Code"}
                  >
                    <Github size={16} />
                    <span className="text-[10px] font-bold uppercase">{repo.label || (idx === 0 ? "BE" : "FE")}</span>
                  </a>
                ))
              ) : (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-[#8b5cf6] transition-all"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && isVideoFile && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-[#050505] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(217,70,239,0.2)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-[#d946ef] p-2 rounded-full backdrop-blur-md transition-all text-white"
              >
                <X size={20} />
              </button>
              <video className="w-full h-full object-contain" controls autoPlay src={project.videoUrl} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}