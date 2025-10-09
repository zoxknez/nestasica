import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Hero from './components/Hero'
import LiveStats from './components/LiveStats'
import QueueCalculator from './components/QueueCalculator'
import SmugglersMap from './components/SmugglersMap'
import BuyFromSmuggler from './components/BuyFromSmuggler'
import SurvivalTips from './components/SurvivalTips'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import PopupBalloon from './components/PopupBalloon'

function App() {
  return (
    <div className="min-h-screen">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a0000',
            color: '#fff',
            border: '2px solid #FF0000',
          },
        }}
      />
      
      <PopupBalloon />
      
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Hero />
        <LiveStats />
        <QueueCalculator />
        <SmugglersMap />
        <BuyFromSmuggler />
        <SurvivalTips />
        <Testimonials />
        <Statistics />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
