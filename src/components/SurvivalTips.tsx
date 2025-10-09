import { motion } from 'framer-motion'
import { FaLightbulb, FaBiking, FaTools, FaBed, FaBook } from 'react-icons/fa'

const SurvivalTips = () => {
  const tips = [
    {
      icon: FaBed,
      title: 'Šta poneti u red?',
      color: 'from-purple-600/20 to-pink-600/20',
      iconColor: 'text-purple-400',
      items: [
        'Ćebe (zimska verzija)',
        'Termos sa rakijom ☕',
        'Karte (za druženje)',
        'Power bank (za TikTok)',
        'Rezervna knjiga života',
        'Sendviči za 3 dana',
      ]
    },
    {
      icon: FaBiking,
      title: 'Alternative transportu',
      color: 'from-green-600/20 to-emerald-600/20',
      iconColor: 'text-green-400',
      items: [
        'Bicikl (retro je IN) 🚲',
        'Konj (vintage) 🐴',
        'Rolšue (urbano) 🛼',
        'Teleportacija (uskoro)',
        'Ostani kod kuće 🏠',
        'Pešačenje (besplatno!)',
      ]
    },
    {
      icon: FaBook,
      title: 'Kako prepoznati švercera?',
      color: 'from-yellow-600/20 to-orange-600/20',
      iconColor: 'text-yellow-400',
      items: [
        'Mirišu na benzin ⛽',
        'Voze luksuzna kola 🚗',
        'Znaju sve graničare',
        'Imaju 47 kanistera',
        'Nude "specijalne cene"',
        'Sumnjivo mirni',
      ]
    },
    {
      icon: FaTools,
      title: 'DIY Rešenja',
      color: 'from-red-600/20 to-orange-600/20',
      iconColor: 'text-red-400',
      items: [
        'Grejanje na drva 🪵',
        'Pedalanje pogon 🚴',
        'Rakija kao gorivo* 🍷',
        'Prodaj auto, kupi bajs',
        'Solarni paneli (možda)',
        '*Ne preporučuje se ⚠️',
      ]
    },
  ]

  const proTips = [
    {
      icon: '🎯',
      title: 'PRO TIP #1',
      text: 'Najbolje vreme za dolazak je 3AM. Ali svi to znaju, pa je opet gužva.',
    },
    {
      icon: '💡',
      title: 'PRO TIP #2',
      text: 'Sprijatelji se sa ljudima u redu. Možda ti ustupe mesto. (Neće.)',
    },
    {
      icon: '🧠',
      title: 'PRO TIP #3',
      text: 'Ako planiraš da čekaš 24h+, donesi šator. Ovo nije šala.',
    },
    {
      icon: '⚡',
      title: 'PRO TIP #4',
      text: 'Rezervni rezervoar u gepeku = ilegalno. Ali ko još vodi računa?',
    },
  ]

  return (
    <section id="tips" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 flex items-center justify-center gap-3">
            <FaLightbulb className="text-warning-yellow animate-pulse" />
            PRO SAVETI ZA PREŽIVLJAVANJE
          </h2>
          <p className="text-lg text-gray-300">Jer gluvo doba benzinske apokalipse zahteva strategiju</p>
        </div>

        {/* Glavni saveti grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`bg-gradient-to-br ${tip.color} rounded-xl p-6 border-2 border-white/20 
                         shadow-xl card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <tip.icon className={`text-4xl ${tip.iconColor}`} />
                <h3 className="text-xl font-bold">{tip.title}</h3>
              </div>
              <ul className="space-y-2">
                {tip.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-2 text-gray-200"
                  >
                    <span className="text-crisis-orange mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips - posebna sekcija */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {proTips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-black/40 p-4 rounded-xl border-2 border-crisis-orange
                       hover:border-warning-yellow transition-all cursor-pointer"
            >
              <div className="text-center mb-2">
                <span className="text-4xl">{tip.icon}</span>
              </div>
              <h4 className="text-sm font-bold text-warning-yellow mb-2">{tip.title}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{tip.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bonus sekcija */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-crisis-red/30 to-crisis-orange/30 
                   p-6 rounded-xl border-4 border-crisis-red"
        >
          <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <span className="animate-bounce">🏆</span>
            ZLATNI SAVET
            <span className="animate-bounce">🏆</span>
          </h3>
          <p className="text-xl text-center leading-relaxed">
            Najbolja strategija za preživljavanje benzinske krize?
            <br />
            <span className="text-3xl font-bold text-warning-yellow block mt-2">
              NEMOJ IMATI AUTO! 🚫🚗
            </span>
          </p>
          <p className="text-center mt-4 text-sm text-gray-300 italic">
            (Problem solved. You're welcome.)
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SurvivalTips
