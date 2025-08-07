import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/about-hero.jpg"
              alt="About Us Background - Modern Financial District"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
            <p className="text-lg md:text-xl text-gray-200 mt-2">Home &gt; About Us</p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-green-600 dark:text-green-400">Investment Advisory Firm, THE GROWTH INVESTOR</p>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50 mt-2">About Us</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Investment Advisory Firm is a leading financial management company in India, providing a wide range of financial services to a large and diverse client base that includes corporations, financial institutions, and individuals.
                </p>
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">Our Mission</AccordionTrigger>
                    <AccordionContent>
                      Our mission is to provide our clients with access to a comprehensive range of financial products and services, and to help them achieve their financial goals. We are committed to providing our clients with the highest level of customer service and to building long-term relationships with them.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">Our Vision</AccordionTrigger>
                    <AccordionContent>
                      This statement reiterates the company's commitment to helping its clients succeed. It suggests that the company is not just interested in providing its clients with financial products and services, but also in helping them achieve their long-term financial goals.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/about-us-main.jpeg"
                  alt="Finger pointing at stock chart"
                  width={550}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              We are committed to providing our clients with the tools and resources they need to achieve their financial goals. Our team of experienced and qualified professionals is dedicated to providing our clients with the highest level of customer service and to helping them make informed investment decisions. We also offer our clients access to a state-of-the-art technology platform that makes it easy to trade and manage their investments.
            </p>
          </div>
        </section>

        <WhyChooseUs />

        <StatsSection />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Our Packages</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">We provide you a best packages of our plan that can lead a better future.</p>
              <Button asChild size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white">
                <Link href="/packages">View All Packages</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
