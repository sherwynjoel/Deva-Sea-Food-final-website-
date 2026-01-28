import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { VisionMissionGoals } from '../components/sections/VisionMissionGoals'
import { WhatWeOffer } from '../components/sections/WhatWeOffer'
import { Facility } from '../components/sections/Facility'
import { Portfolio } from '../components/sections/Portfolio'
import { Certifications } from '../components/sections/Certifications'
import { Gallery } from '../components/sections/Gallery'

import { Contact } from '../components/sections/Contact'
import { WaveDivider } from '../components/ui/WaveDivider'

export function HomePage() {
    return (
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
            <Gallery />
            <WaveDivider />
            <Contact />
        </main>
    )
}
