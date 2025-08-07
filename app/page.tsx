import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceCard } from "@/components/service-card"
import { Star, Briefcase } from 'lucide-react'

const services = [
  {
    icon: <Image src="/icons/audit-guidance.webp" alt="Audit & Guidance Icon" width={32} height={32} />,
    title: "Audit & Guidance",
    description: "Get great tips that will make you a net profitable trader. We provide our clients with daily Nifty & Bank Nifty levels."
  },
  {
    icon: <Image src="/icons/stock-options.webp" alt="Stock Option Tips Icon" width={32} height={32} />,
    title: "Stock Option Tips",
    description: "We'll help you to invest in various market segments with our expert advice."
  },
  {
    icon: <Image src="/icons/stock-futures.webp" alt="Stock Future Tips Icon" width={32} height={32} />,
    title: "Stock Future Tips",
    description: "Our clients face no problem in stock market trading because we provide valuable information."
  },
  {
    icon: <Image src="/icons/hni-fo.webp" alt="HNI & F&O Tips Icon" width={32} height={32} />,
    title: "HNI & F&O Tips",
    description: "If you feel you are not able to make big money without HNI Equity tips from our share market experts."
  },
  {
    icon: <Image src="/icons/index-options.webp" alt="Index Options Icon" width={32} height={32} />,
    title: "Index Options",
    description: "We offer our clients daily Nifty & Bank Nifty levels. You can trade in the market with the assist of through offer you share market experts."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-500" />,
    title: "Strategic Planning",
    description: "Our share market experts will help you strategize your finances for financial independence."
  }
];

function TestimonialCard({ name, quote }: { name: string, quote: string }) {
  return (
    <Card className="bg-white dark:bg-gray-800 p-6 flex flex-col items-center text-center">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">&ldquo;{quote}&rdquo;</p>
      <h4 className="font-bold text-lg text-gray-900 dark:text-gray-50">{name}</h4>
    </Card>
  )
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/homepage-hero.jpg"
              alt="Hero Background - Financial Market Analysis"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Learn The Best Investments with Expert Advisors
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Our organization was founded to provide unbiased technical analysis from qualified professionals to our clients. We help you navigate the stock market with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <Link href="/packages">See Packages</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about-summary" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Investment Advisory Firm</h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                  We are a leading financial management company in India, providing a wide range of financial services to a large and diverse client base that includes corporations, financial institutions, and individuals.
                </p>
                 <div className="flex">
                  <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/intro-image.jpeg"
                  alt="About Us"
                  width={550}
                  height={310}
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="flex justify-center lg:order-last">
                <Image
                  src="/believe-image.jpeg"
                  alt="What We Believe"
                  width={550}
                  height={310}
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:max-w-md"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">What We Believe</h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                  We believe one can be a net-profitable trader if they have a primary source of income and trade with a secondary source of income. We provide our clients with advisory services from our end to protect, not just pursue their growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-green-50/50 dark:bg-green-950/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-sm font-semibold tracking-wide uppercase text-green-600 dark:text-green-400">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Services of Investment Advisory Firm</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-20 md:py-32 lg:py-40">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/stockbg.jpg)',
              filter: 'brightness(0.5)'
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl text-white text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Spend time learning, not losing.
              </h2>
              <p className="text-lg md:text-xl text-gray-200">
                Our stock tips simplify share market trading. We have figured the maximum profit.
              </p>
              <Button size="lg" variant="destructive" asChild>
                <Link href="/contact">Join Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12 text-gray-900 dark:text-gray-50">What Our Customers Say About Us!!</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <TestimonialCard name="Kishan Raval" quote="I have been a client of this firm for over 10 years, and I have always been impressed with their level of expertise and professionalism. They have helped me to achieve my financial goals over the years, and I have always felt confident that my investments are in good hands." />
              <TestimonialCard name="Anil Patil" quote="I was new to stock market trading when I started working with them. They took the time to explain everything to me in a clear and concise way, and they helped me to develop a trading strategy that met my goals and risk tolerance. I am so grateful for their guidance and support." />
              <TestimonialCard name="Hardik Dave" quote="I have been a client for several years, and I have always been happy with the results. They have helped me to make some very profitable investments, and they have always been there to answer my questions and provide me with sound advice. I feel confident that my investments are in good hands." />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
