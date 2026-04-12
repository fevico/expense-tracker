import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Monday", income: 4000, spending: 2400 },
  { name: "Tuesday", income: 3000, spending: 1398 },
  { name: "Wednesday", income: 2000, spending: 9800 },
  { name: "Thursday", income: 2780, spending: 3908 },
  { name: "Friday", income: 1890, spending: 4800 },
  { name: "Saturday", income: 2390, spending: 3800 },
  { name: "Sunday", income: 3490, spending: 4300 },
];

const TransactionGraph = () => {
  return (
    <Card className="w-full p-6">
      <h3>Spending overview</h3>

      <div className="flex justify-between mb-4">
        <p className="text-sm text-gray-500">
          Track your weekly expenses and income
        </p>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>

        {/* <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0, }} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line dataKey="income" stroke="green" strokeWidth={2} />
          <Line dataKey="spending" stroke="red" strokeWidth={2} />
        </LineChart> */}
        <ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />

    <Line dataKey="income" stroke="green" strokeWidth={2} />
    <Line dataKey="spending" stroke="red" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>
    </Card>
  );
};

export default TransactionGraph;