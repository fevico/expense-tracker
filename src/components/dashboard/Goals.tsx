import { BanknoteArrowDown, Laptop, TicketsPlane } from "lucide-react"
import { Card } from "../ui/card"

const Goals = () => {
    const goals = [
    {
        title: "Vacation Funds", 
        total: 5000,
        spent: 2400,
        progress: 48,
        color: "bg-blue-500 text-white",
        icon: TicketsPlane,
        progressColor: "bg-blue-600"
    }, 
    {
        title: "New Laptop",
        total: 1500,
        spent: 800,
        progress: 53,
        color: "bg-purple-500 text-white",
        icon: Laptop,
        progressColor: "bg-purple-600"
    },
    {
        title: "Emergency Funds",
        total: 10000,
        spent: 5200,
        progress: 52,
        color: "bg-green-500 text-white",
        icon:   BanknoteArrowDown,
        progressColor: "bg-green-600"
    }
]
  return (
    <div className="mb-4">
        <Card className="max-w-md h-100 p-4">
            <h2>Savings Goals</h2>
            <p className="text-gray-500">Track your progress.</p>
            <div className="flex flex-col gap-4 ">
            {goals.map((goal, index) =>(
                <div key={index} className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gray-200 p-4`}>
                        {<goal.icon size={25} />}
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col">
                            <h2 className="text-bold">{goal.title}</h2>
                            <p className="text-gray-500 text-sm">${goal.spent.toFixed(2)} of ${goal.total.toFixed(2)}</p>
                            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
  <div
    className={`h-2 rounded-full ${goal.progressColor}`}
    style={{ width: `${goal.progress}%` }}
  />
</div>
                        </div>
                        {/* <div className="justify-end">  */}
                        <h2 className="text-lg font-bold">${goal.progress}%</h2>
                        {/* </div> */}
                    </div>
                </div>
            ))}
            </div>
        </Card>
    </div>
  )
}

export default Goals