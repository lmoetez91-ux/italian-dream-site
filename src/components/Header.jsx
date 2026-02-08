import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flag, Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Approche', path: '/approach' },
    { name: 'Nos Valeurs', path: '/values' },
    { name: 'Processus', path: '/process' },
    { name: 'Nos Centres', path: '/centers' },
    { name: 'Explorer Universités', path: '/universities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-nav fixed w-full z-50 backdrop-blur-xl border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 via-white to-red-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-black font-bold text-2xl">ID</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-xl border-2 border-transparent border-t-green-500 border-r-white border-b-red-500"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                Italien Dream
              </h1>
              <div className="flex items-center gap-1">
                <Flag className="w-3 h-3 text-green-400" />
                <p className="text-xs text-gray-400">Futuristic Education Pathways</p>
                <Flag className="w-3 h-3 text-red-400" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group"
                >
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-gray-400 hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-white to-red-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 via-white to-red-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              );
            })}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all flex items-center gap-2"
              >
                <span>Commencer</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-green-500/20 via-white/10 to-red-500/20 text-white border border-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-red-500"></div>
                    )}
                  </div>
                </Link>
              );
            })}
            
            <div className="pt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all flex items-center justify-center gap-3"
                >
                  Commencer mon parcours
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;