import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingCard } from "@/components/pricing-card"

const stockOptionPackages = [
  {
    title: "Option Silver Recovery",
    price: "26,999",
    features: [
      "Get proper Target & Stop-loss",
      "Get upto 2 Tips per Day With upto 75% Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target Per Tips 4000 To 6000",
      "Capital Required Upto 50K",
    ],
  },
  {
    title: "Option Pro Recovery",
    price: "38,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 2 to 3 tips per day with 80% upto Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 6000 to 9000",
      "Capital required Upto 70k",
    ],
    isHighlighted: true,
  },
  {
    title: "Option Gold Recovery",
    price: "51,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 2 to 4 tips per day with 80% upto Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 10000 to 15000",
      "Capital required Upto 1 lakh",
    ],
  },
];

const bestPricePackages = [
  {
    title: "Option Diamond Recovery",
    price: "74,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 3 to 5 tips per day with 80% upto Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 15000 to 20000",
      "Capital required Upto 1.50 Lakh",
    ],
  },
  {
    title: "Option Jackpot Diamond Recovery",
    price: "1,05,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 4 to 6 tips per day Jackpot with 85% Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 20000 to 25000",
      "Capital required Upto 2.50Lakh",
    ],
  },
  {
    title: "HNI Silver Recovery",
    price: "1,67,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 3 to 5 tips per day with 85% upto high Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 30000 to 40000",
      "Capital required Upto 3Lakh to 3.50Lakh",
    ],
  },
  {
    title: "HNI Pro Recovery",
    price: "2,31,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 3 to 4 HNI tips per day with 85% high Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 50000 to 60000",
      "Capital required Upto 4Lakh to 5Lakh",
    ],
  },
  {
    title: "HNI Gold Recovery",
    price: "3,43,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 3 to 5 HNI tips per day with 85% high Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 60000 to 70000",
      "Capital required Upto 5Lakh to 6Lakh",
    ],
  },
  {
    title: "HNI Diamond Recovery",
    price: "4,56,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 3 to 5 HNI tips per day with 90% high Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 80000 to 90000",
      "Capital required Upto 7Lakh to 8Lakh",
    ],
  },
  {
    title: "HNI Premium Silver Recovery",
    price: "5,47,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 4 to 5 HNI tips per day with 90% high Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 80000 to 1 Lakh",
      "Capital required Upto 8Lakh to 10Lakh",
    ],
  },
  {
    title: "HNI Premium Pro Recovery",
    price: "7,12,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 2 to 4 HNI tips per day with 95% very high Accuracy",
      "Get Personal Relationship Manager",
      "Profit target per tips Rs.1,25,000-Rs.1,50,000",
      "Profit Target per tips 1Lakh to 1.50Lakh",
      "Capital required Upto 10Lakh to 12Lakh",
    ],
  },
  {
    title: "HNI Premium Gold Recovery",
    price: "8,23,999",
    features: [
      "Get proper target & Stop-loss",
      "Get upto 3 to 5 HNI tips per day with 95% very high Accuracy",
      "Get Personal Relationship Manager",
      "Profit Target per tips 2Lakh to 4Lakh",
      "Capital required Upto 15Lakh to 20Lakh",
    ],
  },
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/packages-hero.jpg"
              alt="Packages Background - Investment & Financial Growth"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Packages</h1>
            <p className="text-lg md:text-xl text-gray-200 mt-2">Home &gt; Packages</p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-wide uppercase text-green-600 dark:text-green-400">Our Plans</p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Stock Option Intraday</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
              {stockOptionPackages.map((pkg, index) => (
                <PricingCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Best Price & Plan</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">We provide you a best packages of our plan that can lead a better future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
              {bestPricePackages.map((pkg, index) => (
                <PricingCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
