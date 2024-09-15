'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const partners = [
  { name: 'MatchVision.AI' },
  { name: 'QuantCore Ventures LLC' },
  { name: 'FutureTech' },
  { name: 'Digital Acceleration Partners' },
  { name: 'Indigo Financial A&C LLC' },
  { name: 'Minutes Matter Transportation' },
  { name: 'LK Holdings Group' },
  { name: 'I-Venture Immersive' },
  { name: 'MongoDB Cloud' },
]

export default function PartnerSlider() {
    const controls = useAnimation()
  
    useEffect(() => {
      controls.start({
        x: [0, -100 * partners.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    }, [controls])
  
    return (
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Partner EcoSystem</h2>
          <div className="relative">
            <motion.div 
              className="flex"
              animate={controls}
              style={{ width: `${partners.length * 280}px` }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] px-4"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg h-40 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:from-gray-700 hover:to-gray-600 group">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-100 text-center mb-2 group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
  