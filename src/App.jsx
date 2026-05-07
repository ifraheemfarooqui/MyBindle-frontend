import './App.css'
import Navbar       from './components/Navbar/Navbar'
import Hero         from './components/Hero/Hero'
import Features     from './components/Features/Features'
import WhySection   from './components/WhySection/WhySection'
import HowToInstall from './components/HowToInstall/HowToInstall'
import Donate       from './components/Donate/Donate'
import Testimonials from './components/Testimonials/Testimonials'
import Footer       from './components/Footer/Footer'

export default function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Features />
        <WhySection />
        <HowToInstall />
        <Donate />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
