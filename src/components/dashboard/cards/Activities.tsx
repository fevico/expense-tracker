import { Card } from "@/components/ui/card";

const CardActivities = () => {
    const cardActivities = [
        {
            title: "Amazon",
            category: "Shopping.",
            amount: 156.99,
            date: "Apr 14, 2026 • •••• 4829"
        },
        {
            title: "Spotify Premium",
            category: "Entertainment.",
            amount: 15.99,
            date: "Apr 13, 2026 • •••• 4829"
        },
        {
            title: "Whole Foods",
            category: "Groceries.",
            amount: 89.45,
            date: "Apr 12, 2026 • •••• 4829"
        },
        {
            title: "Shell Gas Station",
            category: "Transport.",
            amount: 65.00,
            date: "Apr 11, 2026 • •••• 4829"
        },
        {
            title: "LinkedIn Premium",
            category: "Business",
            amount: 29.99,
            date: "Apr 10, 2026 • •••• 4829"
        }
    ]
    return ( <div>
        <Card className="w-full h-[325px] p-6">
            <div className="flex flex-col gap-2">   
                            <h1 className="text-xl font-semibold">Recent Activities</h1>
                {cardActivities.map((item, index) => (
            <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="font-medium" key={index}>{item.title}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </div>

                    {/* right hand side */}
                    <div className="flex-col">
                        <p className="font-medium">${item.amount.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
            </div>
                ))}             
            </div>
        </Card>
    </div> );
}
 
export default CardActivities;