import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Image Carousel</h1>
      <div className="card">
        <FontAwesomeIcon className="chevron" icon={faChevronLeft} />
        <img src='./public/hari-panicker-2t28IxSTqF4-unsplash.jpg'></img>
        <FontAwesomeIcon className="chevron" icon={faChevronRight} />
      </div>

    </>
  )
}

export default App
