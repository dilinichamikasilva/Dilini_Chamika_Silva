import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Play, X } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const isVideoFile = project.videoUrl?.toLowerCase().endsWith('.mp4');
  const isExternalLink = project.videoUrl?.includes('linkedin.com') || !isVideoFile;

  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
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
        className="group bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] hover:bg-white/10 hover:border-[#8b5cf6]/50 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full"
      >
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d946ef]/10 blur-[80px] rounded-full group-hover:bg-[#d946ef]/20 transition-all" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Responsive Heading */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#d946ef] transition-colors flex items-center gap-2">
            {project.title}
            <span className="w-2 h-2 bg-[#d946ef] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          
          <p className="text-gray-400 mb-6 line-clamp-2 text-xs md:text-sm leading-relaxed">
            {project.description}
          </p>
          
 
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-8">
            {project.tech.slice(0, 5).map((t: string) => (
              <span key={t} className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 md:px-2.5 py-1 rounded-md text-gray-500 border border-white/5">
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[10px] text-gray-600 font-bold self-center">+{project.tech.length - 5}</span>
            )}
          </div>
          
 
          <div className="flex flex-row flex-wrap gap-3 items-center mt-auto">
            <button 
              onClick={handleDemoClick}

              className="flex items-center gap-2 px-4 md:px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs md:text-sm hover:bg-[#d946ef] hover:text-white transition-all transform active:scale-95 shadow-lg shadow-white/5"
            >
              <Play size={12} fill="currentColor" className="md:w-3.5 md:h-3.5" /> 
              {isExternalLink && !isVideoFile ? 'LinkedIn' : 'Watch Demo'}
            </button>
            
            <div className="flex items-center gap-2">
              {Array.isArray(project.github) ? (
                project.github.map((repo: any, idx: number) => (
                  <a 
                    key={idx}
                    href={typeof repo === 'string' ? repo : repo.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-[#8b5cf6] transition-all active:scale-95"
                    title={repo.label || "Source Code"}
                  >
                    <Github size={16} />
                    <span className="text-[9px] font-bold uppercase">{repo.label || (idx === 0 ? "BE" : "FE")}</span>
                  </a>
                ))
              ) : (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-[#8b5cf6] transition-all active:scale-95"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal - Enhanced for Mobile Viewports */}
      <AnimatePresence>
        {isOpen && isVideoFile && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-2 md:p-10 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-[#050505] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-2 right-2 md:top-4 md:right-4 z-[160] bg-black/50 hover:bg-[#d946ef] p-2 rounded-full backdrop-blur-md transition-all text-white"
              >
                <X size={18} />
              </button>
              <video 
                className="w-full h-full object-contain" 
                controls 
                autoPlay 
                playsInline 
                src={project.videoUrl} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}