import { useState, useEffect } from 'react'

const PopupBalloon = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if popup was already shown
    const popupShown = localStorage.getItem('popupShown')
    
    if (!popupShown) {
      // Show popup after 10 seconds only if not shown before
      const timer = setTimeout(() => {
        setIsVisible(true)
        localStorage.setItem('popupShown', 'true')
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn p-2 sm:p-4">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-2 sm:mx-4 transform animate-scaleIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold z-10 bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image */}
        <div className="p-2 sm:p-4">
          <img
            src="/Screenshot_2.jpg"
            alt="Popup"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default PopupBalloon
