'use client'

import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import FuzzyOverlay from "./fuzzy";
import { Heart, Hotel, Star } from "lucide-react";
import Image from "next/image";


const Hotels = [
    {
        title:'Azure Oasis',
        stat:4.6,
        icon: <Hotel  />,
        desc:"Maldives, Maldives",  
        href:'/',
        originalPrice:'200',
        price:"150",
        src:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",      
    },
    {
        title:'Villas',
        stat:4.6,
        icon: <Hotel  />,
        desc:"Maldives, Maldives",  
        href:'/' ,
        originalPrice:'3000',
        price:"1500",
        src:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     
    },
    {
        title:'Elysee Retreat Hotel',
        stat:4.6,
        icon: <Hotel  />,
        desc:"Paris, French",  
        href:'/',
        originalPrice:'200',
        price:"150",
        src:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",      
    },
    {
        title:'Versailles Vista Inn Hotel',
        stat:4.6,
        icon: <Hotel  />,
        desc:"Strasbourg, France",  
        href:'/' ,
        originalPrice:'3000',
        price:"1500",
        src:"https://images.unsplash.com/photo-1612143241883-35889d1d65ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     
    },

]

const TopHotel = () => {

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120 },
        },
    };

    return (
        <section>
            <div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1  md:grid-cols-3 gap-8 max-w-9xl mx-auto "
                >
                    {Hotels.map((hotel, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group rounded-lg overflow-hidden border bg-card"
                            whileHover={{ y: -5 }}
                        >
                            <PinContainer title={hotel.title} href={hotel.href}>

                                
                                <div className="flex overflo-hidden flex-col p-4 tracking-tight text-slate-100/50 w-[30rem] h-[25rem]">
                                    <FuzzyOverlay />
                                    <div className="absolute top-0 right-0 px-4 py-7 rounded-bl-2xl rounded-tr-2xl">
                                        <span className="text-purple-400 text-sm font-medium flex ">
                                            {hotel.stat}
                                            <Star className="w-6 h-4" />
                                        </span>
                                    </div>
                                    <div className=" my-3 flex items-start  text-black justify-start mb-6 ">
                                        <div className="flex items-baseline gap-2">
                                                <span className="text-xl text-black font-bold">
                                                    ${hotel.price}
                                                </span>
                                                {hotel.originalPrice && <span className="text-muted-foreground line-through">${hotel.originalPrice}</span>}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                        {hotel.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {hotel.desc}
                                    </p>

                                    <div className="aspect-[4/3] relative">
                                        <Image
                                        src={ hotel.src || "/placeholder.svg"}
                                        alt={hotel.title}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                        />
                                        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                                        <Heart className="h-5 w-5" />
                                        </button>
                                    </div>
                                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-20" /> */}
                                </div>
                            </PinContainer>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        </section>

    )
}

export default TopHotel;
