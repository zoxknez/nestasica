import { motion } from 'framer-motion'
import { FaFire, FaExclamationCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="inline-block"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 flex items-center justify-center gap-4">
          <FaFire className="text-crisis-orange animate-pulse" />
          <span className="animate-blink">BREAKING NEWS!</span>
          <FaFire className="text-crisis-orange animate-pulse" />
        </h2>
      </motion.div>
      
      <motion.p 
        className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 px-2"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Benzin ponovo nestao! 🔥
      </motion.p>

      <motion.div 
        className="max-w-3xl mx-auto glass-effect rounded-2xl p-8 border-4 border-crisis-red"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
          <FaExclamationCircle className="text-2xl sm:text-3xl md:text-4xl text-warning-yellow animate-bounce flex-shrink-0" />
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-warning-yellow text-center">TRENUTNO STANJE: KRITIČNO</h3>
          <FaExclamationCircle className="text-2xl sm:text-3xl md:text-4xl text-warning-yellow animate-bounce flex-shrink-0" />
        </div>
        
        <div className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl">
          <motion.div 
            className="bg-red-900/30 p-3 sm:p-4 rounded-lg border-2 border-red-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold">
              ⏰ Prosečno vreme čekanja: 
              <span className="block sm:inline text-2xl sm:text-3xl text-crisis-orange font-bold sm:ml-2 mt-1 sm:mt-0" id="hero-wait-time">
                18h 42min
              </span>
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-red-900/30 p-3 sm:p-4 rounded-lg border-2 border-red-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold">
              💰 Cena na crnom tržištu: 
              <span className="block sm:inline text-2xl sm:text-3xl text-warning-yellow font-bold sm:ml-2 mt-1 sm:mt-0" id="hero-black-price">
                450 din/l
              </span>
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-red-900/30 p-3 sm:p-4 rounded-lg border-2 border-red-500"
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-semibold">
              🚗 Automobila u redovima širom Srbije: 
              <span className="block sm:inline text-2xl sm:text-3xl text-red-400 font-bold sm:ml-2 mt-1 sm:mt-0">
                15,847
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-6 p-4 bg-black/50 rounded-lg border-2 border-yellow-500"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-sm md:text-base italic text-yellow-300">
            ⚠️ Poslednji put kada je neko tačio gorivo bez čekanja: 
            <span className="font-bold"> 17. septembar 2024. </span>
            (unconfirmed)
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
