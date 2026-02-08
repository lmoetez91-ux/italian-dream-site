import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, Globe, Award } from 'lucide-react';

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [stats, setStats] = useState([
    { value: 0, target: 2000, label: 'Étudiants accompagnés', icon: <Users />, suffix: '+' },
    { value: 0, target: 98, label: 'Taux de réussite', icon: <Award />, suffix: '%' },
    { value: 0, target: 50, label: 'Universités partenaires', icon: <GraduationCap />, suffix: '+' },
    { value: 0, target: 15, label: "Années d'expérience", icon: <Globe />, suffix: '+' }
  ]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = stats.map(stat => stat.target / steps);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats(prev => prev.map((stat, index) => ({
        ...stat,
        value: Math.min(stat.value + increment[index], stat.target)
      })));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div ref={ref} className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-cyan-400">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {Math.floor(stat.value)}
                </span>
                <span className="text-cyan-400">{stat.suffix}</span>
              </div>
              
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;