import { motion } from 'framer-motion';
import { FileText, Linkedin, Download } from 'lucide-react';
import { PROFILE } from '../constants/profile';

export default function DocumentSection() {
  return (
    <section id="documents" className="py-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Docs</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROFILE.documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#8b5cf6]/20 rounded-2xl text-[#8b5cf6]">
                    <FileText size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                    {doc.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d946ef] transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {/* Download Button */}
                <a
                  href={doc.link}
                  download
                  className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2.5 rounded-xl transition-all"
                >
                  <Download size={14} className="text-[#8b5cf6]" /> 
                  Download PDF
                </a>

                {/* LinkedIn View Button */}
                <a
                  href={doc.linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-white bg-[#0077B5]/20 hover:bg-[#0077B5]/40 border border-[#0077B5]/30 px-4 py-2.5 rounded-xl transition-all"
                >
                  <Linkedin size={14} className="text-[#0077B5]" /> 
                  View on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}