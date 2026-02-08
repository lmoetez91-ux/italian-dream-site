import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Flag, Globe, Sparkles } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Approche', path: '/approach' },
    { name: 'Nos Valeurs', path: '/values' },
    { name: 'Processus', path: '/process' },
    { name: 'Nos Centres', path: '/centers' },
    { name: 'Explorer Universités', path: '/universities' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Formation langue italienne',
    'Orientation universitaire',
    'Admission garantie',
    'Assistance visa étudiant',
    'Bourse d\'étude',
    'Logement & Foyer',
    'Support post-arrivée'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 via-white to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-2xl">ID</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                  Italien Dream
                </h2>
                <div className="flex items-center gap-1">
                  <Flag className="w-3 h-3 text-green-400" />
                  <span className="text-sm text-gray-500">Votre pont vers l'Italie</span>
                  <Flag className="w-3 h-3 text-red-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Votre cabinet d'accompagnement pour réussir vos études en Italie. 
              Nous transformons les rêves académiques en réalité depuis plus de 5 ans.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100091785491169"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all border border-white/10 hover:border-blue-500"
              >
                <Facebook size={22} />
              </a>
              <a
                href="mailto:contact@italiendream.com"
                className="group w-12 h-12 rounded-full bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-white hover:to-gray-200 transition-all border border-white/10 hover:border-white"
              >
                <Mail size={22} />
              </a>
              <a
                href="tel:+21621210213"
                className="group w-12 h-12 rounded-full bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-600 transition-all border border-white/10 hover:border-red-500"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-green-400" />
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-green-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
              <Globe className="w-5 h-5 text-white" />
              Nos Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2 cursor-pointer">
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-green-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-400" />
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <a 
                    href="tel:+21621210213" 
                    className="text-lg font-medium text-white hover:text-green-400 transition-colors block"
                  >
                    +216 21 210 213
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Support 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-white to-gray-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <a 
                    href="mailto:contact@italiendream.com" 
                    className="text-white hover:text-white transition-colors block"
                  >
                    italiandream48@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">67 Av. Alain Savary</p>
                  <p className="text-gray-400 text-sm">Tunis, Tunisia 1003</p>
                  <p className="text-sm text-gray-500 mt-1">Centre Principale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-b from-gray-900 to-black">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2024 Italien Dream. Tous droits réservés.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Votre réussite académique en Italie est notre mission
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-green-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-red-400 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-semibold mb-4">Téléchargez notre App</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-medium hover:shadow-xl hover:shadow-green-500/25 transition-all flex items-center gap-3">
                <span>App Store</span>
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl text-white font-medium hover:shadow-xl hover:shadow-red-500/25 transition-all flex items-center gap-3">
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;