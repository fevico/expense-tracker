import { Card } from '@/components/ui/card'
import { BanknoteArrowDown, Car, Laptop, TicketsPlane } from 'lucide-react'

const SavingGoal = () => {
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
        }, 
        {
            title: "Car Down Payment",
            total: 8000,
            spent: 3200,
            progress: 40,
            color: "bg-yellow-500",
            icon: Car,
            progressColor: "bg-yellow-500"
        }
    ]
  return (
    <div className='mt-4'>
        <Card className='w-full p-4'>
            <div className="flex flex-col">
                <h2 className=''>Savings Goals Progress</h2>
                <p className='text-sm text-gray-500'>Track your financial targets</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goals.map((item, index) => {
  const remaining = item.total - item.spent;

  return (
    <Card key={index} className="p-4 rounded-lg shadow-sm">

      {/* TOP ROW */}
      <div className="flex justify-between items-start">

        {/* LEFT SIDE */}
        <div className="flex gap-3">
          
          {/* ICON */}
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
            <item.icon className="w-5 h-5 text-gray-600" />
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">
              ${item.spent.toLocaleString()} / ${item.total.toLocaleString()}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (PERCENT) */}
        <p className="font-semibold text-lg">{item.progress}%</p>

      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
        <div
          className={`h-3 rounded-full ${item.progressColor}`}
          style={{ width: `${item.progress}%` }}
        />
      </div>

      {/* REMAINING TEXT */}
      <p className="text-xs text-gray-500 mt-2">
        ${remaining.toLocaleString()} remaining
      </p>

    </Card>
  );
})}
            </div>
        </Card>
    </div>
  )
}

export default SavingGoal