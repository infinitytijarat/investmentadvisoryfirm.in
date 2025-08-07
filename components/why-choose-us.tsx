import Image from "next/image"
import { Star } from 'lucide-react'

function ChoiceItem({ title, description }: { title: string, description: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mt-1 flex-shrink-0">
        <Star className="h-5 w-5 text-green-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </li>
  )
}

export function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">Why Choose Us?</h2>
            <ul className="space-y-4">
              <ChoiceItem title="Experience And Expertise" description="We have a team of highly qualified and experienced professionals who have a deep understanding of the market and can provide you with expert advice." />
              <ChoiceItem title="Personalized Approach" description="We take the time to understand your individual needs and goals. We then tailor our services to meet your specific requirements." />
              <ChoiceItem title="Customer Satisfaction" description="We are committed to providing our clients with the highest level of customer satisfaction. We are always available to answer your questions and help you make informed investment decisions." />
            </ul>
          </div>
          <div className="relative grid grid-cols-2 gap-4 justify-items-center">
              <Image
                  src="/why-us-1.jpeg"
                  alt="Man analyzing charts on a laptop"
                  width={250}
                  height={250}
                  className="rounded-xl object-cover self-start justify-self-end"
              />
              <Image
                  src="/why-us-2.jpeg"
                  alt="Stock market graph"
                  width={250}
                  height={250}
                  className="rounded-xl object-cover self-end justify-self-start"
              />
              <Image
                  src="/believe-image.jpeg"
                  alt="Professional pointing at a large screen with financial data"
                  width={400}
                  height={250}
                  className="rounded-xl object-cover col-span-2 justify-self-center"
              />
          </div>
        </div>
      </div>
    </section>
  )
}
