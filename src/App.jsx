
import './App.css'
import { Provider } from './components/ui/provider'
import Header from './components/Header'
import Banner from './components/Banner/Banner'
import CurveBanner from './components/CurveBanner/CurveBanner'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <section className='max-w-[1300px] mx-auto px-8'>
      <CurveBanner/>

      </section>
    </>
  )
}

export default App
