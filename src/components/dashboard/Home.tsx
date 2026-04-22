import { MoveDownRight, MoveUpRight, Wallet } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import Categories from './Categories'
import TransactionGraph from './Graph'
import Transactions from './Transactions'
import TransactionCard from './Card'
import { Button } from '../ui/button'
import { paymentMethods } from '@/data/payment'
import Payment from './Payment'
import Stats from './Stats'
import { transactions } from '@/data/transaction'
import { useState } from 'react'

const DashboardHome = () => {
    const data = [
        { 
          item: Wallet,
          title: "Total Balance",
          price: 8432.50,
          color: "black",
          description: "+12.5% from last month",
          iconColor: "gray"
        },
        {
          item: MoveDownRight,
          title: "Income",
          price: 4584.50,
          color: "white",
          description: "This week",
          iconColor: "green"
        },
        {
          item: MoveUpRight,
          title: "Expenses",
          price: 1398.51,
          color: "white",
          description: "This week",
          iconColor: "red"
        }
      ]
      const [search, setSearch] = useState("");
    const filteredTransactions = transactions.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                     {data.map((item, index) => (
                    <DashboardCard key={index} data={item} />
                  ))}
                  </div>

              <div className="mb-6">
            <div className="flex justify-between">
        <div className="flex flex-col py-1">
          <h3 className="text-bold text-xl">My card</h3>
          <p className="text-sm text-gray-500">Manage your payment methods</p>
        </div>

        <Button size="sm">Add Card</Button>
      </div>
      <div className=" ">
        <TransactionCard />
      </div>
           </div>

              {/* mode of payment  */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-2'>
                {paymentMethods.map((item, index) => (
                  <Payment key={index} icon={item.icon} title={item.title} description={item.description} color={item.color} />
                ))}
              </div>

              {/* statistics */}
              <Stats/>
                  {/* statistics */}
                  {/* <Home/> */}
        <div className="flex gap-6 flex-col lg:flex-row">
            <div className="flex-2">
            <TransactionGraph/>
            </div>

            {/* other side */}
            <div className="flex-1">
            <Categories/> 
            </div>

            {/* Transactions */}
          </div>
            <Transactions data={filteredTransactions}/>
    </div>
  )
}

export default DashboardHome