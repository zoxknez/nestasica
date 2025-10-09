import { motion } from 'framer-motion'
import { FaChartLine } from 'react-icons/fa'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Statistics = () => {
  const stats = [
    {
      number: '2.5 milijardi',
      label: 'Sati proveli u redovima (zbir)',
      icon: '⏰',
      color: 'from-red-600/20 to-orange-600/20',
    },
    {
      number: '847%',
      label: 'Porast prodaje bicikala',
      icon: '🚲',
      color: 'from-green-600/20 to-emerald-600/20',
    },
    {
      number: '∞',
      label: 'Naše strpljenje (navodno)',
      icon: '😤',
      color: 'from-blue-600/20 to-cyan-600/20',
    },
    {
      number: '0',
      label: 'Rešenja od vlasti',
      icon: '🤷',
      color: 'from-purple-600/20 to-pink-600/20',
    },
  ]

  // Line chart data - Cene benzina
  const priceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt'],
    datasets: [
      {
        label: 'Zvanična cena',
        data: [180, 182, 185, 190, 195, 200, 210, 220, 230, 0],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Crno tržište',
        data: [190, 210, 250, 280, 320, 380, 420, 450, 480, 520],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  }

  // Bar chart data - Vreme čekanja po gradovima
  const waitTimeData = {
    labels: ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Pančevo'],
    datasets: [
      {
        label: 'Prosečno vreme (sati)',
        data: [18, 14, 12, 10, 8, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 2,
      },
    ],
  }

  // Doughnut chart data - Transport alternatives
  const transportData = {
    labels: ['Automobil (kad ima goriva)', 'Bicikl', 'Pešice', 'Autobus', 'Ostalo'],
    datasets: [
      {
        label: 'Način prevoza',
        data: [15, 35, 25, 20, 5],
        backgroundColor: [
          'rgba(239, 68, 68, 0.6)',
          'rgba(34, 197, 94, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(234, 179, 8, 0.6)',
          'rgba(168, 85, 247, 0.6)',
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(34, 197, 94)',
          'rgb(59, 130, 246)',
          'rgb(234, 179, 8)',
          'rgb(168, 85, 247)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      y: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      x: {
        ticks: { color: '#fff' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#fff',
          padding: 15,
        },
      },
    },
  }

  return (
    <section id="stats" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-effect rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2 flex items-center justify-center gap-3">
            <FaChartLine className="text-blue-400" />
            STATISTIKE KOJE NIKO NIJE TRAŽIO
          </h2>
          <p className="text-lg text-gray-300">Ali evo ih svejedno, jer volimo podatke</p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-center
                         border-2 border-white/20 shadow-xl card-hover`}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
                className="text-6xl mb-4"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold text-warning-yellow mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="space-y-8">
          {/* Price comparison chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              📈 Uporedni pregled cena (2025)
            </h3>
            <div className="h-64 md:h-80">
              <Line data={priceData} options={chartOptions} />
            </div>
            <p className="text-center text-sm text-gray-400 mt-4 italic">
              *Oktobarska zvanična cena: N/A (nema benzina da se oceni)
            </p>
          </motion.div>

          {/* Two column charts */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wait time by city */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                ⏰ Vreme čekanja po gradovima
              </h3>
              <div className="h-64 md:h-80">
                <Bar data={waitTimeData} options={chartOptions} />
              </div>
            </motion.div>

            {/* Transport alternatives */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/30 p-6 rounded-xl border-2 border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                🚶 Načini prevoza (2025)
              </h3>
              <div className="h-64 md:h-80">
                <Doughnut data={transportData} options={doughnutOptions} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-crisis-red/30 to-crisis-orange/30 
                   p-6 rounded-xl border-4 border-crisis-red text-center"
        >
          <h3 className="text-2xl font-bold mb-3">🎲 FUN FACT</h3>
          <p className="text-xl leading-relaxed">
            Ako bi svi automobili u redovima napravili kolonu,
            <br />
            <span className="text-warning-yellow font-bold text-2xl">
              dosezali bi do Meseca! 🌙
            </span>
          </p>
          <p className="text-sm text-gray-400 mt-3 italic">
            (Možda ne baš, ali se tako oseća)
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Statistics
