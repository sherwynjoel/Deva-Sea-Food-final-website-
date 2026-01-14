
import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'

const certificates = [
    { id: 1, src: '/1.jpeg', name: 'FSSAI' },
    { id: 2, src: '/2.jpg', name: 'EU Compliance' },
    { id: 3, src: '/3.jpeg', name: 'EIC' },
    { id: 4, src: '/4.jpeg', name: 'FSSC 22000' },
    { id: 5, src: '/5.jpeg', name: 'GMP' },
    { id: 6, src: '/6.jpeg', name: 'HACCP' },
    { id: 7, src: '/7.jpeg', name: 'ISO' },
]

export function CertificationsRightArc() {
    return (
        <Section id="certifications" className="relative flex min-h-[700px] w-full items-center overflow-hidden bg-white text-ocean-950">

            {/* Background Decor - Subtle */}
            {/* A very light gradient to keep it corporate but not dead flat */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white -z-10" />

            <div className="container relative z-10 mx-auto grid h-full grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

                {/* Left Side: Heading & Content */}
                <div className="max-w-xl py-12 text-center lg:text-left">
                    <Reveal>
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-ocean-100 text-ocean-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h2 className="heading-font text-4xl font-bold tracking-tight text-ocean-900 sm:text-5xl lg:text-6xl">
                            Certifications <br />
                            <span className="text-ocean-600">& Compliance</span>
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Our commitment to quality is validated by global standards. We strictly adhere to international food safety regulations to ensure every product meets the highest benchmarks of safety and hygiene.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="rounded-full bg-ocean-50 px-4 py-2 text-sm font-medium text-ocean-800 border border-ocean-100">
                                100% Compliant
                            </div>
                            <div className="rounded-full bg-ocean-50 px-4 py-2 text-sm font-medium text-ocean-800 border border-ocean-100">
                                Globally Recognized
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Right Side: Large Semi-Circle with Orbiting Logos */}
                <div className="relative flex h-[500px] w-full items-center justify-center lg:h-full lg:justify-end">

                    {/* The Large Arc Shape aligned to the right */}
                    {/* Using a fixed large size and positioning it absolute on the right for desktop */}
                    <div className="hidden lg:block absolute right-[-20%] top-1/2 h-[140%] w-[70%] -translate-y-1/2 rounded-l-full border-[1px] border-slate-200 bg-slate-50/50 shadow-inner"></div>

                    {/* A second inner arc for the track */}
                    <div className="hidden lg:block absolute right-[-20%] top-1/2 h-[100%] w-[50%] -translate-y-1/2 rounded-l-full border-[2px] border-dashed border-ocean-200/40"></div>

                    {/* Container for the logos - Relative to this column */}
                    <div className="relative h-[400px] w-[400px] lg:h-[600px] lg:w-[600px] lg:right-[-150px]">
                        {/* 
                    Distribute items on a semi-circle curve facing LEFT.
                    Center of circle is approx at x=Width, y=Height/2.
                    Angles should go from approx 100 degrees to 260 degrees ?
                    Actually, let's just use CSS offset path or simple trig.
                 */}
                        {certificates.map((cert, index) => {
                            const total = certificates.length;
                            // Spread across 140 degrees (from 110 to 250)
                            // 180 is straight Left. 90 is Top. 270 is Bottom.
                            // We want a curve on the left side.
                            const startAngle = 100; // slightly more than top
                            const endAngle = 260; // slightly less than bottom
                            const angleRange = endAngle - startAngle;
                            const step = angleRange / (total - 1);
                            const angleDeg = startAngle + (index * step);

                            // Convert to radians for calculation if needed, or use rotate transform
                            // If we rotate a container centered at the standard Right-Center, we can push items out.

                            return (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="absolute left-1/2 top-1/2 -ml-10 -mt-10 lg:-ml-12 lg:-mt-12"
                                    style={{
                                        // Responsive Radius
                                        // We use CSS transform to push it out from center
                                        // Center is 50% 50%. 
                                        // We rotate the frame, translate OUT, then rotate content back.
                                        transform: `rotate(${angleDeg}deg) translate(clamp(160px, 25vw, 320px)) rotate(${-angleDeg}deg)`
                                    }}
                                >
                                    {/* The Logo Circle */}
                                    <div className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-ocean-200 lg:h-24 lg:w-24">
                                        <img
                                            src={cert.src}
                                            alt={cert.name}
                                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />

                                        {/* Tooltip */}
                                        <div className="absolute top-full mt-3 opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap rounded-md bg-ocean-900 px-3 py-1 text-xs text-white shadow-lg pointer-events-none z-20">
                                            {cert.name}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </Section>
    )
}
