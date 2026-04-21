import SearchFilter from "@/components/Search";
import { Card } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, DollarSign } from "lucide-react";
import { useState } from "react";
import Transactions from "../Transactions";
import { transactions } from "@/data/transaction";

const TransactionsPage = () => {
    const data = [
        {
            icon: ArrowUpRight,
            title: "Total Income",
            amount: 5000,
            color: "bg-green-100 text-green-600",
            description: "This month",
            type: "income"
        },
        {
            icon: ArrowDownRight,
            title: "Total Expenses",
            amount: 3200,
            color: "bg-red-100 text-red-600",
            description: "This month",
            type: "expense"
        },
        {
            icon: DollarSign,
            title: "Total Transaction",
            amount: 1800,
            color: "bg-blue-100 text-blue-600",
            description: "This month",
            type: "transaction"
        }
    ]
      const [search, setSearch] = useState("");
      const filteredTransactions = transactions.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

    return ( <div className="">
        <div className="flex gap-4 p-4">
         {data.map((item, index) => (
            <Card className="w-full max-w-sm h-60px grid grid-cols-1 md:grid-cols-3 p-4 gap-4" key={index}>
                <div className="flex flex-col gap-2 items-center justify-center">
                <div className={`flex items-center justify-center p-4 rounded-lg ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                </div>
                <p className="text-sm mt-2">{item.title}</p>
                <p className="text-2xl font-bold mt-1">${item.amount.toLocaleString()}</p>
                <p className={`text-sm ${item.type === "income" ? "text-green-600" : item.type === "expense" ? "text-red-600" : "text-gray-600"} mt-1`}>{item.description}</p>
                </div>
            </Card>
        ))}
        </div>
        
        {/* search filter */}
        <SearchFilter search={search} setSearch={setSearch} />

        {/* transactions  */}
        <Transactions data={filteredTransactions}/>
           
    </div> 
    );
}
 
export default TransactionsPage;