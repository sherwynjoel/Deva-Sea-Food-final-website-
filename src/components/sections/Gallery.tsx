import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'
import { GlassCard } from '../ui/GlassCard'

export function Gallery() {
    const { title, subtitle, video, images } = siteContent.gallery

    return (
        <Section id="gallery">
            <Reveal>
                <div className="flex flex-col gap-3 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.22em] text-ocean-950/70 uppercase">Media</p>
                        <h2 className="heading-font mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-ocean-950">
                            {title}
                        </h2>
                        <p className="mt-3 max-w-2xl text-ocean-950/75 sm:text-lg">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </Reveal>

            {/* Video Section */}
            <Reveal delay={0.1}>
                <GlassCard className="p-2 sm:p-3 mb-12 overflow-hidden bg-white/40">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/5 shadow-inner">
                        {/* Note: Video requires user to provide documentary.mp4 to public folder */}
                        <video
                            controls
                            className="w-full h-full object-cover"
                            poster={video.poster}
                            preload="metadata"
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </GlassCard>
            </Reveal>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {images.map((img, idx) => (
                    <Reveal key={`${img.src}-${idx}`} delay={0.1 + (idx * 0.05)} className="h-full">
                        <GlassCard className="p-2 h-full overflow-hidden group hover:bg-white/60 transition-colors">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-ocean-100">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                    <p className="text-xs sm:text-sm font-medium text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        {img.alt}
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}
