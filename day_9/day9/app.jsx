import React, { useState } from 'react'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    'https://i.pinimg.com/736x/79/2d/e5/792de5a6528fe498b4545da58ae8c5f1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2uinDzTpPggSHBx97_ZWC25aKBscT8o-Ce2lFWLG-zxXIGvVzQacFi0-4&s=10',
    'https://upload.wikimedia.org/wikipedia/commons/6/67/Cristiano_Ronaldo_2275_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeQwD2Cw9h6tVK8PpE_K0oLgaz2FoeoHboyau6k2UYXD3DzKfn6F6WKc&s=10'
  ]

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1 style={{ backgroundColor: 'black', color: 'white', padding: '12px 0', marginBottom: '20px' }}>
        Image Slider
      </h1>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '420px',
          height: '260px',
          objectFit: 'cover',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          marginBottom: '16px',
        }}
      />

      <div>
        <button
          onClick={showPrevious}
          style={{ marginRight: '12px', padding: '10px 18px', cursor: 'pointer' }}
        >
          Left
        </button>
        <button onClick={showNext} style={{ padding: '10px 18px', cursor: 'pointer' }}>
          Right
        </button>
      </div>
    </div>
  )
}

export default App