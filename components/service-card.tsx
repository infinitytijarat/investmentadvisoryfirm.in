import { Card, CardContent } from "@/components/ui/card"

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-white dark:bg-gray-900/50 hover:shadow-lg transition-shadow duration-300 border border-green-100 dark:border-green-900/50">
      <CardContent className="flex flex-col items-center text-center gap-4 p-6">
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
