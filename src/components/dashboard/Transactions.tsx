import { transactions } from '@/data/transaction'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

const Transactions = () => {
  return (
    <div>
        <Card className="w-full rounded-md p-4 mt-6">
            <div className='flex justify-between'>
                <div className="flex flex-col gap-1">
                <h2 className='font-bold'>Recent Transactions</h2>
                <p>Your latest financial activity</p>
                </div>
                <Button variant="outline" size="sm">View All</Button>
            </div>
            {transactions.map((transaction, index) => (
  <div
    key={index}
    className="flex items-center justify-between py-4 border-b"
  >
    {/* LEFT SIDE */}
    <div className="flex items-center gap-4">
      
      {/* ICON */}
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
        <transaction.icon size={18} />
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        <h2 className="font-medium">{transaction.title}</h2>
        <p className="text-sm text-gray-500">
          {transaction.category} • {transaction.date}
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <p
      className={`font-medium ${
        transaction.type === "income" ? "text-green-600" : "text-black"
      }`}
    >
      {transaction.type === "income" ? "+" : ""}
      ${transaction.amount.toFixed(2)}
    </p>
  </div>
))}
</Card>
    </div>
  )
}

export default Transactions