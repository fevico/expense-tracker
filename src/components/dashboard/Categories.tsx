import { Card } from "../ui/card"
import { Progress } from "../ui/progress"

const data = [
  { name: "Food & Drink", amount: 420, percent: 80, color: "bg-orange-500" },
  { name: "Shopping", amount: 312, percent: 70, color: "bg-green-500" },
  { name: "Transport", amount: 245, percent: 60, color: "bg-blue-500" },
  { name: "Entertainment", amount: 189, percent: 45, color: "bg-yellow-500" },
  { name: "Utilities", amount: 156, percent: 35, color: "bg-gray-500" },
];

const Categories = () => {
  return (
    // <div>
        <Card className="w-full p-6">
            <h3>Top Categories</h3>

            <div className="space-y-4 mt-4">
                {data.map((item, index) => (
                    <div className="">
                    <div className="flex justify-between" key={index}>
                    <p>{item.name}</p>
                    <p>${item.amount.toFixed(2)}</p>
                </div>
                    <Progress value={item.percent} color={item.color}/>
                    </div>
                ))}
            </div>
        </Card>
    // </div>
  )
}

export default Categories