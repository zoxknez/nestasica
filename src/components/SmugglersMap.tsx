import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMap, FaMapMarkerAlt, FaCar, FaDollarSign, FaClock, FaPhone } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Location {
  id: number
  name: string
  status: 'empty' | 'huge-queue' | 'active' | 'legend'
  color: string
  icon: string
  price: number
  queue: number
  available: number
  x: number
  y: number
  phone?: string
  description: string
}

const SmugglersMap = () => {
  const [locations, setLocations] = useState<Location[]>([
    { 
      id: 1,
      name: 'NIS Pumpa - Beograd', 
      status: 'empty', 
      color: 'text-red-500', 
      icon: '🔴',
      price: 0,
      queue: 0,
      available: 0,
      x: 45,
      y: 35,
      description: 'Potpuno prazna već 3 dana'
    },
    { 
      id: 2,
      name: 'OMV - Novi Sad', 
      status: 'huge-queue', 
      color: 'text-yellow-500', 
      icon: '🟡',
      price: 250,
      queue: 89,
      available: 500,
      x: 35,
      y: 25,
      description: 'Red dug 2km, čekanje ~6h'
    },
    { 
      id: 3,
      name: 'Granica Rumunija - Pumpaj', 
      status: 'active', 
      color: 'text-green-500', 
      icon: '🟢',
      price: 380,
      queue: 15,
      available: 2000,
      x: 75,
      y: 20,
      phone: '+381 69 123 4567',
      description: 'Aktivna Pumpaj lokacija, brza isporuka'
    },
    { 
      id: 4,
      name: 'Misteriozna pumpa - Vršac', 
      status: 'legend', 
      color: 'text-purple-500', 
      icon: '⭐',
      price: 200,
      queue: 0,
      available: 9999,
      x: 70,
      y: 50,
      description: 'Niko ne zna kako, ali uvek imaju...'
    },
    { 
      id: 5,
      name: 'Granica Bugarska', 
      status: 'active', 
      color: 'text-green-500', 
      icon: '🟢',
      price: 420,
      queue: 8,
      available: 1500,
      x: 65,
      y: 70,
      phone: '+381 64 987 6543',
      description: 'Pumpaj nudi brzu isporuku'
    },
    { 
      id: 6,
      name: 'Granica Makedonija', 
      status: 'active', 
      color: 'text-green-500', 
      icon: '🟢',
      price: 400,
      queue: 12,
      available: 1800,
      x: 50,
      y: 80,
      phone: '+381 63 555 8888',
      description: 'Proveren Pumpaj kanal'
    },
  ])

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  // Simulacija real-time ažuriranja
  useEffect(() => {
    const interval = setInterval(() => {
      setLocations(prevLocations => 
        prevLocations.map(loc => ({
          ...loc,
          price: loc.status === 'active' ? loc.price + Math.floor(Math.random() * 20) - 10 : loc.price,
          queue: Math.max(0, loc.queue + Math.floor(Math.random() * 10) - 5),
          available: Math.max(0, loc.available + Math.floor(Math.random() * 200) - 100),
        }))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const legend = [
    { icon: '🔴', text: 'Prazna pumpa', color: 'text-red-500', imgClass: 'grayscale opacity-50' },
    { icon: '🟡', text: 'Ogromni red', color: 'text-yellow-500', imgClass: 'sepia' },
    { icon: '🟢', text: 'Pumpaj aktivni', color: 'text-green-500', imgClass: 'brightness-110' },
    { icon: '⭐', text: 'Misteriozna pumpa', color: 'text-purple-500', imgClass: 'hue-rotate-60' },
  ]

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    toast.success(`Prikazujem detalje: ${location.name}`, { icon: '📍' })
  }

  return (
    <section id="map" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 flex items-center justify-center gap-3">
            <FaMap className="text-blue-400" />
            INTERAKTIVNA PUMPAJ MAPA 2025
          </h2>
          <p className="text-lg text-gray-300">Pronađi najbližu Pumpaj tačku... ili ne</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Legenda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-crisis-red" />
              Legenda
            </h3>
            <div className="space-y-3">
              {legend.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="w-8 h-8 relative flex-shrink-0">
                    <img 
                      src="/pumpaj-128.png" 
                      alt="Pumpa" 
                      className={`w-full h-full object-contain ${item.imgClass}`}
                    />
                  </div>
                  <span className={`${item.color} font-semibold`}>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-900/30 rounded-lg border-2 border-red-500">
              <p className="text-sm text-yellow-300">
                ⚠️ <strong>UPOZORENJE:</strong> Ovo je satiričan sajt! 
                Pumpaj ne postoji :)
              </p>
            </div>
          </motion.div>

          {/* "Mapa" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl 
                     border-4 border-white/20 p-8 relative overflow-hidden min-h-[400px]
                     flex items-center justify-center"
          >
            {/* Fake mapa sa tačkama */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Fake konture Srbije */}
                <path
                  d="M 100 50 L 150 40 L 200 60 L 250 50 L 280 80 L 290 120 L 280 160 L 260 200 L 220 240 L 180 250 L 140 240 L 100 200 L 80 150 L 90 100 Z"
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Lokacije */}
            <div className="relative z-10 w-full h-full">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.3 }}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                  }}
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="relative group">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: selectedLocation?.id === location.id ? [1, 1.2, 1] : 1,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="w-12 h-12 drop-shadow-2xl relative"
                    >
                      <img 
                        src="/pumpaj-128.png" 
                        alt="Pumpa" 
                        className={`w-full h-full object-contain ${
                          location.status === 'empty' ? 'grayscale opacity-50' : 
                          location.status === 'huge-queue' ? 'sepia' : 
                          location.status === 'active' ? 'brightness-110' : 
                          'hue-rotate-60'
                        }`}
                      />
                      {/* Status indicator badge */}
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        location.status === 'empty' ? 'bg-red-500' : 
                        location.status === 'huge-queue' ? 'bg-yellow-500' : 
                        location.status === 'active' ? 'bg-green-500 animate-pulse' : 
                        'bg-purple-500'
                      }`} />
                    </motion.div>
                    
                    {/* Pulse efekat za aktivne lokacije */}
                    {location.status === 'active' && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-500 -z-10"
                        initial={{ scale: 0.5, opacity: 0.7 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    
                    {/* Glow effect za legend status */}
                    {location.status === 'legend' && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-500 -z-10"
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    
                    {/* Quick Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                                  opacity-0 group-hover:opacity-100 transition-opacity
                                  bg-black/90 text-white px-3 py-2 rounded-lg text-xs
                                  whitespace-nowrap pointer-events-none z-50">
                      <div className="font-bold">{location.name}</div>
                      {location.status === 'active' && (
                        <div className="text-green-400">{location.price} din/l</div>
                      )}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2
                                    w-0 h-0 border-l-4 border-r-4 border-t-4
                                    border-l-transparent border-r-transparent border-t-black/90" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Overlay tekst */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 italic text-sm"
              >
                [Ovde bi bila prava mapa, ali smo potrošili sav benzin za server] 🗺️
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Selected Location Details */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="mt-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl 
                       border-4 border-blue-500 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-300">
                  {selectedLocation.icon} {selectedLocation.name}
                </h3>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-white hover:text-red-400 text-2xl transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-4 italic">{selectedLocation.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-black/30 p-3 rounded-lg text-center">
                  <FaDollarSign className="text-2xl text-green-400 mx-auto mb-1" />
                  <div className="text-sm text-gray-400">Cena</div>
                  <div className="text-xl font-bold text-green-400">
                    {selectedLocation.price > 0 ? `${selectedLocation.price} din/l` : 'N/A'}
                  </div>
                </div>

                <div className="bg-black/30 p-3 rounded-lg text-center">
                  <FaCar className="text-2xl text-yellow-400 mx-auto mb-1" />
                  <div className="text-sm text-gray-400">Red</div>
                  <div className="text-xl font-bold text-yellow-400">
                    {selectedLocation.queue} auta
                  </div>
                </div>

                <div className="bg-black/30 p-3 rounded-lg text-center">
                  <FaClock className="text-2xl text-blue-400 mx-auto mb-1" />
                  <div className="text-sm text-gray-400">Dostupno</div>
                  <div className="text-xl font-bold text-blue-400">
                    {selectedLocation.available}L
                  </div>
                </div>

                {selectedLocation.phone && (
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <FaPhone className="text-2xl text-purple-400 mx-auto mb-1" />
                    <div className="text-sm text-gray-400">Kontakt</div>
                    <div className="text-sm font-bold text-purple-400">
                      {selectedLocation.phone}
                    </div>
                  </div>
                )}
              </div>

              {selectedLocation.status === 'active' && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center"
                >
                  <a href="#buy-from-smuggler">
                    <button className="crisis-button w-full text-xl">
                      💰 KUPI OVDE - {selectedLocation.price} din/l
                    </button>
                  </a>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Update Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-black/40 p-6 rounded-xl border-2 border-yellow-500"
        >
          <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🔴
            </motion.span>
            LIVE: Izveštaji sa terena
          </h3>
          <div className="space-y-2 text-sm max-h-40 overflow-y-auto">
            {locations.map((loc, index) => (
              <motion.p
                key={loc.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 p-2 hover:bg-white/5 rounded transition-colors"
              >
                <span className={loc.color}>●</span>{' '}
                <strong>{new Date().getHours()}:{new Date().getMinutes()}</strong> - {loc.name}:{' '}
                {loc.status === 'active' ? `${loc.price} din/l, ${loc.available}L dostupno` : 
                 loc.status === 'huge-queue' ? `Red ${loc.queue} auta` : 
                 'Prazno'}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SmugglersMap
