import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { PROFILE } from '../constants/profile';

export default function Achievements() {
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
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors">
                <h4 className="font-bold text-white">{cert.title}</h4>
                <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}