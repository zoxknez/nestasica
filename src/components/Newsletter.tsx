import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaBell } from 'react-icons/fa'
import toast from 'react-hot-toast'
import Confetti from 'react-confetti'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Unesi email prvo! 📧')
      return
    }

    setShowConfetti(true)
    
    toast.success('Hvala! Obavestićemo te kada... hahaha, ko smo mi da zezamo! 😂', {
      duration: 5000,
      icon: '🎉',
    })

    setTimeout(() => {
      toast('P.S. Nikada nećeš dobiti email jer server ne postoji! 💀', {
        icon: '😈',
      })
    }, 2000)

    setTimeout(() => setShowConfetti(false), 5000)
    
    setEmail('')
  }

  return (
    <section className="py-12">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8 md:p-12 text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="inline-block mb-6"
        >
          <FaBell className="text-6xl md:text-8xl text-crisis-orange" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          📧 PRIJAVI SE ZA NESTAŠICA ALERT!
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          Budi prvi koji sazna kada se pojavi benzin
        </p>
        
        <motion.p 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-gray-400 italic mb-8"
        >
          (spoiler: neće)
        </motion.p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tvoj@email.rs"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/30 
                         rounded-lg text-white text-lg placeholder-gray-400
                         focus:outline-none focus:border-crisis-red transition-all"
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="crisis-button text-xl md:text-2xl px-8 py-4 whitespace-nowrap"
            >
              PRIJAVI ME! 🚀
            </motion.button>
          </div>
        </form>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid md:grid-cols-3 gap-4 text-left"
        >
          {[
            { icon: '⚡', text: 'Instant obaveštenja (možda)' },
            { icon: '🎯', text: 'Precizne informacije (sumnjivo)' },
            { icon: '🆓', text: 'Potpuno besplatno (jer ništa ne radi)' },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-black/30 p-4 rounded-lg border-2 border-white/20
                       flex items-center gap-3 card-hover"
            >
              <span className="text-3xl">{benefit.icon}</span>
              <span className="text-sm">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Fine print */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 p-4 bg-black/50 rounded-lg border border-gray-600"
        >
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Disclaimer:</strong> Tvoj email će biti korišćen za... zapravo ni za šta. 
            Ne šaljemo mailove jer nemamo server. Čak ni benzina nemamo. 
            Iskreno, čudo je što ovaj sajt uopšte radi. 
            Sve je ovo satirično. Molimo vas, nemojte švercovati benzin. 
            Ili šverc ujte, nismo ti mi gazda. 🤷
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Newsletter
