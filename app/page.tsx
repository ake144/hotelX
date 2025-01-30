"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PropertyTypeCard } from "@/components/property-type-card"
import { HotelCard } from "@/components/hotel-card"
import { PromoCard } from "@/components/promo-card"
import { SearchForm } from "@/components/search-form"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Logos } from "@/components/logo-cloud"
import TopHotel from "@/components/tophotelCard"
import { ImagesShow } from "@/components/imagesParallax"
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card"
import { ImageSliderCta } from "@/components/imageSlider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury hotel room"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute bottom-0 w-full pb-6  bg-gradient-to-b from-transparent to-background/80">
            <div className="container  items-center justify-center mx-auto px-4 pt-32">
              <motion.h1
                className="text-4xl flex md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Find Your Best Staycation
              </motion.h1>
              <SearchForm />
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="container mx-auto px-4 py-16">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Discover your destination   <br />
            <span className="text-sm  text-gray-500">
               Explore our range of property types for every traveller&apos;s perferecnces
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PropertyTypeCard
              title="Villas"
              count="12,984"
              image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <PropertyTypeCard
              title="Apartments"
              count="10,627"
              image="https://images.unsplash.com/photo-1661529221636-b1f8acdd3d11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <PropertyTypeCard
              title="Resorts"
              count="367"
              image="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <PropertyTypeCard
              title="Cottages"
              count="263"
              image="https://images.unsplash.com/photo-1539081628726-fabb7960a9e0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>

        {/* Hotel Listings */}
        <section className="container mx-auto px-4 py-16">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Top trending hotels worldwide  <br />
            <span className="text-sm  text-gray-500">
               Discover the most trending hotels worldwide for an unforgettable expriecnce.
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HotelCard
              name="Montmartre Majesty Hotel"
              location="Marseille"
              rating={4.7}
              reviews={2578}
              price={160}
              originalPrice={250}
              image="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <HotelCard
              name="Elysee Retreat Hotel"
              location="Paris"
              rating={4.8}
              reviews={2578}
              price={150}
              originalPrice={250}
              image="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <HotelCard
              name="Versailles Vista Inn Hotel"
              location="Strasbourg"
              rating={4.7}
              reviews={2578}
              price={220}
              originalPrice={250}
              image="https://images.unsplash.com/photo-1612143241883-35889d1d65ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <HotelCard
              name="Loire Luxury Lodge"
              location="Marseille"
              rating={4.7}
              reviews={2578}
              price={160}
              originalPrice={250}
              image="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <HotelCard
              name="Mompele  Majesty Hotel"
              location="Marseille"
              rating={4.5}
              reviews={2578}
              price={160}
              originalPrice={250}
              image="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>


         {/* Hotel Listings */}
         <section className="container mx-auto px-4 py-16">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Most visited hotel this month  <br />
            <span className="text-sm  text-gray-500">
               Trending exceptional hospitality that captivated travelers this month
            </span>
          </motion.h2>
              <TopHotel  />
        </section>

        {/* Promo Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get promo for a cheaper price
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PromoCard
              title="Get Extra Discount at Azure Oasis Hotel"
              discount={50}
              validDate="Valid only on 14 Jan - 20 Jan 2024"
              image="https://images.unsplash.com/photo-1494778752932-64ee27ba2a37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <PromoCard
              title="Exclusive Deals Just For You"
              discount={75}
              validDate="Valid only on 16 Jan - 28 Jan 2024"
              image="https://images.unsplash.com/photo-1493879351345-2ca88b05346b?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>

        <section  className="container mx-auto px-4 py-16">
          <Logos  />
        </section>

          <section className="container items-center justify-center  flex mx-auto px-4 py-16">
             <TextRevealCard
              text="You know the business"
              revealText="Life is better in flip flops"
            >
              <TextRevealCardTitle>
              Time for some Vitamin Sea.
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Some of your best ideas come when you’re on vacation.
              </TextRevealCardDescription>
            </TextRevealCard>
          </section>
        <section  className="container mx-auto px-4 py-16">
        <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Beyond acommodation
            <br />
            <span className="text-sm  text-gray-500">
                explore more to get your comfort zone and  creating memories of a lifetime
            </span>
          </motion.h2>

          <ImagesShow  />
        </section>

        <section className="container mx-auto px-4 py-16">
          <ImageSliderCta  />
        </section>
      </main>

      <Footer />
    </div>
  )
}

