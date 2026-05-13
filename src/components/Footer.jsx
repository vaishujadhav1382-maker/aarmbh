import React from 'react';
import { Globe, Share2, ThumbsUp, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-light py-12 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <img src="/aarmbh-logo.png" alt="Logo" className="w-24 h-24 rounded-full border-2 border-white/30 shadow-xl" />
              <h3 className="text-3xl font-heading font-bold text-secondary">Hotel Aarmbh</h3>
            </div>
            <p className="text-gray-300 max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" title="Facebook">
                <ThumbsUp size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" title="Instagram">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors" title="Website">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-heading font-semibold text-secondary">{t('nav.menu') || 'Quick Links'}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-secondary transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#menu" className="hover:text-secondary transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#gallery" className="hover:text-secondary transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-heading font-semibold text-secondary">{t('nav.contact')}</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Hotel Aarmbh, Chipari, Maharashtra 416101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-accent flex-shrink-0 mt-1" size={18} />
                <span>Mon - Sun: 11:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-light text-center text-gray-400 text-sm flex flex-col items-center justify-center space-y-2">
          <p>&copy; {new Date().getFullYear()} Hotel Aarmbh. {t('footer.rights')}</p>
          <p className="font-medium text-secondary-light">अस्सल चव, आपुलकीची सेवा!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
