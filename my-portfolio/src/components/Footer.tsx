import { PROFILE } from '../constants/profile';
import { Mail, Github, Linkedin, MapPin, ArrowUp } from 'lucide-react';
import diliniImg from '../assets/dilini_1.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#080808] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Grid: Profiles vs Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Profile & Bio: Centers on mobile, left-aligned on tablet+ */}
          <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                
                <img 
                  src={diliniImg}
                  alt={PROFILE.name} 
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 border-[#d946ef]/50 object-cover shadow-2xl"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">{PROFILE.name}</h3>
                <p className="text-[#8b5cf6] font-medium">{PROFILE.role}</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-xs mt-2">
                  <MapPin size={12} /> Colombo, Sri Lanka
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building digital experiences with precision and passion. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links & Contact: 2 columns on most screens, stays 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 border-t border-white/5 pt-12 md:border-none md:pt-0">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-4 uppercase text-[10px] md:text-xs tracking-widest">Navigation</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {['About', 'Projects', 'Docs', 'Leadership', 'Certifications'].map((link) => (
                  <li key={link}>
                    {/* Using lowerCase for basic anchor links */}
                    <a href={`#${link.toLowerCase()}`} className="hover:text-[#d946ef] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-4 uppercase text-[10px] md:text-xs tracking-widest">Socials</h4>
              <div className="flex flex-col items-center md:items-start gap-4">
                <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-[#d946ef] flex items-center gap-2 text-sm transition-colors group">
                  <Mail size={16} className="group-hover:scale-110 transition-transform" /> 
                  <span className="hidden sm:inline">Email</span>
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d946ef] flex items-center gap-2 text-sm transition-colors group">
                  <Github size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d946ef] flex items-center gap-2 text-sm transition-colors group">
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Stacks vertically on mobile */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] md:text-xs italic text-center md:text-left">
            © {new Date().getFullYear()} {PROFILE.name}. Designed with ❤️ using React & TypeScript.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-[#d946ef]/10 border border-white/10 rounded-full text-gray-400 hover:text-[#d946ef] text-[10px] md:text-xs font-bold transition-all"
          >
            BACK TO TOP <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}