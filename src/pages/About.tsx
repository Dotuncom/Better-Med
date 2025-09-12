import { useState } from 'react'
import slide1 from '../assets/slider-2 .jpg'
import slide2 from '../assets/slider3.jpg'

type ImagesProps = {
  id: number,
  path: string
}
const About = () => {
  const [initial, setInitial] = useState(0)

  const images: ImagesProps[] = [
    { id: 1, path: slide1 },
    { id: 2, path: slide2 }
  ]

  const next = () => {
    setInitial(prev => (prev + 1) % images.length)
  }

  return (
    <div className='min-h-screen'>
      <img
      className='absolute h-full w-full'
        src={images[initial].path} alt="" />
      <button 
      className='relative'
      onClick={next}>Next</button>
    </div>
  )
}

export default About