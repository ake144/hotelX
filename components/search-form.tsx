"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SearchForm() {
  return (
    <motion.div
      className="bg-white  items-center rounded-lg p-4 shadow-lg w-[90%]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r p-2">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <label className="text-sm font-medium">Location</label>
            <input type="text" placeholder="Find location" className="w-full outline-none" />
          </div>
        </div>
        <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r p-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <label className="text-sm font-medium">Check-in and Check-out Date</label>
            <input type="text" placeholder="Add dates" className="w-full outline-none" />
          </div>
        </div>
        <div className="flex items-center gap-2 p-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <label className="text-sm font-medium">Guests and Rooms</label>
            <input type="text" placeholder="1 guest, 1 room" className="w-full outline-none" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button>Search</Button>
      </div>
    </motion.div>
  )
}

