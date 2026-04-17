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

const colorStyles: Record<string, string> = {
  blue: "bg-gray-100 text-white",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
};

const DashboardCard = ({ data }: DashboardCardProps) => {
    return ( <>  
    <div className="rounded-md ">
            <Card className={`flex w-full max-w-sm p-4 ${data.color === "black" ? "bg-gradient-to-r from-[#0f172a] to-[#1e293b]  text-white" : "bg-white"}`}>
            <span className={`mr-3 ${colorStyles[data.iconColor] || 'bg-gray-500'} text-${data.iconColor}-800 w-10 h-10 rounded-sm flex items-center justify-center`}>
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