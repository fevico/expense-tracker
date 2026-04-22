import { Card } from '@/components/ui/card';
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const barData = [
  { category: "Food", thisMonth: 420, lastMonth: 380 },
  { category: "Shopping", thisMonth: 312, lastMonth: 450 },
  { category: "Transport", thisMonth: 245, lastMonth: 210 },
  { category: "Bills", thisMonth: 189, lastMonth: 200 },
  { category: "Entertainment", thisMonth: 150, lastMonth: 220 },
];

const MonthlySpending = () => {
    return ( <div className='mt-4'> 
        <Card className='w-full h-137.5 p-4'>
            <h3 className='font-bold'>This Month vs Last Month</h3>
            <div className="w-full h-70">
                <ResponsiveContainer>
                    <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category"/>
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                    <Bar dataKey="thisMonth" fill="#3b82f6" radius={[4,4,0,0]} />
                    <Bar dataKey="lastMonth" fill="#d1d5db" radius={[4,4,0,0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    </div> );
}
 
export default MonthlySpending;