"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Star } from "lucide-react"

interface HotelCardProps {
  name: string
  location: string
  rating: number
  reviews: number
  price: number
  originalPrice?: number
  image: string
}

export function HotelCard({ name, location, rating, reviews, price, originalPrice, image }: HotelCardProps) {
  return (
    <motion.div
      className="group rounded-lg overflow-hidden border bg-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-muted-foreground mb-2">{location}</p>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span>{rating}</span>
          <span className="text-muted-foreground">({reviews} Reviews)</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">${price}</span>
          {originalPrice && <span className="text-muted-foreground line-through">${originalPrice}</span>}
        </div>
      </div>
    </motion.div>
  )
}

