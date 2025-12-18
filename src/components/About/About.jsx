import React, { useState } from 'react'
import { motion, scale } from 'framer-motion'
import { features, stats, teamMembers } from '../../assets/dummydata'

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3c2c21] to-[#1a120b] text-amber-50 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-600">
            Culinary Express
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Crafting unforgettable dining experiences delivered to your doorstep.
          </motion.p>
        </div>
      </motion.section>

      {/* Features */}
      <section className="py-12 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-500/30 rounded blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="relative bg-[#3c2c21]/90 backdrop-blur-lg rounded-3xl overflow-hidden border border-amber-600/30 hover:border-amber-500 transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent" />
                  </div>

                  <div className="p-8">
                    <div className="text-amber-500 mb-4 inline-block">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-amber-100">{f.title}</h3>
                    <p className="text-amber-100">{f.text}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#1a120b] to-[#3c2c21]/90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, type: 'spring' }}
                className="relative group h-48"
                onHoverStart={() => setHoveredStat(i)}
                onHoverEnd={() => setHoveredStat(null)}
                animate={{ scale: hoveredStat === i ? 1.05 : 1, zIndex: hoveredStat === i ? 10 : 1 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                >
                  <div className="relative h-full bg-[#3c2c21]/40 backdrop-blur-lg rounded-xl border-2 border-amber-600/30 p-6 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        background: [
                          'linear-gradient(45deg, #3c2c21 0%, #1a120b 50%, #3c2c21 100%)',
                          'linear-gradient(45deg, #3c2c21 0%, #1a120b 80%, #3c2c21 100%)',
                          'linear-gradient(45deg, #3c2c21 0%, #1a120b 50%, #3c2c21 100%)',
                        ],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />

                    <div className="absolute inset-0 rounded-xl shadow-lg shadow-amber-900/20" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center">
                      <motion.div
                        className="mb-4 p-3 rounded-full bg-amber-900/30 border border-amber-700/30"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <Icon className="w-8 h-8 text-amber-500/90" />
                      </motion.div>

                      <div className="text-4xl font-bold mb-1 bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 text-transparent">
                        {s.number}
                      </div>

                      <motion.div
                        className="text-sm uppercase tracking-widest font-medium text-amber-100/80"
                        animate={{
                          letterSpacing: hoveredStat === i ? '0.15em' : '0.1em',
                          textShadow: hoveredStat === i ? '0 0 8px rgba(245,158,11,0.4)' : 'none',
                        }}
                      >
                        {s.label}
                      </motion.div>
                    </div>
                        <motion.div className="absolute inset-0 bg-amber-900/10 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredStat === i ? 1 : 0 }} />
                    </div>
                    </motion.div>
                    <motion.div className="absolute inset-x-4 bottom-0 h-8 bg-amber-900/30 rounded-xl"
                    animate ={{
                        opacity: hoveredStat === i ? 0.4 : 0.2 ,
                        scale: hoveredStat === i ? 0.9: 0.8
                    }} />

            </motion.div>
            )
          })}
        </div>
      </section>


      {/* Team */}

<section className="py-16 px-4 relative">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center mb-12 text-amber-100"
    >
      Meet Our <span className="text-amber-500">Culinary Artists</span>
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
      {teamMembers.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ delay: m.delay ?? i * 0.2 }}
          className="relative group"
        >
          <div className="relative h-full bg-[#3c2c21]/90 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-amber-600/30 hover:border-amber-500 transition-all duration-300">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <motion.img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-6 text-center flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-amber-100">{m.name}</h3>
              <p className="text-amber-500 text-lg font-medium font-cursive">
                {m.role}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        
    </div>
  )
}

export default About
