import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, X, ExternalLink } from 'lucide-react';
import { PROFILE } from '../constants/profile';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="py-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <CheckCircle className="text-cyan-400" /> Soft Skills
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {PROFILE.softSkills.map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-gray-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Award className="text-purple-400" /> Certifications
          </h3>
          <div className="space-y-4">
            {PROFILE.certifications.map((cert, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCert(cert)}
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SMALLER PREVIEW MODAL --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              /* Changed max-w-4xl to max-w-2xl for a smaller preview */
              className="relative w-full max-w-2xl bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/5"
            >
              {/* Compact Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div className="pr-8">
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight">{selectedCert.title}</h3>
                  <p className="text-xs text-gray-400">{selectedCert.issuer}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scaled Image Container */}
              <div className="p-4 bg-[#050505] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent">
                <img 
                  src={selectedCert.imageUrl || `/certifications/${selectedCert.title.replace(/\s+/g, '-').toLowerCase()}.png`} 
                  alt={selectedCert.title} 
                  /* Added max-h for vertical control */
                  className="max-w-full max-h-[60vh] object-contain rounded-md shadow-inner border border-white/5"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/1a1a1a/purple?text=Preview+Coming+Soon";
                  }}
                />
              </div>

              {/* Compact Footer */}
              <div className="p-3 text-center border-t border-white/5 bg-white/5">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                  Issue Date: {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}