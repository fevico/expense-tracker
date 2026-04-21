import { Card } from "../ui/card"

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
        <Card className="max-w-md p-6 h-full rounded-md">
            <h3 className="font-semibold">Top Categories</h3>

            <div className="space-y-4 mt-4">
                {data.map((item, index) => (
                    <div className="">
                    <div className="flex justify-between" key={index}>
                    <p className="text-sm text-gray-500">{item.name}</p>
                    <p>${item.amount}</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                    <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percent}%` }}
                    />
                </div>
            </div>
        ))}
            </div> 
        </Card>
    // </div>
  )
}

export default Categories