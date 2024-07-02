import Hero from './components/Hero'
import Logobar from './components/Logobar'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logobar />
      <Skills />
      <Gallery />
      <Testimonial />
      <Contact />
    </>
  )
}

export default App
