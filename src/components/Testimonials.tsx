import { motion } from 'framer-motion'
import { FaQuoteLeft, FaHeart, FaRing, FaBaby } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Čekao sam 14 sati. Upoznao sam ženu. Venčali smo se u redu. Sada imamo dvoje dece.',
      author: 'Mirko',
      location: 'Beograd',
      icon: FaRing,
      color: 'from-pink-600/20 to-red-600/20',
      rating: 5,
      date: '3 dana ago',
    },
    {
      text: 'Parkirao sam ispred pumpe 2022. Još uvek sam tu. Postali smo kao porodica.',
      author: 'Zoran',
      location: 'Novi Sad',
      icon: FaHeart,
      color: 'from-blue-600/20 to-purple-600/20',
      rating: 4,
      date: '2 godine ago',
    },
    {
      text: 'Prodao sam bubreg. Kupio 20 litara. Bez žaljenja. Najbolja investicija ikada!',
      author: 'Petar',
      location: 'Niš',
      icon: FaBaby,
      color: 'from-green-600/20 to-emerald-600/20',
      rating: 5,
      date: '1 nedelja ago',
    },
    {
      text: 'Kad sam stigao do pumpe, benzin je ponovo nestao. Ali prijateljstva traju večno! ❤️',
      author: 'Marko',
      location: 'Kragujevac',
      icon: FaHeart,
      color: 'from-yellow-600/20 to-orange-600/20',
      rating: 3,
      date: '5 dana ago',
    },
    {
      text: 'Naučio sam da sviram gitaru dok sam čekao. Sada sam profesionalni muzičar.',
      author: 'Stefan',
      location: 'Subotica',
      icon: FaHeart,
      color: 'from-purple-600/20 to-pink-600/20',
      rating: 5,
      date: '2 nedelje ago',
    },
    {
      text: 'Završio sam 3 online kursa dok sam čekao. Hvala nestašici, dobio sam promociju!',
      author: 'Jovana',
      location: 'Pančevo',
      icon: FaHeart,
      color: 'from-cyan-600/20 to-blue-600/20',
      rating: 5,
      date: '10 dana ago',
    },
  ]

  return (
    <section id="testimonials" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">
            📢 PRIČE SA TERENA
          </h2>
          <p className="text-lg text-gray-300">Stvarne priče stvarnih ljudi koji su preživeli</p>
          <p className="text-sm text-gray-400 italic mt-2">(možda)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${testimonial.color} rounded-xl p-6 border-2 
                         border-white/20 shadow-xl card-hover relative overflow-hidden`}
            >
              {/* Decorative quote icon */}
              <div className="absolute top-2 right-2 opacity-10">
                <FaQuoteLeft className="text-6xl" />
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <testimonial.icon className="text-4xl text-crisis-orange" />
                </motion.div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <p className="text-gray-100 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className={i < testimonial.rating ? 'text-warning-yellow' : 'text-gray-600'}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-white/20 pt-3 mt-3">
                  <p className="font-bold text-warning-yellow">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="bg-black/40 p-6 rounded-xl border-2 border-crisis-orange inline-block">
            <h3 className="text-xl font-bold mb-2">Imaš svoju priču?</h3>
            <p className="text-gray-300 mb-4">Podeli svoje iskustvo iz reda!</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="crisis-button"
            >
              PODELI PRIČU
            </motion.button>
            <p className="text-xs text-gray-400 mt-3 italic">
              (Dugme trenutno ne radi, kao ni pumpe)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials
