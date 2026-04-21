import { Card } from "@/components/ui/card";
import { AppWindow, DollarSign, Wallet } from "lucide-react";
import TransactionCard from "../Card";
import CardSettings from "./CardSettings";
import CardActivities from "./Activities";

const MyCards = () => {
    const cardData = [
        {
            icon: AppWindow,
            title: "Total Card",
            total: "3",
            description: "2 credit. 1debit",
            bgColor: "bg-blue-100 text-blue-600"
        },
        {
            icon: Wallet,
            title: "Total Balance",
            total: "$ 44,489.30",
            description: "+12.5% from last month",
            bgColor: "bg-green-100 text-green-600"
        },
        {
            icon: DollarSign,
            title: "Available Credit",
            total: "$ 8,361.70",
            description: "of $45,000 limit",
            bgColor: "bg-purple-100 text-purple-600"
        }
    ]
    return ( <div className="space-y-4"> 
    <div className="flex gap-4">
        {cardData.map((item, index) => ( 
    <Card className="w-full max-w-sm h-60px p-4 gap-4" key={index}>
        <div className="flex flex-col gap-2">
            <div className={`w-12 h-12 flex p-3 rounded-lg ${item.bgColor}`}>
                <item.icon className="w-6 h-6" /> 
            </div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="font-bold text-xl">{item.total}</p>
            <p className={`text-sm ${item.icon === Wallet ? "text-green-600" : "text-gray-600"}`}>{item.description}</p>
        </div>
    </Card>
    ))}
    </div>

    <h3 className="font-bold">Your Card</h3>

    {/* Cards */}
    <div className="">
    <TransactionCard/>
    </div>

    {/* card setting and recent activities */}
    <div className="flex gap-4">
    {/* card settings */}
    <div className="w-1/2">
    <CardSettings/>
    </div>

    {/* card activities */}
    <div className="w-1/2">
    <CardActivities/>
    </div>
    </div>    
    </div> );
}
 
export default MyCards;