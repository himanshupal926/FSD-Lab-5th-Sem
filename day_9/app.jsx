import React, { useEffect, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('left-to-right')

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('left-to-right')
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const showNext = () => {
    setSlideDirection('left-to-right')
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const showPrevious = () => {
    setSlideDirection('right-to-left')
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        fontFamily: 'Arial, sans-serif',
        padding: '30px',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '680px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '18px',
          padding: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Image Slider</h1>

        <style>
          {`
            @keyframes slideLeftToRight {
              from { transform: translateX(-100%); }
              to { transform: translateX(0); }
            }

            @keyframes slideRightToLeft {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }

            @media (prefers-reduced-motion: reduce) {
              .slider-image { animation: none !important; }
            }
          `}
        </style>
        <div
          style={{
            width: '100%',
            height: '320px',
            overflow: 'hidden',
            borderRadius: '12px',
            marginBottom: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          }}
        >
          <img
            key={currentIndex}
            className="slider-image"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              animation: `${slideDirection === 'left-to-right' ? 'slideLeftToRight' : 'slideRightToLeft'} 600ms ease-out`,
            }}
          />
        </div>

        <div
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '18px',
            color: '#111827',
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button
            onClick={showPrevious}
            style={{
              padding: '10px 22px',
              border: 'none',
              borderRadius: '10px',
              background: '#111827',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ← Left
          </button>
          <button
            onClick={showNext}
            style={{
              padding: '10px 22px',
              border: 'none',
              borderRadius: '10px',
              background: '#111827',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Right →
          </button>
        </div>
      </div>
    </div>
  )
}

export default App