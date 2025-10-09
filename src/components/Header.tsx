import { motion } from 'framer-motion'
import { FaGasPump, FaExclamationTriangle, FaMap, FaLightbulb, FaComments, FaChartBar } from 'react-icons/fa'

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-black border-b-4 border-crisis-red shadow-2xl"
    >
      {/* Banner */}
      <motion.div 
        animate={{ 
          background: [
            'linear-gradient(90deg, #FF0000 0%, #FF6600 100%)',
            'linear-gradient(90deg, #FF6600 0%, #FF0000 100%)',
            'linear-gradient(90deg, #FF0000 0%, #FF6600 100%)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="py-4 md:py-6 text-center px-2"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <motion.img 
            src="/pumpaj-192.png" 
            alt="Pumpaj" 
            className="w-10 h-10 md:w-20 md:h-20"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-7xl font-display font-bold tracking-wider"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚗💨 NESTAŠICA
          </motion.h1>
          <motion.img 
            src="/pumpaj-192.png" 
            alt="Pumpaj" 
            className="w-10 h-10 md:w-20 md:h-20"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="mt-2 text-sm sm:text-base md:text-xl italic font-semibold px-2">
          Jer pešačenje je novi luksuz! 👟✨
        </p>
      </motion.div>

      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-2 md:px-4">
          <ul className="flex flex-wrap justify-center gap-1.5 md:gap-6 py-3 md:py-4">
            {[
              { icon: FaExclamationTriangle, text: 'LIVE Status', id: 'live-stats' },
              { icon: FaGasPump, text: 'Red Kalkulator', id: 'calculator' },
              { icon: FaMap, text: 'Mapa Pumpaj', id: 'map' },
              { icon: FaGasPump, text: '💰 Kupi Ovde', id: 'buy-from-smuggler' },
              { icon: FaLightbulb, text: 'Survival Saveti', id: 'tips' },
              { icon: FaComments, text: 'Priče', id: 'testimonials' },
              { icon: FaChartBar, text: 'Statistike', id: 'stats' },
            ].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 
                           bg-crisis-red/20 hover:bg-crisis-red 
                           border-2 border-crisis-red rounded-lg font-bold transition-all duration-300
                           text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  <item.icon className="text-sm md:text-lg" />
                  <span className="hidden md:inline">{item.text}</span>
                  <span className="md:hidden">{item.text.split(' ')[0]}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
