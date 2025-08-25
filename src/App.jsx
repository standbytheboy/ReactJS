import './App.css'
import AnimalCarousel from './components/animalCarousel/AnimalCarousel.jsx'
import CategoryCard from './components/categoryCard/CategoryCard.jsx'
import CategoryCarousel from './components/categoryCarousel/CategoryCarousel.jsx'
import FeaturedProducts from './components/featuredProducts/FeaturedProducts.jsx'
import Footer from './components/footer/Footer.jsx'
import Hero from './components/hero/Hero.jsx'
import Navbar from './components/navbar/Navbar.jsx'

function App() {

  return (
    <>
     <CategoryCarousel />
     <AnimalCarousel />
     <Footer />
    </>
  )
}

export default App
