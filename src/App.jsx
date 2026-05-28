import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickInfoBar from './components/QuickInfoBar'
import FeaturedDishes from './components/FeaturedDishes'
import MenuCategories from './components/MenuCategories'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Rewards from './components/Rewards'
import GiftCards from './components/GiftCards'
import OrderingCTA from './components/OrderingCTA'
import Careers from './components/Careers'
import Location from './components/Location'
import Footer from './components/Footer'
import StickyOrderButton from './components/StickyOrderButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <QuickInfoBar />
        <FeaturedDishes />
        <MenuCategories />
        <About />
        <Events />
        <Gallery />
        <Reviews />
        <Rewards />
        <GiftCards />
        <OrderingCTA />
        <Careers />
        <Location />
      </main>
      <Footer />
      <StickyOrderButton />
    </>
  )
}
