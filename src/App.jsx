import { BrowserRouter as Router } from 'react-router-dom'
import { Header, Footer, ScrollToTop, AnimatedRoutes } from './components'

const App = () => {
  return (
    <div className='overflow-hidden font-almarai' dir='rtl'>
      <Router>
        <ScrollToTop />
        <Header />
        <main className='bg-home-pattern mt-[117.5px] md:mt-[130px]'>
          <div className='bg-white/90'>
            <AnimatedRoutes />
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
