
import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'

// Certificate data mapping
const certificates = [
    { id: 1, src: '/1.jpeg', name: 'FSSAI', position: -75 },
    { id: 2, src: '/2.jpg', name: 'EU Compliance', position: -50 },
    { id: 3, src: '/3.jpeg', name: 'EIC', position: -25 }, // Replaced BRCGS with EIC based on available assets
    { id: 4, src: '/4.jpeg', name: 'FSSC 22000', position: 0 },
    { id: 5, src: '/5.jpeg', name: 'GMP', position: 25 },
    { id: 6, src: '/6.jpeg', name: 'HACCP', position: 50 },
    { id: 7, src: '/7.jpeg', name: 'ISO', position: 75 },
]

export function CertificationsCircle() {
    return (
        <Section id="certifications" className="relative overflow-hidden bg-ocean-950 py-24">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-ocean-900/50" />

            <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">

                {/* Left Content / Mobile Header */}
                <div className="lg:hidden text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Certifications & Compliance</h2>
                    <p className="text-white/70">We adhere to strict regulatory and certification requirements.</p>
                </div>

                {/* The Circular Design - Desktop: Left aligned, Mobile: Centered */}
                <div className="col-span-2 relative flex items-center justify-center lg:justify-start lg:pl-20">

                    {/* Main Visual Container */}
                    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">

                        {/* 1. Inner Circle (White/Light) with Text */}
                        <div className="absolute inset-[25%] rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.3)] z-20">
                            <div className="text-center p-4">
                                <h2 className="heading-font text-xl sm:text-2xl font-bold text-ocean-900 leading-tight">
                                    Certifications<br />&<br />Compliance
                                </h2>
                            </div>
                        </div>

                        {/* 2. The Gray Arc (Thick Ring) */}
                        {/* We create a full ring but mask it or just use it as a base. 
                    The image shows a solid gray ring surrounding the white circle.
                */}
                        <div className="absolute inset-0 rounded-full border-[60px] sm:border-[100px] border-white/10 z-10" />

                        {/* 3. Logos placed on the ring */}
                        {/* 
                    Radius calculation: 
                    If width is 500px, radius is 250px.
                    The ring sits between radius 150px and 250px (approx).
                    Center of ring is at radius 200px.
                */}
                        <div className="absolute inset-0 z-30 animate-spin-slow-reverse">
                            {certificates.map((cert) => {
                                // Position calculations
                                // angle 0 is 3 o'clock (Right)
                                const angleRad = (cert.position * Math.PI) / 180
                                // Since we are placing items on the perimeter, we can use simple CSS rotation or trig

                                return (
                                    <motion.div
                                        key={cert.id}
                                        className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 bg-white rounded-full p-2 shadow-lg flex items-center justify-center"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (cert.id * 0.1) }}
                                        style={{
                                            transform: `rotate(${cert.position}deg) translate(140px) rotate(${-cert.position}deg)`, // Mobile Radius
                                        }}
                                    >
                                        {/* Desktop Radius Override via Media Query or CSS variable? 
                                    Tailwind arbitrary values are static. Let's use a responsive radius approach if possible, 
                                    or just pick a safe middle ground. 
                                    Wait, 'translate(140px)' is roughly right for 300px width (150 radius).
                                    For 500px width (250 radius), we need translate(200px).
                                */}
                                        <style jsx>{`
                                    @media (min-width: 640px) {
                                        div[data-cert="${cert.id}"] {
                                            transform: rotate(${cert.position}deg) translate(200px) rotate(${-cert.position}deg) !important;
                                        }
                                    }
                                `}</style>
                                        <div data-cert={cert.id} style={{
                                            transform: `rotate(${cert.position}deg) translate(120px) rotate(${-cert.position}deg)`
                                        }} className="w-full h-full sm:transform-none transform-gpu transition-all duration-500 hover:scale-110">
                                            <img src={cert.src} alt={cert.name} className="w-full h-full object-contain" />
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Decorative Orbit lines (outer) */}
                    <div className="absolute w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full border border-white/5 pointer-events-none" />

                </div>
            </div>
        </Section>
    )
}
