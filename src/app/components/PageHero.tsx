import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  gradient?: string;
  icon?: React.ReactNode;
  badge?: string;
}

export function PageHero({ title, subtitle, image, gradient, icon, badge }: PageHeroProps) {
  return (
    <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {image ? (
        <div className="absolute inset-0">
          <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${gradient ?? 'bg-gradient-to-r from-blue-900/90 via-blue-800/75 to-blue-900/60'}`} />
        </div>
      ) : (
        <div className={`absolute inset-0 ${gradient ?? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700'}`} />
      )}

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl"
            >
              {icon}
            </motion.div>
          )}
          {badge && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" className="fill-white dark:fill-gray-950"/>
        </svg>
      </div>
    </section>
  );
}
