
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner/Banner'
import CurveBanner from './components/CurveBanner/CurveBanner'
import Milestone from './components/milestone/Milestone'
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import BgVideo from './components/BgVideo'
import Footer from './components/Footer'
import Certifications from './components/certifications/Certifications'
import Stories from './components/Stories'
import Teams from './components/certifications/Teams'
import Better from './components/Better'
import Services from './components/Services'
function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <section className='max-w-[1300px] mx-auto px-5 lg:px-8'>
      <CurveBanner/>
<Milestone/>
      </section>
      <Hero/>
      <BgVideo/>
<section className='max-w-[1300px] mx-auto px-5 lg:px-8'>
  <Services/>
  <Better/>
  <Teams/>
</section>
  <Stories/>

      <Certifications/>
      <Footer/>
    </>
  )
}

export default App
