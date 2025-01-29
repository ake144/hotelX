"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PromoCardProps {
  title: string
  discount: number
  validDate: string
  image: string
}

export function PromoCard({ title, discount, validDate, image }: PromoCardProps) {
  return (
    <motion.div
      className="relative h-[200px] rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
        <div className="p-6 text-white h-full flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-5xl font-bold mb-2">{discount}%</p>
          <p className="text-sm opacity-80">{validDate}</p>
        </div>
      </div>
    </motion.div>
  )
}

