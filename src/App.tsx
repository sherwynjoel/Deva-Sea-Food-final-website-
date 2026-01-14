import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { VisionMissionGoals } from './components/sections/VisionMissionGoals'
import { WhatWeOffer } from './components/sections/WhatWeOffer'
import { Facility } from './components/sections/Facility'
import { Portfolio } from './components/sections/Portfolio'
import { Certifications } from './components/sections/Certifications'

import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { NavButtons } from './components/sections/NavButtons'
import { WaveDivider } from './components/ui/WaveDivider'
import { ScrollProgress } from './components/motion/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <NavButtons />
      {/* Extra top padding so content clears the floating nav bar */}
      <main id="main" className="pb-24 sm:pb-28">
        <Hero />
        <WaveDivider className="opacity-80" />
        <About />
        <WaveDivider />
        <VisionMissionGoals />
        <WaveDivider />
        <WhatWeOffer />
        <WaveDivider />
        <Facility />

        <WaveDivider />



        <Portfolio />
        <WaveDivider />
        <Certifications />
        <WaveDivider />

        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
