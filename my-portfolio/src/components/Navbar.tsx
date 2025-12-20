import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent"
        >
          DCS.
        </motion.span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {['About', 'Projects', 'Certifications'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#d946ef] transition-colors uppercase tracking-widest text-xs">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}