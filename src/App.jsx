import  image1  from './assets/1.jpg'
import  image2  from './assets/2.jpg'
import  image3  from './assets/3.jpg'
import  image4  from './assets/4.jpg'
import  image5  from './assets/5.jpg'

import './App.css'
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from 'react'

const images = [image1, image2, image3, image4, image5]

function App() {

  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
 
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div 
          className="inner"
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{ x: 100 }}
          animate={{ x: 0}}
          transition={{ duration: 3}}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <img src={image} alt="Image" />
            </motion.div>
          ))}  
        </motion.div>  
      </motion.div>
    </div>

  )
}

export default App
