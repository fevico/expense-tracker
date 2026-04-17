import { Card } from "../ui/card"

const colorStyles: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
};

const Payment = ({icon: Icon, title, description, color}: {icon: any, title: string, description: string, color: string}) => {
  return (
    <div>
        <Card className="w-full max-w-sm rounded-md  p-4 mt-6 h-20 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-row gap-4 items-center">
                <div className={`p-3 rounded-lg ${colorStyles[color]}`}>
                {<Icon size={20} />}
                </div>
                <div className="flex flex-col">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Payment