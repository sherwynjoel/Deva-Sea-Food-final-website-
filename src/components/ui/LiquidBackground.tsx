
import { motion } from 'framer-motion';

export function LiquidBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-ocean-500/5" /> {/* Base tint */}

            {/* Blob 1 - Top Left */}
            <motion.div
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-ocean-400/20 rounded-full blur-[80px] mix-blend-screen"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, -100, 0],
                    scale: [1, 1.2, 0.9, 1],
                    rotate: [0, 45, -20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "mirror"
                }}
            />

            {/* Blob 2 - Bottom Right */}
            <motion.div
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-ocean-300/20 rounded-full blur-[100px] mix-blend-screen"
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.1, 0.9, 1],
                    rotate: [0, -30, 20, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "mirror"
                }}
            />

            {/* Blob 3 - Center Moving */}
            <motion.div
                className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] bg-ocean-200/20 rounded-full blur-[90px] mix-blend-overlay"
                animate={{
                    x: [0, 150, -150, 0],
                    y: [0, -100, 150, 0],
                    scale: [1, 1.3, 0.8, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror"
                }}
            />

            {/* Blob 4 - Accent */}
            <motion.div
                className="absolute top-[10%] right-[20%] w-[30vw] h-[30vw] bg-ocean-600/10 rounded-full blur-[60px]"
                animate={{
                    x: [0, -50, 50, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror"
                }}
            />
        </div>
    );
}
