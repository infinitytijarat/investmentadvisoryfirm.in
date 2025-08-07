'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
};

export function PricingCard({ title, price, features, isHighlighted = false }: PricingCardProps) {
  return (
    <Card className={`w-full max-w-sm ${isHighlighted ? 'border-green-500 border-2' : 'border-gray-200 dark:border-gray-800'} bg-green-50/30 dark:bg-gray-900/50 rounded-xl shadow-lg flex flex-col`}>
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200">{title}</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">(Exclusive of GST)</p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow items-center justify-between p-6">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-2">₹{price}</p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Per Month</p>
          <hr className="w-24 mx-auto border-gray-300 dark:border-gray-700" />
        </div>
        <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300 w-full">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 w-full">
          <Button 
            className="w-full bg-[#25D366] hover:bg-[#1da851] text-white"
            onClick={() => {
              const message = `Hello, I'm reaching out from Investment Advisory Firm website. I'm interested in the ${title} package priced at ₹${price} per month. Please provide me with more information.`
              window.open(`https://wa.me/+918828792729?text=${encodeURIComponent(message)}`, '_blank')
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mr-2"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Enquire via WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
