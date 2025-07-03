
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { motion } from 'framer-motion';

export function OrbitVisualization() {
  const revealRef = useScrollReveal();

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 pt-[0px] pb-[0px]">
      <div className="container mx-auto px-6">
        
        {/* ORBIT Beschreibung - optimierte visuelle Hierarchie */}
        <motion.div 
          className="text-center mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-[32px] p-12 border border-gray-200/30 dark:border-gray-700/30 shadow-lg">
            <p className="text-xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed font-medium">
              Der <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-normal text-[#000000]">visibleai ORBIT</span> ist ein wissenschaftlich fundiertes 5-Layer-Framework, das auf aktueller KI-Forschung und Computerlinguistik basiert.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Methodische Grundlage
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Es bildet die methodische Grundlage unseres AI-Visibility Accelerators und definiert präzise, welche technischen und inhaltlichen Faktoren entscheidend sind.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Strategische Optimierung
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Jeder der 5 ORBIT-Layer adressiert spezifische Optimierungsebenen – von der technischen Infrastruktur bis zur strategischen Governance.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                Damit Ihr E-Commerce-Business in ChatGPT, Amazon Rufus und anderen AI-Systemen gefunden wird.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-12 shadow-2xl mt-[93px] mb-[93px] pt-[50px] pb-[50px]">
        
        {/* ORBIT Logo mit visibleai unten bündig */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-end justify-center space-x-4">
            <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
              ORBIT
            </div>
            <div className="flex items-center space-x-1 text-sm mb-2">
              <span className="text-white/60 font-light tracking-wide">by</span>
              <div className="flex items-center space-x-1">
                <span className="text-white/80 font-medium tracking-wide">VISIBLE</span>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ORBIT Visualization */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center mb-16">
          
          {/* Outcome & Adaptation Loop - Pink Halo nur außerhalb des äußeren Orbits */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-25 z-0"
            style={{
              background: 'radial-gradient(circle, transparent 0%, transparent 70%, rgba(244, 114, 182, 0.3) 75%, rgba(236, 72, 153, 0.2) 85%, rgba(219, 39, 119, 0.1) 95%, transparent 100%)',
              filter: 'blur(25px)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
          
          {/* Central AI Core - diffuser ohne Text */}
          <motion.div
            className="absolute w-12 h-12 rounded-full z-20"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 60%, rgba(59, 130, 246, 0.2) 100%)',
              filter: 'blur(2px)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* Orbit Rings */}
          {[
            { radius: 60, opacity: 0.3 },
            { radius: 100, opacity: 0.3 },
            { radius: 140, opacity: 0.3 },
            { radius: 180, opacity: 0.3 },
            { radius: 220, opacity: 0.3 }
          ].map((ring, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full border border-white/30"
              style={{
                width: `${ring.radius * 2}px`,
                height: `${ring.radius * 2}px`,
                opacity: ring.opacity,
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: ring.opacity, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.15 + 0.9 }}
            />
          ))}

          {/* Korrekt positionierte Orbit-Punkte - jeder Punkt auf seinem zugewiesenen Orbit */}
          {[
            { color: '#3b82f6', radius: 60, angle: 0, label: '1 Technical Readiness' }, // blau - innerster Kreis
            { color: '#22c55e', radius: 100, angle: 72, label: '2 Content & Knowledge' }, // grün - zweiter Kreis
            { color: '#a855f7', radius: 140, angle: 144, label: '3 Conversation Fit' }, // lila - dritter Kreis
            { color: '#f59e0b', radius: 180, angle: 216, label: '4 Entity Signals' }, // orange-gelb - vierter Kreis
            { color: '#ef4444', radius: 220, angle: 288, label: '5 Gouvernance' } // rot - äußerster Kreis
          ].map((orbit, orbitIndex) => {
            // Korrekte Positionsberechnung für jeden Orbit-Punkt
            const x = Math.cos((orbit.angle * Math.PI) / 180) * orbit.radius;
            const y = Math.sin((orbit.angle * Math.PI) / 180) * orbit.radius;
            
            return (
              <motion.div
                key={`orbit-point-${orbitIndex}`}
                className="absolute w-6 h-6 rounded-full z-30 shadow-lg"
                style={{
                  left: `calc(50% + ${x}px - 12px)`,
                  top: `calc(50% + ${y}px - 12px)`,
                  backgroundColor: orbit.color,
                  opacity: 0.75,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 0.6, delay: orbitIndex * 0.15 + 1.5 }}
              />
            );
          })}

          {/* Kleine Punkte auf Orbit-Ringen - gleichmäßig verteilt */}
          {[
            { radius: 60, color: '#3b82f6', dots: 8, mainAngle: 0 }, // blau - Technical Readiness
            { radius: 100, color: '#22c55e', dots: 10, mainAngle: 72 }, // grün - Content & Knowledge
            { radius: 140, color: '#a855f7', dots: 12, mainAngle: 144 }, // lila - Conversation Fit
            { radius: 180, color: '#f59e0b', dots: 14, mainAngle: 216 }, // orange-gelb - Entity Signals
            { radius: 220, color: '#ef4444', dots: 16, mainAngle: 288 } // rot - Gouvernance
          ].map((ring, ringIndex) => 
            Array.from({ length: ring.dots }).map((_, dotIndex) => {
              const angle = (dotIndex * (360 / ring.dots));
              // Hauptpunkt auslassen
              const skipDot = Math.abs(angle - ring.mainAngle) < 20 || 
                              Math.abs(angle - ring.mainAngle - 360) < 20 || 
                              Math.abs(angle - ring.mainAngle + 360) < 20;
              
              if (skipDot) return null;
              
              const x = Math.cos((angle * Math.PI) / 180) * ring.radius;
              const y = Math.sin((angle * Math.PI) / 180) * ring.radius;
              
              return (
                <motion.div
                  key={`dot-${ringIndex}-${dotIndex}`}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    left: `calc(50% + ${x}px - 3px)`,
                    top: `calc(50% + ${y}px - 3px)`,
                    backgroundColor: ring.color,
                    opacity: 0.4,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: ringIndex * 0.1 + dotIndex * 0.02 + 2 }}
                />
              );
            }).filter(Boolean)
          )}
        </div>

        {/* 5 ORBIT Cards - unten mit Liquid Glass Effekt */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          {[
            { title: 'Technical Readiness', hex: '#3b82f6' },
            { title: 'Content & Knowledge', hex: '#22c55e' },
            { title: 'Conversation Fit', hex: '#a855f7' },
            { title: 'Entity Signals', hex: '#f59e0b' },
            { title: 'Gouvernance', hex: '#ef4444' }
          ].map((orbit, index) => (
            <motion.div
              key={index}
              className="bg-white/8 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/15 shadow-lg hover:bg-white/12 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 2.7 }}
            >
              <div 
                className="w-3 h-3 rounded-full mx-auto mb-4"
                style={{ backgroundColor: orbit.hex }}
              ></div>
              <h3 className="text-xs font-medium text-white/85 tracking-wide">
                {orbit.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>


        </div>
      </div>
    </div>
  );
}
