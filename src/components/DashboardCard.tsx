import { Card } from "./ui/card";

interface DashboardCardProps {
    data: {
        item: any;
        title: string;
        price: number;
        description: string;
        color: string
        iconColor: string
    };
}

const DashboardCard = ({ data }: DashboardCardProps) => {
    return ( <> 
    <div className="rounded-md ">
            <Card className={`flex w-full max-w-sm p-4 ${data.color === "black" ? "bg-black text-white" : "bg-white"}`}>
            <span className={`mr-3 ${data.iconColor ? `bg-${data.iconColor}-500` : 'bg-gray-500'} text-${data.iconColor}-800 w-10 h-10 rounded-sm flex items-center justify-center`}>
                {<data.item/>}
            </span>
            <div>
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p className="text-xl font-bold mt-2">${data.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{data.description}</p>
            </div>
    </Card>
    </div>
    </> );
}
 
export default DashboardCard;