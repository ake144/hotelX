"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface PropertyTypeCardProps {
  title: string
  count: string
  image: string
}

export function PropertyTypeCard({ title, count, image }: PropertyTypeCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="flex items-center">
          {count} available
          <ArrowRight className="ml-2 h-4 w-4" />
        </p>
      </div>
    </motion.div>
  )
}

