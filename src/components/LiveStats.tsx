import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaDollarSign, FaCar, FaFire } from 'react-icons/fa'

const LiveStats = () => {
  const [waitTime, setWaitTime] = useState({ hours: 18, minutes: 42 })
  const [blackPrice, setBlackPrice] = useState(450)
  const [carsInQueue, setCarsInQueue] = useState(15847)
  const [panicLevel, setPanicLevel] = useState(87)

  useEffect(() => {
    // Simulacija live update-a
    const interval = setInterval(() => {
      setWaitTime(prev => {
        let newMinutes = prev.minutes + Math.floor(Math.random() * 10) - 3
        let newHours = prev.hours
        if (newMinutes >= 60) {
          newHours++
          newMinutes = 0
        }
        if (newMinutes < 0) {
          newMinutes = 59
          newHours = Math.max(0, newHours - 1)
        }
        return { hours: newHours, minutes: newMinutes }
      })

      setBlackPrice(prev => prev + Math.floor(Math.random() * 30) - 10)
      setCarsInQueue(prev => prev + Math.floor(Math.random() * 200) - 80)
      setPanicLevel(prev => Math.min(100, Math.max(70, prev + Math.floor(Math.random() * 10) - 4)))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: FaClock,
      label: 'Prosečno Čekanje',
      value: `${waitTime.hours}h ${waitTime.minutes}m`,
      color: 'text-yellow-400',
      bgColor: 'from-yellow-600/20 to-orange-600/20'
    },
    {
      icon: FaDollarSign,
      label: 'Crno Tržište',
      value: `${blackPrice} din/l`,
      color: 'text-green-400',
      bgColor: 'from-green-600/20 to-emerald-600/20'
    },
    {
      icon: FaCar,
      label: 'Automobila u Redovima',
      value: carsInQueue.toLocaleString(),
      color: 'text-blue-400',
      bgColor: 'from-blue-600/20 to-cyan-600/20'
    },
    {
      icon: FaFire,
      label: 'Nivo Panike',
      value: `${panicLevel}%`,
      color: 'text-red-400',
      bgColor: 'from-red-600/20 to-pink-600/20'
    }
  ]

  return (
    <section id="live-stats" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-2 flex items-center justify-center gap-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="animate-pulse">🔴</span>
            LIVE STATISTIKE
            <span className="animate-pulse">🔴</span>
          </motion.h2>
          <p className="text-lg text-gray-300">Podaci se ažuriraju u realnom vremenu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${stat.bgColor} rounded-xl p-6 border-2 border-white/20 
                         shadow-xl card-hover`}
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`text-4xl ${stat.color}`} />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </motion.div>
              </div>
              <h3 className="text-sm text-gray-300 mb-2">{stat.label}</h3>
              <motion.p 
                className={`text-3xl font-bold ${stat.color}`}
                key={stat.value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 p-6 bg-red-900/30 rounded-xl border-2 border-red-500"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-center text-lg">
            <span className="font-bold text-warning-yellow">⚠️ UPOZORENJE:</span>
            {' '}Situacija se pogoršava svakim satom. Preporučujemo prelazak na alternativne vidove prevoza.
            <span className="ml-2">🚲🏃‍♂️🐴</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default LiveStats
