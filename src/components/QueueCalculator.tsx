import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalculator, FaCar, FaGasPump, FaBed } from 'react-icons/fa'
import toast from 'react-hot-toast'

const QueueCalculator = () => {
  const [carsAhead, setCarsAhead] = useState(50)
  const [fuelLeft, setFuelLeft] = useState(5)
  const [hasBlanket, setHasBlanket] = useState(false)
  const [result, setResult] = useState<{
    hours: number
    minutes: number
    message: string
    warnings: string[]
    recommendation: string
  } | null>(null)

  const calculate = () => {
    const baseTime = carsAhead * 15 // 15 min po automobilu
    const urgencyMultiplier = fuelLeft < 5 ? 2 : 1
    const comfortBonus = hasBlanket ? -30 : 0
    
    const totalMinutes = Math.max(0, (baseTime * urgencyMultiplier) + comfortBonus)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    
    let message = ''
    let recommendation = ''
    const warnings: string[] = []
    
    if (totalMinutes < 60) {
      message = '✅ Bravo! Stigao si na vreme! (Možda...)'
      recommendation = 'Ostani u redu i moli se!'
    } else if (totalMinutes < 300) {
      message = '⚠️ Donesi kafu. Biće duga noć.'
      recommendation = 'Preporučujemo termos i sendviče.'
    } else if (totalMinutes < 600) {
      message = '😰 Razmisli o kampovanju. Ozbiljno.'
      recommendation = 'Potrebna oprema: šator, spavaća vreća, survival kit.'
    } else {
      message = '💀 Prodaj auto. Kupi bicikl. Idi kući.'
      recommendation = 'Bicikl košta manje od benzina u redu.'
    }
    
    if (!hasBlanket && totalMinutes > 180) {
      warnings.push('🥶 Bez ćebeta nećeš preživeti noćnu smenu!')
    }
    
    if (fuelLeft < 2) {
      warnings.push('🚨 KRITIČNO: Možda nećeš ni stići do pumpe!')
    }

    if (carsAhead > 100) {
      warnings.push('😱 Previše automobila! Razmisli o teleportaciji!')
    }

    setResult({ hours, minutes, message, warnings, recommendation })
    
    toast.success('Kalkulator završio analizu tvoje sudbine!', {
      icon: '🔮',
    })
  }

  return (
    <section id="calculator" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 flex items-center justify-center gap-3">
            <FaCalculator className="text-warning-yellow" />
            LIVE RED-O-METAR™
          </h2>
          <p className="text-lg text-gray-300">Izračunaj koliko ćeš provesti u redu!</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Input: Automobila ispred */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
          >
            <label className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <FaCar className="text-2xl text-blue-400" />
              Broj automobila ispred tebe:
            </label>
            <input
              type="number"
              value={carsAhead}
              onChange={(e) => setCarsAhead(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg 
                       text-white text-xl font-bold focus:outline-none focus:border-crisis-red
                       transition-all"
              min="0"
              max="500"
            />
            <input
              type="range"
              value={carsAhead}
              onChange={(e) => setCarsAhead(Number(e.target.value))}
              className="w-full mt-3"
              min="0"
              max="200"
            />
          </motion.div>

          {/* Input: Gorivo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
          >
            <label className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <FaGasPump className="text-2xl text-yellow-400" />
              Litara goriva u rezervoaru:
            </label>
            <input
              type="number"
              value={fuelLeft}
              onChange={(e) => setFuelLeft(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg 
                       text-white text-xl font-bold focus:outline-none focus:border-crisis-red
                       transition-all"
              min="0"
              max="80"
            />
            <input
              type="range"
              value={fuelLeft}
              onChange={(e) => setFuelLeft(Number(e.target.value))}
              className="w-full mt-3"
              min="0"
              max="80"
            />
          </motion.div>

          {/* Input: Ćebe */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={hasBlanket}
                onChange={(e) => setHasBlanket(e.target.checked)}
                className="w-6 h-6 accent-crisis-red cursor-pointer"
              />
              <FaBed className="text-2xl text-purple-400" />
              <span className="text-lg font-semibold">Da li imaš ćebe i termos?</span>
            </label>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={calculate}
            className="w-full crisis-button text-2xl py-4 flex items-center justify-center gap-3"
          >
            <FaCalculator />
            IZRAČUNAJ SUDBINU
          </motion.button>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="bg-gradient-to-br from-crisis-red/30 to-crisis-orange/30 p-8 rounded-xl 
                         border-4 border-crisis-red shadow-2xl"
              >
                <h3 className="text-3xl font-bold text-center mb-6 text-warning-yellow">
                  ⏰ TVOJA SUDBINA ⏰
                </h3>
                
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold mb-2">
                    {result.hours}h {result.minutes}min
                  </p>
                  <p className="text-xl">{result.message}</p>
                </div>

                {result.warnings.length > 0 && (
                  <div className="bg-red-900/50 p-4 rounded-lg mb-4 border-2 border-red-500">
                    <h4 className="font-bold mb-2 text-lg">⚠️ UPOZORENJA:</h4>
                    {result.warnings.map((warning, index) => (
                      <p key={index} className="mb-1">{warning}</p>
                    ))}
                  </div>
                )}

                <div className="bg-black/50 p-4 rounded-lg border-2 border-yellow-500">
                  <h4 className="font-bold mb-2 text-lg text-warning-yellow">💡 PREPORUKA:</h4>
                  <p>{result.recommendation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default QueueCalculator
