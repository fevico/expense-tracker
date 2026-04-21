import { Card } from "../ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Food", value: 420, color: "#ef4444" },
  { name: "Shopping", value: 312, color: "#f59e0b" },
  { name: "Transport", value: 245, color: "#06b6d4" },
  { name: "Entertainment", value: 189, color: "#8b5cf6" },
  { name: "Other", value: 234, color: "#6b7280" },
];

const Budjet = () => {
  return (
    <div className="">
        <Card className="w-full p-6 pt-6 rounded-md">
            <div className="flex justify-between">
                {/* left hand side */}
                <div className="flex flex-col">
                    <h1 className="font-semibold">Monthly Budget</h1>
                    <p className="text-sm">April 2026 spending breakdown</p>
                </div>

                {/* right hand side */}
                <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Total spent</p>
                    <h1>$1,400</h1>
                    <p className="text-sm text-gray-500">of $2,500 budget</p>
                </div>
            </div>
            <div className="flex gap-6 mt-6">
                            {/* CHART */}
  <div className="flex w-1/2 h-60">
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}   // makes it donut
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>

  {/* LEGEND */}
  <div className="flex flex-col justify-center gap-2 w-1/2">
    {data.map((item, index) => (
      <div key={index} className="flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <p className="text-sm">{item.name}</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium">${item.value}</p>
          <p className="text-xs text-gray-500">
            {Math.round((item.value / 1400) * 100)}%
          </p>
        </div>

      </div>
    ))}
  </div>
            </div>
        </Card>
    </div>
  )
}

export default Budjet