import { Card } from "@/components/ui/card";
import { ArrowDownRight, BadgePercent, TrendingDown, TrendingUp } from "lucide-react";
import FinancialOverview from "./Overview";
import SavingGoal from "./SavingGoal";

const colorStyles: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  red: "bg-red-100 text-red-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
};

const AnalyticsPage = () => {
    const analyticsData = [
         {
    title: "Avg. Monthly Income",
    value: 4857,
    change: "+15.3%",
    isPositive: true,
    icon: TrendingUp,
    color: "blue"
  },
  {
    title: "Avg. Monthly Expenses",
    value: 3143,
    change: "-8.2%",
    isPositive: false,
    icon: TrendingDown,
    color: "red"
  },
  {
    title: "Avg. Monthly Savings",
    value: 1714,
    change: "+22.1%",
    isPositive: true,
    icon: ArrowDownRight,
    color: "green"
  },
  {
    title: "Savings Rate",
    value: 35.3,
    change: "of income",
    isPositive: null,
    icon: BadgePercent,
    color: "purple"
  }
]
    return ( <div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.map((item, index) => (
        <Card key={index} className="flex w-full max-w-sm p-4">
            <div className="flex flex-col gap-2">
            <div className={`w-12 h-12 p-3 ${colorStyles[item.color]} rounded-lg`}>
                <item.icon className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-xl font-bold">${item.value.toFixed(2)}</p>
            <p className={item.isPositive === null ? "text-sm text-gray-500" : item.isPositive ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
                {item.change}
            </p>
            </div>
        </Card>
        ))}
     </div>

     {/* finiacial overview  */}
     <FinancialOverview/>

     {/* monthly spending */}
        <SavingGoal/>
    </div> 
    );
}
 
export default AnalyticsPage;