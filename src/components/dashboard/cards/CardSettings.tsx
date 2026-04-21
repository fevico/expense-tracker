import { Card } from "@/components/ui/card";
import { Globe, Lock, Smartphone } from "lucide-react";

const CardSettings = () => {
    const settings = [
        {  
            icon: Lock,
            title: "Lock/Unlock Card",
            description: "Freeze card temporarily.",
            bgColor: "bg-blue-100 text-blue-600"
        },
        {
            icon: Smartphone,
            title: "Visual Cards",
            description: "create digital card.",
            bgColor: "bg-purple-100 text-purple-600"
        }, 
        {
            icon: Globe,
            title: "International Usage",
            description: "Enable abroad transactions.",
            bgColor: "bg-green-100 text-green-600"
        }
    ]
    return ( <div>
            <Card className="w-full h-[325px] p-6">
                <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold">Card Settings</h1>
                    {settings.map((item, index) => (
                        <div key={index} className="flex justify-between hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 cursor-pointer">
                            <div className="flex gap-2">
                                <div className={`w-12 h-12 p-3 rounded-lg ${item.bgColor}`}>
                                <item.icon className="w-5 h-5" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="font-semibold text-sm text-gray-500">{item.title}</p>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
    </div> );
}
 
export default CardSettings;