"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            Horizone
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Hotel
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Flight
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Train
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Travel
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Car Rental
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    </motion.header>
  )
}

