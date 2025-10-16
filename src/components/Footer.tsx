import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t-4 border-crisis-red py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-crisis-orange mb-2">
              🚗💨 NESTAŠICA
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Vaš pouzdan (ne)vodič kroz benzinsku apokalipsu 2025. 
              Sve informacije su satirične i ne treba ih shvatati ozbiljno.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-warning-yellow">Brzi Linkovi</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                'O Nama (ko smo mi?)',
                'Kontakt (ne odgovaramo)',
                'Politika Privatnosti (nepostojeća)',
                'Uslovi Korišćenja (nema ih)',
                'FAQ (sve je FAQ)',
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: '#FF6600' }}
                  className="text-gray-400 hover:text-crisis-orange cursor-pointer transition-colors"
                >
                  → {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 text-warning-yellow">Zaprati Nas</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Za još apsurdnosti i satiričnog sadržaja!
            </p>
            <div className="flex gap-4 sm:gap-6">
              {[
                { icon: FaGithub, label: 'GitHub', url: 'https://github.com/zoxknez' },
                { icon: FaTwitter, label: 'Twitter', url: 'https://x.com/KoronVirus' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    boxShadow: "0 0 25px rgba(255, 102, 0, 0.8)"
                  }}
                  whileTap={{ scale: 0.85 }}
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-crisis-red/30 to-crisis-orange/30 
                           hover:from-crisis-red hover:to-crisis-orange rounded-full
                           flex items-center justify-center border-2 sm:border-3 border-crisis-red
                           transition-all shadow-lg shadow-crisis-red/50"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl sm:text-3xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Nestašica | Sva prava zadržana (kao i sav benzin)
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center gap-2 text-gray-400"
            >
              Napravljeno sa <FaHeart className="text-crisis-red" /> o0o0o0o
            </motion.div>
          </div>
        </div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 p-3 sm:p-4 bg-yellow-900/20 border-2 border-yellow-500 rounded-lg"
        >
          <p className="text-center text-yellow-300 text-xs sm:text-sm leading-relaxed">
            <strong>⚠️ VAŽNO UPOZORENJE:</strong>
            {' '}Ovaj sajt je satiričan i služi isključivo u humorističke svrhe. 
            Sve informacije, podaci i saveti su izmišljeni. 
            Molimo vas, ne švercujte benzin - to je ilegalno i opasno.
            Svaka sličnost sa stvarnošću je slučajna ali zabrinjavajuća.
          </p>
        </motion.div>

        {/* Easter egg */}
        <div className="mt-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 10 }}
            className="text-xs text-gray-600 italic"
          >
            Psst... Ako čitaš ovo, zaslužuješ besplatan benzin! (Šalimo se, nema ga ni za pare)
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
