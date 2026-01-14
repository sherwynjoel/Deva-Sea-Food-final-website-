
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'
import { siteContent } from '../../content/siteContent'

// Certification images (7 total)
const certificates = [
    { id: 1, src: '/1.jpeg', name: 'FSSAI', description: 'Food Safety and Standards Authority of India Certified' },
    { id: 2, src: '/2.jpg', name: 'EU Compliance', description: 'Compliant with European Union Seafood Import Regulations' },
    { id: 3, src: '/3.jpeg', name: 'EIC', description: 'Export Inspection Council Approved' },
    { id: 4, src: '/4.jpeg', name: 'FSSC 22000', description: 'Food Safety System Certification 22000' },
    { id: 5, src: '/5.jpeg', name: 'GMP', description: 'Good Manufacturing Practice Certified' },
    { id: 6, src: '/6.jpeg', name: 'HACCP', description: 'Hazard Analysis Critical Control Point Certified' },
    { id: 7, src: '/7.jpeg', name: 'ISO', description: 'International Organization for Standardization' },
]

export function CertificationsArc() {
    const [activeCert, setActiveCert] = useState(certificates[0])

    return (
        <Section id="certifications" className="relative overflow-hidden bg-ocean-950 py-24">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-ocean-600/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-ocean-800/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header (Optional, if we want a main title outside the visual) */}
                <div className="mb-16 text-center md:mb-24">
                    <Reveal>
                        <h2 className="heading-font text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {siteContent.certifications.title}
                        </h2>
                        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                            {siteContent.certifications.description}
                        </p>
                    </Reveal>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative">

                    {/* LEFT: Main Display Circle (The "City of Aliso Viejo" equivalent) */}
                    <div className="relative z-20 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] flex-shrink-0">
                        {/* The Main Circle Border/Container */}
                        <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            {/* Background Image of the city (replaced by ocean/factory texture or the cert itself) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 to-ocean-950/90 z-10" />
                            <img
                                src="/image.png" // Using the main hero image or a placeholder as the subtle background
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
                            />

                            {/* Content Inside Main Circle */}
                            <div className="relative z-30 p-8 text-center flex flex-col items-center justify-center h-full w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCert.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col items-center"
                                    >
                                        {/* Active Cert High-Res Image */}
                                        <div className="w-48 h-48 sm:w-64 sm:h-64 mb-6 rounded-lg overflow-hidden bg-white/90 p-4 shadow-2xl flex items-center justify-center">
                                            <img
                                                src={activeCert.src}
                                                alt={activeCert.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-wide uppercase">
                                            {activeCert.name}
                                        </h3>
                                        <div className="h-px w-24 bg-white/30 my-4" />
                                        <p className="text-sm sm:text-base text-ocean-100 font-light max-w-xs">
                                            {activeCert.description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative concentric rings */}
                        <div className="absolute -inset-4 rounded-full border border-white/5 pointer-events-none" />
                        <div className="absolute -inset-12 rounded-full border border-white/5 pointer-events-none" />
                    </div>

                    {/* RIGHT: The Arc Navigation */}
                    {/* In the reference, the arc is on the right. We need to position 7 items along a curve.
              We can estimate the curve using rotation transforms. 
              Let's create a visual "Arc" line first.
          */}
                    <div className="relative h-[400px] w-full max-w-[400px] lg:h-[600px] lg:w-[200px] lg:ml-[-100px] flex items-center justify-center big-arc-container">

                        {/* The visually drawn curved line (SVG) */}
                        {/* This path needs to curve around the main circle. 
                 On Desktop: Vertical arc on the left or right? Reference has it on right.
                 Let's place it to the right of the main circle.
             */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block overflow-visible" viewBox="0 0 200 600">
                            {/* A large curve stroke */}
                            <path
                                d="M 20,50 C 120,200 120,400 20,550"
                                fill="none"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="2"
                            />
                        </svg>

                        {/* Mobile: Horizontal or Grid layout? The Arc is hard on mobile. 
                 Let's do a flex wrap for mobile and Arc for desktop. 
                 Actually, let's try to keep the circular feel but make it responsive.
             */}
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 lg:hidden">
                            {certificates.map((cert) => (
                                <button
                                    key={cert.id}
                                    onClick={() => setActiveCert(cert)}
                                    className={`relative p-1 rounded-full border-2 transition-all ${activeCert.id === cert.id
                                            ? 'border-ocean-300 scale-110'
                                            : 'border-white/10 text-white/50 hover:border-white/30'
                                        }`}
                                >
                                    <div className="w-12 h-12 bg-white rounded-full overflow-hidden p-1">
                                        <img src={cert.src} alt={cert.name} className="w-full h-full object-contain" />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Desktop Arc Layout - Using absolute positioning with calculated offsets */}
                        <div className="hidden lg:block absolute top-[50%] left-0 w-full -translate-y-[50%]">
                            {certificates.map((cert, index) => {
                                // Distribute 7 items along a vertical curve
                                // Total height roughly 500px.
                                // X position needs to bulge out.
                                // Let's use simple CSS translation assuming the container is relative.
                                // -3 to +3 range centered at 0
                                const offset = index - 3;
                                // Y spacing: 80px
                                const translateY = offset * 85;
                                // X curve: x = (y^2) / factor or sin wave. 
                                // Let's do a simple cos curve. Center items are further right (or left? in reference arc is convex towards content)
                                // The reference image has the arc convex towards the OUTSIDE.
                                // The main circle is on the left. The arc is on the right, curving AROUND the main circle.
                                // So the middle items should be CLOSEST to the circle (left) or FURTHEST?
                                // Image: Main circle Left. Arc Right. Curve bends Left (wrapping center).
                                // So top/bottom items are far right, center items are close to left.
                                const translateX = 30 + (Math.abs(offset) * 20); // 30px base, + more for outer items

                                return (
                                    <motion.button
                                        key={cert.id}
                                        onClick={() => setActiveCert(cert)}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: translateX, y: translateY }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`absolute left-0 top-1/2 -mt-8 flex items-center gap-4 group transition-all duration-300
                                ${activeCert.id === cert.id ? 'scale-110 z-20' : 'scale-100 z-10 hover:scale-105'}
                            `}
                                    >
                                        {/* The Circle Node */}
                                        <div className={`
                                w-20 h-20 rounded-full border-2 p-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)]
                                transition-colors duration-300 flex items-center justify-center
                                ${activeCert.id === cert.id
                                                ? 'border-ocean-200 bg-ocean-500/30'
                                                : 'border-white/10 bg-white/5 group-hover:border-white/30 text-white/60'}
                            `}>
                                            <div className="w-full h-full bg-white rounded-full p-1.5 overflow-hidden flex items-center justify-center">
                                                <img src={cert.src} className="w-full h-full object-contain" alt={cert.name} />
                                            </div>
                                        </div>

                                        {/* Label (visible on hover or active) */}
                                        <div className={`
                                text-left transition-all duration-300
                                ${activeCert.id === cert.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'}
                            `}>
                                            <span className="block text-sm font-bold text-white tracking-wider uppercase">{cert.name}</span>
                                        </div>
                                    </motion.button>
                                )
                            })}
                        </div>

                    </div>

                </div>
            </div>
        </Section>
    )
}
