
import { Button } from '@chakra-ui/react'
import './App.css'
import { Provider } from './components/ui/provider'
import Header from './components/Header'

function App() {

  return (
    <Provider>
      
      <Header/>
      
    </Provider>
  )
}

export default App
