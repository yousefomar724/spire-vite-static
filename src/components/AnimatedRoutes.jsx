import { Route, Routes, useLocation } from 'react-router-dom'
import {
  About,
  Article,
  Board,
  BoardTeam,
  CEO,
  Contact,
  ErrorPage,
  FAQ,
  Gallery,
  Home,
  ManagementMembers,
  News,
  Partners,
  Programs,
  Registration,
  RegistrationTerms,
  SingleProgram,
  SingleTrack,
  Team,
  Videos,
} from '../pages'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/about' element={<About />} />
        <Route path='/article/:articleId' element={<Article />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board-team' element={<BoardTeam />} />
        <Route path='/ceo' element={<CEO />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/' element={<Home />} />
        <Route path='/management-members' element={<ManagementMembers />} />
        <Route path='/news' element={<News />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/registration-terms' element={<RegistrationTerms />} />
        <Route path='/program/:programId' element={<SingleProgram />} />
        <Route path='/track/:trackId' element={<SingleTrack />} />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
