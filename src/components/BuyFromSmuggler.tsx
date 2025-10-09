import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShoppingCart, FaUserSecret, FaMoneyBillWave, FaGasPump, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Package {
  id: number
  name: string
  liters: number
  price: number
  discount?: number
  popular?: boolean
  risky?: boolean
}

const BuyFromSmuggler = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const packages: Package[] = [
    {
      id: 1,
      name: 'Starter Pack',
      liters: 10,
      price: 3800,
      risky: true,
    },
    {
      id: 2,
      name: 'Standard',
      liters: 20,
      price: 7200,
      discount: 10,
      popular: true,
    },
    {
      id: 3,
      name: 'Premium',
      liters: 50,
      price: 17000,
      discount: 15,
    },
    {
      id: 4,
      name: 'VIP Ultra',
      liters: 100,
      price: 32000,
      discount: 20,
    },
  ]

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg)
    setShowOrderForm(true)
    toast.success(`Izabrao si ${pkg.name} paket!`, { icon: '📦' })
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()

    if (!customerName || !phone || !location) {
      toast.error('Popuni sva polja!', { icon: '❌' })
      return
    }

    // "Slanje" narudžbine
    setOrderSubmitted(true)
    toast.success('Narudžbina poslata! Šverceri će te kontaktirati...', {
      icon: '🎉',
      duration: 5000,
    })

    setTimeout(() => {
      toast('Očekuj poziv sa nepoznatog broja u narednih 24h', {
        icon: '📞',
        duration: 4000,
      })
    }, 2000)

    setTimeout(() => {
      toast('P.S. Ovo je satiričan sajt. Ne švercuj benzin! 😄', {
        icon: '⚠️',
        duration: 6000,
      })
    }, 4000)
  }

  const resetForm = () => {
    setShowOrderForm(false)
    setOrderSubmitted(false)
    setSelectedPackage(null)
    setCustomerName('')
    setPhone('')
    setLocation('')
  }

  return (
    <section id="buy-from-smuggler" className="py-12">
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
            <FaUserSecret className="text-crisis-red" />
            KUPI OD ŠVERCERA
            <FaUserSecret className="text-crisis-red" />
          </motion.h2>
          <p className="text-lg text-gray-300">Premium benzin, premium cene! 💰</p>
          <p className="text-sm text-red-400 italic mt-2">
            (Disclaimer: Ovo je satiričan sajt. Ne kupujte od švercera!)
          </p>
        </div>

        {/* Packages Grid */}
        {!showOrderForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative bg-gradient-to-br ${
                  pkg.popular 
                    ? 'from-yellow-900/50 to-orange-900/50 border-4 border-warning-yellow' 
                    : 'from-gray-800/50 to-gray-900/50 border-2 border-white/20'
                } rounded-xl p-6 cursor-pointer card-hover`}
                onClick={() => handlePackageSelect(pkg)}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 -right-3 bg-warning-yellow text-black px-3 py-1 
                                rounded-full text-xs font-bold animate-pulse">
                    ⭐ NAJPRODAVANIJE
                  </div>
                )}

                {/* Risky Badge */}
                {pkg.risky && (
                  <div className="absolute -top-3 -left-3 bg-red-600 text-white px-3 py-1 
                                rounded-full text-xs font-bold">
                    ⚠️ RIZIČNO
                  </div>
                )}

                <div className="text-center mb-4">
                  <FaGasPump className="text-5xl text-crisis-orange mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                </div>

                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-warning-yellow mb-2">
                    {pkg.liters}L
                  </div>
                  {pkg.discount && (
                    <div className="text-green-400 text-sm mb-2">
                      -{pkg.discount}% POPUST!
                    </div>
                  )}
                  <div className="text-3xl font-bold text-green-400">
                    {pkg.price.toLocaleString()} RSD
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    ({(pkg.price / pkg.liters).toFixed(0)} din/l)
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full crisis-button"
                >
                  <FaShoppingCart className="inline mr-2" />
                  IZABERI
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Order Form */}
        <AnimatePresence>
          {showOrderForm && !orderSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl 
                       border-4 border-crisis-red"
            >
              <h3 className="text-3xl font-bold mb-6 text-center">
                Potvrdi Narudžbinu: {selectedPackage?.name}
              </h3>

              <div className="bg-black/40 p-4 rounded-lg mb-6 text-center">
                <div className="text-5xl font-bold text-warning-yellow mb-2">
                  {selectedPackage?.liters}L
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {selectedPackage?.price.toLocaleString()} RSD
                </div>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <FaUserSecret className="inline mr-2" />
                    Ime / Nadimak:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Npr: Marko"
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:border-crisis-red"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    📞 Broj telefona:
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+381 6X XXX XXXX"
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:border-crisis-red"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    📍 Lokacija za isporuku:
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Grad, opština..."
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:border-crisis-red"
                    required
                  />
                </div>

                {/* Warning */}
                <div className="bg-yellow-900/30 border-2 border-yellow-500 p-4 rounded-lg">
                  <p className="text-sm text-yellow-300 flex items-start gap-2">
                    <FaExclamationTriangle className="mt-1 flex-shrink-0" />
                    <span>
                      Švercovanje je ilegalno! Ovaj sajt je satiričan. 
                      Molimo te, ne švercuj benzin u stvarnosti.
                    </span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white 
                             font-bold rounded-lg transition-all"
                  >
                    ODUSTANI
                  </motion.button>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 crisis-button text-xl"
                  >
                    <FaMoneyBillWave className="inline mr-2" />
                    POTVRDI NARUDŽBINU
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order Success */}
        <AnimatePresence>
          {orderSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-xl 
                       border-4 border-green-500 text-center"
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                <FaCheckCircle className="text-8xl text-green-400 mx-auto mb-4" />
              </motion.div>

              <h3 className="text-4xl font-bold mb-4 text-green-300">
                Narudžbina Poslata! 🎉
              </h3>

              <p className="text-xl mb-6">
                Šverceri će te kontaktirati uskoro...
              </p>

              <div className="bg-black/40 p-6 rounded-lg mb-6">
                <p className="text-lg mb-2">📦 Paket: <strong>{selectedPackage?.name}</strong></p>
                <p className="text-lg mb-2">⛽ Količina: <strong>{selectedPackage?.liters}L</strong></p>
                <p className="text-lg mb-2">💰 Iznos: <strong>{selectedPackage?.price.toLocaleString()} RSD</strong></p>
                <p className="text-lg">📍 Lokacija: <strong>{location}</strong></p>
              </div>

              <div className="bg-red-900/30 border-2 border-red-500 p-4 rounded-lg mb-6">
                <p className="text-sm text-red-300">
                  ⚠️ <strong>PODSETNIK:</strong> Ovo je satiričan sajt! 
                  Nikakva stvarna narudžbina nije poslata. 
                  Nemoj švercovati benzin!
                </p>
              </div>

              <motion.button
                onClick={resetForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="crisis-button"
              >
                NARUČI PONOVO (za foru)
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features */}
        {!showOrderForm && !orderSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-3 gap-4"
          >
            {[
              { icon: '🚚', title: 'Brza Dostava', text: 'Isporuka u roku od 2-48h' },
              { icon: '💵', title: 'Plaćanje Keš', text: 'Samo gotovina, bez računa' },
              { icon: '🤫', title: 'Diskrecija', text: 'Tvoja tajna je sigurna kod nas' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/30 p-4 rounded-lg border-2 border-white/20 text-center"
              >
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h4 className="font-bold mb-1 text-warning-yellow">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default BuyFromSmuggler
