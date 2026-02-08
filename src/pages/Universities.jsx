import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, Users, BookOpen, X, ChevronRight, ZoomIn, Flag, Sparkles, Award } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle map zoom when university is selected
function MapZoom({ selectedUni }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedUni) {
      map.flyTo(selectedUni.coordinates, 12, {
        duration: 1.5
      });
    }
  }, [selectedUni, map]);
  
  return null;
}

// Custom Italian-themed icon creator
const createCustomIcon = (colorClass) => {
  return L.divIcon({
    html: `
      <div class="relative w-14 h-14 rounded-full ${colorClass} flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
        <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div class="absolute -bottom-1 w-3 h-3 bg-white transform rotate-45"></div>
      </div>
    `,
    iconSize: [56, 56],
    iconAnchor: [28, 56],
    popupAnchor: [0, -56],
    className: 'custom-marker'
  });
};

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUni, setSelectedUni] = useState(null);
  const [hoveredUni, setHoveredUni] = useState(null);
  const mapRef = useRef();

  const universities = [
    {
      id: 1,
      name: 'Université de Bologne',
      city: 'Bologne',
      ranking: '#1 Italie',
      students: '80 000+',
      fields: ['Droit', 'Médecine', 'Ingénierie'],
      description: 'Plus ancienne université du monde occidental, fondée en 1088. Réputée pour l\'excellence en sciences humaines et sciences.',
      tuition: '900 € - 4 000 €/an',
      deadline: '31 mai',
      requirements: 'Baccalauréat, Italien B2',
      logo: '🎓',
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      colorClass: 'from-green-500 to-emerald-500',
      coordinates: [44.4949, 11.3426]
    },
    {
      id: 2,
      name: 'Politecnico di Milano',
      city: 'Milan',
      ranking: '#1 Ingénierie Italie',
      students: '45 000+',
      fields: ['Ingénierie', 'Architecture', 'Design'],
      description: 'Université technique leader en Italie, classée parmi les meilleures écoles d\'ingénieurs en Europe.',
      tuition: '3 500 € - 4 000 €/an',
      deadline: '30 juin',
      requirements: 'Baccalauréat, Anglais/Italien B2',
      logo: '⚙️',
      color: 'bg-gradient-to-br from-white to-gray-100',
      colorClass: 'from-white to-gray-100',
      coordinates: [45.4642, 9.1900]
    },
    {
      id: 3,
      name: 'Université Sapienza de Rome',
      city: 'Rome',
      ranking: '#2 Italie',
      students: '110 000+',
      fields: ['Médecine', 'Sciences Humaines', 'Sciences'],
      description: 'L\'une des plus grandes universités européennes avec d\'excellentes installations de recherche.',
      tuition: '1 000 € - 3 000 €/an',
      deadline: '15 juillet',
      requirements: 'Baccalauréat, Italien B1',
      logo: '🏛️',
      color: 'bg-gradient-to-br from-red-500 to-rose-500',
      colorClass: 'from-red-500 to-rose-500',
      coordinates: [41.9028, 12.4964]
    },
    {
      id: 4,
      name: 'Université de Florence',
      city: 'Florence',
      ranking: 'Top 5 Italie',
      students: '50 000+',
      fields: ['Arts', 'Architecture', 'Médecine'],
      description: 'Située au cœur de la Renaissance, excellente pour les arts et les sciences humaines.',
      tuition: '800 € - 2 500 €/an',
      deadline: '30 juin',
      requirements: 'Baccalauréat, Italien B1',
      logo: '🎨',
      color: 'bg-gradient-to-br from-green-600 to-emerald-600',
      colorClass: 'from-green-600 to-emerald-600',
      coordinates: [43.7696, 11.2558]
    },
    {
      id: 5,
      name: 'Université de Naples Federico II',
      city: 'Naples',
      ranking: 'Top 10 Italie',
      students: '80 000+',
      fields: ['Médecine', 'Ingénierie', 'Sciences'],
      description: 'Troisième plus ancienne université d\'Italie avec des programmes de recherche solides.',
      tuition: '500 € - 2 500 €/an',
      deadline: '31 juillet',
      requirements: 'Baccalauréat, Italien B1',
      logo: '🍕',
      color: 'bg-gradient-to-br from-white to-gray-200',
      colorClass: 'from-white to-gray-200',
      coordinates: [40.8518, 14.2681]
    },
    {
      id: 6,
      name: 'Université Polytechnique de Turin',
      city: 'Turin',
      ranking: '#2 Ingénierie Italie',
      students: '35 000+',
      fields: ['Ingénierie', 'Architecture', 'Automobile'],
      description: 'Excellente pour les programmes d\'ingénierie automobile et industrielle.',
      tuition: '2 500 € - 3 500 €/an',
      deadline: '15 juin',
      requirements: 'Baccalauréat, Anglais/Italien B2',
      logo: '🚗',
      color: 'bg-gradient-to-br from-red-600 to-rose-600',
      colorClass: 'from-red-600 to-rose-600',
      coordinates: [45.0703, 7.6869]
    }
  ];

  const filteredUnis = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const MapComponent = () => (
    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <MapContainer
        center={[42.5, 12.5]}
        zoom={6}
        className="h-full w-full rounded-3xl"
        scrollWheelZoom={true}
        whenCreated={mapInstance => { mapRef.current = mapInstance; }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapZoom selectedUni={selectedUni} />
        
        {universities.map((uni) => (
          <Marker
            key={uni.id}
            position={uni.coordinates}
            icon={createCustomIcon(uni.colorClass)}
            eventHandlers={{
              click: () => {
                setSelectedUni(uni);
                if (mapRef.current) {
                  mapRef.current.flyTo(uni.coordinates, 13, {
                    duration: 1.5
                  });
                }
              },
            }}
          >
            <Popup>
              <div className="p-3 min-w-[200px]">
                <h3 className="font-bold text-lg text-green-600 mb-1">{uni.name}</h3>
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{uni.city}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    {uni.ranking}
                  </span>
                  <span className="text-xs text-gray-500">{uni.students}</span>
                </div>
                <button 
                  onClick={() => {
                    setSelectedUni(uni);
                    if (mapRef.current) {
                      mapRef.current.flyTo(uni.coordinates, 13, {
                        duration: 1.5
                      });
                    }
                  }}
                  className="w-full px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded text-sm font-medium hover:from-green-600 hover:to-emerald-600 transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    <ZoomIn className="w-3 h-3" />
                    Voir détails
                  </div>
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Overlay Controls */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-green-500/30 z-[1000]">
        <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Flag className="w-4 h-4 text-green-600" />
          Carte Interactive des Universités Italiennes
        </h3>
        <p className="text-xs text-gray-600 mt-1">Cliquez sur un marqueur pour explorer</p>
      </div>

      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-red-500/30 z-[1000]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 via-white to-red-500" />
            <span className="text-sm font-medium text-gray-800">Universités Italiennes</span>
          </div>
          <div className="text-xs text-gray-600">
            {universities.length} universités prestigieuses
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 rounded-full blur-3xl"
      />

      {/* Header */}
      <section className="container mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 border border-green-500/30"
          >
            <Flag className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Excellence Académique Italienne
            </span>
            <Award className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Explorer les Universités
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Découvrez les meilleures universités italiennes. Cliquez sur les marqueurs de la carte pour explorer les établissements d'enseignement supérieur.
          </p>
          
          {/* Disclaimer */}
          <div className="mb-6 p-6 rounded-2xl bg-gradient-to-r from-green-900/20 via-gray-900/20 to-red-900/20 border border-green-500/30">
            <p className="text-gray-300">
              <strong>Note :</strong> Cette page présente une sélection d'universités italiennes à titre d'exemple. 
              L'Italie compte plus de 90 établissements d'enseignement supérieur. Les informations affichées sont 
              à des fins de démonstration.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher des universités ou villes italiennes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-card rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 border border-white/10"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
          >
            <MapComponent />
          </motion.div>

          {/* Right Column - University List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {selectedUni ? (
              <AnimatePresence>
                <motion.div
                  key={selectedUni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass-card rounded-3xl p-8 border border-white/10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-14 h-14 rounded-xl ${selectedUni.color} flex items-center justify-center text-3xl`}>
                          {selectedUni.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{selectedUni.name}</h3>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{selectedUni.city}, Italie</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-sm">
                          {selectedUni.ranking}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <Users className="w-4 h-4" />
                          {selectedUni.students}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedUni(null);
                        if (mapRef.current) {
                          mapRef.current.flyTo([42.5, 12.5], 6, {
                            duration: 1.5
                          });
                        }
                      }}
                      className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-6">{selectedUni.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Programmes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedUni.fields.map((field, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-lg bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 text-gray-300 text-sm border border-white/10">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-400 mb-2">Frais de scolarité</h4>
                        <p className="text-white font-semibold">{selectedUni.tuition}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 mb-2">Date limite de candidature</h4>
                        <p className="text-white font-semibold">{selectedUni.deadline}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 mb-2">Exigences</h4>
                        <p className="text-gray-300 text-sm">{selectedUni.requirements}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700">
                    <p className="text-sm text-gray-400 text-center">
                      Cette université fait partie d'une sélection d'établissements italiens. 
                      Pour des informations réelles et à jour, visitez le site officiel de l'université.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {filteredUnis.length} Universités en Italie
                  </h3>
                  <span className="text-sm text-gray-400">
                    Exemples d'établissements
                  </span>
                </div>
                {filteredUnis.map(uni => (
                  <motion.div
                    key={uni.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      setSelectedUni(uni);
                      if (mapRef.current) {
                        mapRef.current.flyTo(uni.coordinates, 13, {
                          duration: 1.5
                        });
                      }
                    }}
                    className="glass-card rounded-xl p-6 cursor-pointer group hover:border hover:border-green-500/30 transition-all border border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${uni.color} flex items-center justify-center text-2xl`}>
                          {uni.logo}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-white group-hover:to-red-400 transition-all">
                            {uni.name}
                          </h4>
                          <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {uni.city}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {uni.ranking}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 border border-white/10"
        >
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-green-500/20 via-white/20 to-red-500/20 border border-white/10 mb-4">
              <Flag className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-white">
                Système Éducatif Italien
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              L'Enseignement Supérieur en Italie
            </h3>
            <p className="text-gray-400">
              Quelques faits sur l'enseignement supérieur en Italie
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '97', label: 'Universités Publiques', icon: '🏛️', color: 'from-green-500 to-emerald-500' },
              { value: '12', label: 'Universités Privées', icon: '🎓', color: 'from-white to-gray-200' },
              { value: '132', label: 'Programmes en Anglais', icon: '🇬🇧', color: 'from-red-500 to-rose-500' },
              { value: '1 900 €', label: 'Frais Moyens', icon: '💰', color: 'from-green-600 to-emerald-600' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Universities;