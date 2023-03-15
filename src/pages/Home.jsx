import {
  AboutSection,
  CEOSection,
  ContactSection,
  GoalSection,
  HeroSlider,
  PartnersSection,
  TeamSection,
  ValuesSection,
} from '../components'
import { motion } from 'framer-motion'
import { pageTransition } from '../animation'

const Home = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <HeroSlider />
      <AboutSection />
      <CEOSection />
      <GoalSection />
      <ValuesSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
    </motion.div>
  )
}

export default Home
