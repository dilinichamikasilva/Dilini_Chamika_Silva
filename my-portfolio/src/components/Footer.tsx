import { PROFILE } from '../constants/profile';
import { Mail, Github, Linkedin, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#080808] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Profile & Bio */}
        <div className="md:col-span-1 space-y-6">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="relative group">
            {/* Pink Glow Effect behind photo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <img 
                src="src/assets/footer.jpg"
                alt={PROFILE.name} 
                className="relative w-24 h-24 rounded-2xl border-2 border-[#d946ef]/50 object-cover shadow-2xl"
            />
            </div>

            <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white tracking-tight">{PROFILE.name}</h3>
            <p className="text-[#8b5cf6] font-medium">{PROFILE.role}</p>
            {/* Added location here as well for better clarity near the name */}
            <div className="flex items-center gap-2 text-gray-500 text-xs mt-2">
                <MapPin size={12} /> Colombo, Sri Lanka
            </div>
            </div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Building digital experiences with precision and passion. Let's create something amazing together.
        </p>
        </div>

          {/* 2. Quick Links & Contact */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {['About', 'Skills', 'Projects', 'Certifications'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-[#d946ef] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Socials</h4>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-[#d946ef] flex items-center gap-2 text-sm transition-colors">
                  <Mail size={16} /> Email
                </a>
                <a href={PROFILE.github} target="_blank" className="text-gray-400 hover:text-[#d946ef] flex items-center gap-2 text-sm transition-colors">
                  <Github size={16} /> GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" className="text-gray-400 hover:text-[#d946ef] flex items-center gap-2 text-sm transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* 3. Location & Map Preview */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Location</h4>
            <a 
              href="https://www.google.com/maps/dir//Colombo,+Sri+Lanka/data=!4m9!4m8!1m0!1m5!1m1!19sChIJA3B6D9FT4joRjYPTMk0uCzI!2m2!1d79.861243!2d6.9270786!3e0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl border border-white/10 aspect-video md:aspect-auto md:h-32"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 text-white text-xs font-medium">
                <MapPin size={14} className="text-[#d946ef]" />
                Colombo, Sri Lanka
              </div>
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=6.9271,79.8612&zoom=11&size=400x200&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0x212121&key=YOUR_API_KEY_HERE" 
                alt="Location Map" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          </div>
        </div>

        {/* Bottom Copyright and Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs italic">
            © {new Date().getFullYear()} {PROFILE.name}. Designed with ❤️ using React & TypeScript.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#d946ef]/10 border border-white/10 rounded-full text-gray-400 hover:text-[#d946ef] text-xs font-bold transition-all"
          >
            BACK TO TOP <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}