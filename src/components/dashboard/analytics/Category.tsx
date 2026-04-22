import { Card } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Food & Drink", amount: 420, color: "#ef4444" },
  { name: "Shopping", amount: 312, color: "#f59e0b" },
  { name: "Transport", amount: 245, color: "#06b6d4" },
  { name: "Entertainment", amount: 189, color: "#8b5cf6" },
  { name: "Utilities", amount: 156, color: "#22c55e" },
  { name: "Other", amount: 234, color: "#6b7280" },
];

const AnalyticsCategory = () => {
  return (
    <div className="mt-4">
        <Card className="w-full h-137.5 p-6 pt-6 rounded-md">
            <h2 className="font-bold text-xl">Spending by Category</h2>
    <div className="flex justify-center items-center h-60">
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={3}
          dataKey="amount"
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
  <div className="flex flex-col gap-3 w-full">
    {data.map((item, index) => (
      <div key={index} className="flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <p className="text-sm">{item.name}</p>
        </div>

        <p className="text-sm font-medium">${item.amount}</p>

      </div>
    ))}
  </div>
        </Card>
    </div>
  )
}

export default AnalyticsCategory