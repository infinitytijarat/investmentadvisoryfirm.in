import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Briefcase } from 'lucide-react'

const services = [
  {
    icon: <Image src="/icons/audit-guidance.webp" alt="Audit & Assurance Icon" width={32} height={32} />,
    title: "Audit & Assurance",
    description: "Get great share market tips and make intraday profits while investing. Helping you maximize profits."
  },
  {
    icon: <Image src="/icons/stock-options.webp" alt="Stock Option Tips Icon" width={32} height={32} />,
    title: "Stock Option Tips",
    description: "We'll help you get most earnings choice guidelines and Index choice in Share Market with our proven methods."
  },
  {
    icon: <Image src="/icons/stock-futures.webp" alt="Stock Future Tips Icon" width={32} height={32} />,
    title: "Stock Future Tips",
    description: "Our shares tips have made proportion market investment easy. Make most money trading futures."
  },
  {
    icon: <Image src="/icons/hni-fo.webp" alt="HNI Equity Tips Icon" width={32} height={32} />,
    title: "HNI Equity Tips",
    description: "If you have high net worth, you can make big money without HNI Equity tips from our share market experts."
  },
  {
    icon: <Image src="/icons/index-options.webp" alt="Index Options Icon" width={32} height={32} />,
    title: "Index Options",
    description: "We offer you with day by day tips of NIFTY and Bank NIFTY stages and benefit huge income with the assist of through offer you share marketplace tips."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-500" />,
    title: "Strategic Planning",
    description: "Our tested share market strategy helps you strategize your funding for financial independence."
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/services-hero.jpg"
              alt="Services Background - Financial Charts Analysis"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Services</h1>
            <p className="text-lg md:text-xl text-gray-200 mt-2">Home &gt; Services</p>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="text-sm font-semibold tracking-wide uppercase text-green-600 dark:text-green-400">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Services Of Trading Expect Option</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
