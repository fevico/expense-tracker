import { MoveDownRight, MoveUpRight, Wallet } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import Categories from './Categories'
import TransactionGraph from './Graph'

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
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                     {data.map((item, index) => (
                    <DashboardCard key={index} data={item} />
                  ))}
                  </div>
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
          </div>
    </div>
  )
}

export default DashboardHome