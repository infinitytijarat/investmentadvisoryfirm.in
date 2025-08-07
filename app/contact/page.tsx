import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'

function ContactInfoCard({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
return (
  <Card className="bg-white dark:bg-gray-900/50 shadow-lg rounded-lg">
    <CardContent className="flex flex-col items-center text-center gap-4 p-8">
      <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">{title}</h3>
      <div className="text-sm text-gray-600 dark:text-gray-400">{children}</div>
    </CardContent>
  </Card>
)
}

export default function ContactPage() {
return (
  <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
    <Header />
    <main>
      <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new-contact-hero.jpg"
            alt="Contact Us Background - Financial Services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact US</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">Home &gt; Contact US</p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ContactInfoCard icon={<Phone className="h-8 w-8 text-green-500" />} title="Call Us">
              <p>+91 8828792729</p>
            </ContactInfoCard>
            <ContactInfoCard icon={<Mail className="h-8 w-8 text-green-500" />} title="Email Us">
              <p>info@investmentadvisoryfirm.in</p>
            </ContactInfoCard>
            <ContactInfoCard icon={<MapPin className="h-8 w-8 text-green-500" />} title="Address">
              <p>Mohile chawl no 5 Room No. 42 Jivan Baug, Mumbra Thane, Maharashtra 400612</p>
            </ContactInfoCard>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input placeholder="First Name" className="bg-white dark:bg-gray-800" />
                <Input placeholder="Last Name" className="bg-white dark:bg-gray-800" />
              </div>
              <Input type="email" placeholder="Email Address" className="bg-white dark:bg-gray-800" />
              <Input placeholder="Subject" className="bg-white dark:bg-gray-800" />
              <Textarea placeholder="Your Message" rows={5} className="bg-white dark:bg-gray-800" />
              <div className="flex justify-center sm:justify-start">
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-[#7A8F5B] hover:bg-[#697d4f] text-white">
                  Submit Form
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
)
}
