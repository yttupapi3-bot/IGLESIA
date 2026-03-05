"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"


const SPLASH_DURATION = 5000
const FADE_OUT_DURATION = 0.9

const line1 = "BIENVENIDO"
const line2 = "!AL LUGAR DE "
const line3 = "TU MILAGRO¡"

/* ─── Liquid Puddle SVG ─── */
function LiquidPuddle({ index, delay }: { index: number; delay: number }) {
  const id = `puddle-${index}`
  return (
    <motion.div
      className="absolute inset-0 flex items-end justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0] }}
      transition={{ delay, duration: 1.2, ease: "easeInOut" }}
      style={{ pointerEvents: "none" }}
    >
      <svg
        viewBox="0 0 60 30"
        className="h-[80%] w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={id}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
        <g filter={`url(#${id})`}>
          <motion.ellipse
            cx="30"
            cy="28"
            rx="20"
            ry="3"
            fill="#1a1a2e"
            initial={{ ry: 0, opacity: 0 }}
            animate={{
              ry: [0, 5, 3, 0],
              opacity: [0, 0.6, 0.4, 0],
            }}
            transition={{
              delay,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="30"
            cy="26"
            r="4"
            fill="#1a1a2e"
            initial={{ cy: 28, r: 0 }}
            animate={{
              cy: [28, 10, 28],
              r: [0, 6, 0],
            }}
            transition={{
              delay: delay + 0.1,
              duration: 1.0,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>
    </motion.div>
  )
}

/* ─── Single Liquid Letter ─── */
function LiquidLetter({
  char,
  globalIndex,
}: {
  char: string
  globalIndex: number
}) {
  const baseDelay = 1.0 + globalIndex * 0.065
  const isSpace = char === " "

  if (isSpace) {
    return <span className="inline-block w-[0.3em]" />
  }

  return (
    <span className="relative inline-block">
 
      {/* The letter itself — rises from liquid pool */}
      <motion.span
        className="relative inline-block font-black"
        style={{
          willChange: "transform, opacity, filter",
          transformOrigin: "bottom center",
        }}
        initial={{
          opacity: 0,
          y: 50,
          scaleY: 2.2,
          scaleX: 0.1,
          filter: "blur(16px)",
          rotateX: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scaleY: 1,
          scaleX: 1,
          filter: "blur(0px)",
          rotateX: 0,
        }}
        transition={{
          delay: baseDelay,
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
          opacity: {
            delay: baseDelay,
            duration: 0.35,
          },
          y: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: baseDelay,
          },
          scaleY: {
            delay: baseDelay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
          scaleX: {
            delay: baseDelay + 0.08,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
          filter: {
            delay: baseDelay + 0.15,
            duration: 0.5,
          },
          rotateX: {
            delay: baseDelay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      >
        {/* Drip / stretch shadow */}
        <motion.span
          className="absolute inset-0 inline-block"
          style={{
            transformOrigin: "bottom center",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to bottom, rgba(26,26,46,0.3), transparent)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
          initial={{ scaleY: 3, opacity: 0.6, y: 10 }}
          animate={{ scaleY: 1, opacity: 0, y: 0 }}
          transition={{
            delay: baseDelay + 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
          aria-hidden
        >
          {char}
        </motion.span>

        {char}
      </motion.span>

      {/* Wobble / jelly settle after landing */}
      <motion.span
        className="pointer-events-none absolute inset-0 inline-block font-black text-transparent"
        style={{
          transformOrigin: "bottom center",
          WebkitTextStroke: "1px rgba(26,26,46,0.08)",
        }}
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: [1, 0.92, 1.06, 0.97, 1],
          scaleX: [1, 1.06, 0.95, 1.03, 1],
        }}
        transition={{
          delay: baseDelay + 0.55,
          duration: 0.6,
          ease: "easeInOut",
        }}
        aria-hidden
      >
        {char}
      </motion.span>
    </span>
  )
}

/* ─── Animated Text Line ─── */
function LiquidLine({
  text,
  startIndex,
  className,
}: {
  text: string
  startIndex: number
  className?: string
}) {
  return (
    <div
      className={`flex flex-wrap items-end justify-center gap-x-0 ${className ?? ""}`}
      style={{ perspective: "600px" }}
    >
      {text.split("").map((char, i) => (
        <LiquidLetter key={i} char={char} globalIndex={startIndex + i} />
      ))}
    </div>
  )
}

/* ─── Ripple Ring around icon ─── */
function RippleRing({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-foreground/20"
      initial={{ scale: 1, opacity: 0.5 }}
      animate={{ scale: 3, opacity: 0 }}
      transition={{
        delay,
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 1.5,
      }}
    />
  )
}

/* ─── Background Liquid Blobs ─── */
function LiquidBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute h-full w-full" viewBox="0 0 800 600">
        <defs>
          <filter id="goo-bg">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
              result="goo"
            />
          </filter>
        </defs>
        <g filter="url(#goo-bg)" opacity="0.04">
          <motion.circle
            cx="400"
            cy="300"
            r="100"
            fill="#1a1a2e"
            animate={{
              cx: [400, 450, 350, 400],
              cy: [300, 250, 350, 300],
              r: [100, 130, 90, 100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="350"
            cy="350"
            r="80"
            fill="#1a1a2e"
            animate={{
              cx: [350, 300, 420, 350],
              cy: [350, 310, 380, 350],
              r: [80, 100, 70, 80],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="450"
            cy="260"
            r="60"
            fill="#1a1a2e"
            animate={{
              cx: [450, 500, 380, 450],
              cy: [260, 300, 240, 260],
              r: [60, 80, 50, 60],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      </svg>
    </div>
  )
}

/* ─── Main Splash Screen ─── */
export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true
    const timer = setTimeout(() => setIsVisible(false), SPLASH_DURATION)
    return () => clearTimeout(timer)
  }, [])

  const idx1Start = 0
  const idx2Start = line1.length + 1
  const idx3Start = idx2Start + line2.length + 1

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_OUT_DURATION, ease: "easeInOut" }}
        >
     

          {/* Radial glow */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(43,106,138,0.06) 0%, transparent 70%)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          {/* Church icon with bounce + ripples */}
          <div className="relative mb-12">
            <RippleRing delay={0.3} />
            <RippleRing delay={1.0} />
            <RippleRing delay={1.7} />
            <motion.div
              className="relative flex h-24 w-24 items-center justify-center rounded-full bg-secondary"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                scale: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: { duration: 0.4 },
              }}
            >
              <motion.div
                animate={{
                  y: [0, -16, 0, -10, 0, -5, 0],
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <img 

  src="/images/logo.png" 

  alt="logo.png" 

  className="h-24 w-24 object-contain" 

  />
</motion.div>
    </motion.div>
  </div>
          {/* Liquid text — 3 lines */}
          <div className="relative space-y-1 px-4 text-center" style={{ fontFamily: "'Britannic Bold', serif" }}>
            <LiquidLine
              text={line1}
              startIndex={idx1Start}
              className="text-[clamp(1.8rem,6vw,3.5rem)] leading-none tracking-[0.05em] text-foreground"
            />
            <LiquidLine
              text={line2}
              startIndex={idx2Start}
              className="text-[clamp(1.2rem,4vw,2.2rem)] leading-none tracking-[0.08em] text-foreground/70"
            />
            <LiquidLine
              text={line3}
              startIndex={idx3Start}
              className="text-[clamp(1.8rem,6vw,3.5rem)] leading-none tracking-[0.05em] text-foreground"
            />

            {/* Decorative line reveal */}
            <motion.div
              className="mx-auto mt-5 h-[2px] rounded-full bg-foreground/20"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "50%", opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.7, ease: "easeOut" }}
            />
          </div>

          {/* Subtitle — church name */}
          <motion.p
            className="mx-auto mt-8 w-full max-w-md text-center text-[clamp(0.75rem,2.5vw,0.9rem)] font-semibold tracking-[0.08em] text-foreground/50 uppercase"
            style={{ textWrap: "balance" }}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 3.9,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              opacity: { delay: 3.9, duration: 0.6 },
              y: { delay: 3.9, type: "spring", stiffness: 100, damping: 15 },
            }}
          >
            Jesucristo Manantial de Vida Rivas
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
