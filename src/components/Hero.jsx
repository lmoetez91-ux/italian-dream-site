import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">
              Futuristic Education Platform
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Étudier en Italie
            </span>
            <span className="block text-white text-4xl md:text-5xl mt-4">
              est possible, et nous vous guidons
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Transformez votre rêve académique en réalité avec notre 
            <span className="text-cyan-400 font-semibold"> accompagnement intelligent</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            {/* Commencer mon parcours button - links to contact page */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-semibold text-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  Commencer mon parcours
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* Explorer les universités button - links to universities page */}
            <Link to="/universities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card rounded-xl text-white font-semibold text-lg"
              >
                Explorer les universités
              </motion.button>
            </Link>
          </div>

          {/* Stats - Removed "Universités partenaires" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: '98%', label: 'Taux de réussite' },
              { value: '5+', label: "Années d'expérience" },
              { value: '2000+', label: 'Étudiants guidés' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;