"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from "react"

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
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName.trim()) {
      setSubmitError("Full name is required");
      return;
    }
    
    if (!formData.phoneNumber.trim()) {
      setSubmitError("Phone number is required");
      return;
    }
    
    // Simple validation for phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      setSubmitError("Please enter a valid 10-digit phone number");
      return;
    }
    
    try {
      setIsSubmitting(true);
      setSubmitError("");
      
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message and reset form
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: ""
      });
      
    } catch (error) {
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
              <p>8828792729</p>
            </ContactInfoCard>
            <ContactInfoCard icon={<Mail className="h-8 w-8 text-green-500" />} title="Email Us">
              <p>info@investmentadvisoryfirm.in</p>
            </ContactInfoCard>
            <ContactInfoCard icon={<MapPin className="h-8 w-8 text-green-500" />} title="Address">
              <p>Mohile chawl no 5 Room No. 42 Jivan Baug, Mumbra Thane, Maharashtra 400612</p>
            </ContactInfoCard>
          </div>

          <div className="max-w-3xl mx-auto">
            {submitSuccess ? (
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">Thank You!</h3>
                <p className="text-gray-700 dark:text-gray-300">Your message has been received. We'll get back to you soon.</p>
                <Button 
                  onClick={() => setSubmitSuccess(false)} 
                  className="mt-4 bg-[#7A8F5B] hover:bg-[#697d4f] text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <Input 
                      name="fullName"
                      placeholder="Full Name" 
                      className="bg-white dark:bg-gray-800" 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <Input 
                      name="phoneNumber"
                      type="tel" 
                      placeholder="Phone Number" 
                      className="bg-white dark:bg-gray-800" 
                      required 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-white dark:bg-gray-800" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <Textarea 
                      name="message"
                      placeholder="Your Message" 
                      rows={5} 
                      className="bg-white dark:bg-gray-800"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                {submitError && (
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md text-sm">
                    {submitError}
                  </div>
                )}
                
                <div className="flex justify-center sm:justify-start">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto bg-[#7A8F5B] hover:bg-[#697d4f] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
)
}
