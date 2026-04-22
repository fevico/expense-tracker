import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import AnalyticsCategory from "./Category";
import MonthlySpending from "./MonthlySpending";

const data = [
  { month: "Oct", income: 4200, expenses: 2800, savings: 1400 },
  { month: "Nov", income: 4500, expenses: 3000, savings: 1500 },
  { month: "Dec", income: 4800, expenses: 3300, savings: 1500 },
  { month: "Jan", income: 4300, expenses: 2900, savings: 1400 },
  { month: "Feb", income: 4600, expenses: 3100, savings: 1500 },
  { month: "Mar", income: 5200, expenses: 3400, savings: 1800 },
  { month: "Apr", income: 5800, expenses: 3000, savings: 2800 },
];

const FinancialOverview = () => {
  return (
    <div className="mt-4">
      <Card className="w-full p-6">
        
        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <div>
            <h3 className="font-semibold text-xl">Financial Overview</h3>
            <p className="text-sm text-gray-500">
              Income, expenses, and savings trend
            </p>
          </div>
          <Button variant="outline">6 Months</Button>
        </div>

        {/* CHART */}
        <div className="w-full h-75">
          <ResponsiveContainer>
            <LineChart data={data}>
              
              {/* X AXIS */}
              <XAxis dataKey="month" />

              {/* Y AXIS */}
              <YAxis />

              {/* TOOLTIP */}
              <Tooltip />

                <Legend 
    verticalAlign="bottom"
    align="center"
    wrapperStyle={{ paddingTop: "20px" }}
  />

              {/* LINES */}
              <Line
                type="monotone"
                dataKey="income"
                stroke="#22c55e"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#ef4444"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="savings"
                stroke="#3b82f6"
                strokeWidth={2}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* catgory and spending */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
        <div className="flex-1">
            {/* category */}
            <AnalyticsCategory/>
        </div>

        <div className="flex-1">
            {/* monthly spendings */}
            <MonthlySpending/>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;