import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Building, Globe, Flag } from 'lucide-react';

const Centers = () => {
  const centers = [
    {
      city: 'Tunis',
      address: '67 Av. Alain Savary, Tunis, Tunisia, 1003',
      phone: '+216 21 210 213',
      hours: 'Lun-Ven: 9h-18h | Sam: 9h-13h',
      type: 'Centre Principale',
      color: 'from-green-500 to-emerald-500'
    },
    {
      city: 'Sfax',
      address: 'Ennassria, Immeuble Zaphir, Bloc B, 7ème étage',
      phone: '+216 21 210 213',
      hours: 'Lun-Ven: 9h-18h | Sam: 9h-13h',
      type: 'Bureau',
      color: 'from-white to-gray-100'
    },
    {
      city: 'Kairouan',
      address: 'Convention avec Centre Tamwil Visa',
      phone: '+216 21 210 213',
      hours: 'Sur rendez-vous',
      type: 'Bureau',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <div className="pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 rounded-full blur-3xl"
      />

      <section className="container mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 border border-green-500/30"
          >
            <Building className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Nos Implantations
            </span>
            <Flag className="w-5 h-5 text-red-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Nos Centres
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nous ne sommes pas juste un site web. Nos <span className="text-green-400 font-semibold">centres physiques</span> sont là pour 
            vous accueillir et vous accompagner <span className="text-white font-semibold">personnellement</span> dans votre projet.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-8 px-8 py-4 glass-card rounded-2xl mb-12 border border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-400" />
                3
              </div>
              <div className="text-sm text-gray-400">Centres</div>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <Clock className="w-6 h-6 text-white" />
                6j/7
              </div>
              <div className="text-sm text-gray-400">Disponibilité</div>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <Phone className="w-6 h-6 text-red-400" />
                24/7
              </div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {centers.map((center, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative glass-card rounded-3xl p-8 border border-white/10 backdrop-blur-xl h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${center.color} p-1`}>
                      <div className="w-full h-full rounded-lg bg-gray-900/90 flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-white">{center.city}</h3>
                        <div className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${center.color} bg-opacity-20`}>
                          {center.type}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{center.hours}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Adresse</div>
                        <div className="text-gray-300">{center.address}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Téléphone</div>
                        <div className="text-gray-300 font-semibold">{center.phone}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="text-center">
                      <Link to="/contact">
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 via-white/20 to-red-500/20 text-white font-semibold hover:bg-opacity-30 transition-all duration-300 border border-white/10 hover:border-green-500/30 group-hover:scale-105">
                          Prendre rendez-vous
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 rounded-full border-2 border-transparent border-t-green-500 border-r-white border-b-red-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-red-500/5" />
          
          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-8">
              {[MapPin, Building, Globe, Phone].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 via-white/20 to-red-500/20 flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                Besoin d'un accompagnement personnalisé ?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nos conseillers sont disponibles dans tous nos centres pour vous rencontrer,
              analyser votre projet et vous proposer la meilleure stratégie pour vos études en Italie.
            </p>
            
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all flex items-center justify-center gap-3 mx-auto">
                Contacter nos conseillers
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <motion.div
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-1/4 left-10 w-6 h-6 rounded-full bg-green-400/20 blur-sm"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 1 }}
        className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-red-400/20 blur-sm"
      />
    </div>
  );
};

export default Centers;