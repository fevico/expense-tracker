import { CirclePlus, FolderOpen, Lock, Shield, TrendingUp, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

export interface FeatureItem {
  icon: LucideIcon;       
  name: string;
  description: string;
}

const Details = () => {
 const features: FeatureItem[] = [
  {
    icon: TrendingUp,
    name: "Real-Time Analytics",
    description:
      "Get instant insights into your spending habits with live charts and detailed breakdowns.",
  },
  {
    icon: Shield,
    name: "Bank-Level Security",
    description:
      "Your data is encrypted and protected with industry-leading security standards.",
  },
  {
    icon: CirclePlus,
    name: "Smart Categorization",
    description:
      "Automatically categorize transactions to understand where your money goes.",
  },
  {
    icon: FolderOpen,
    name: "Multi-Account Support",
    description:
      "Connect multiple bank accounts and credit cards in one unified dashboard.",
  },
  {
    icon: Zap,
    name: "Instant Notifications",
    description:
      "Stay updated with real-time alerts for all your transactions and unusual activity",
  },
  {
    icon: Lock,
    name: "Privacy First",
    description:
      "Your financial data stays private. We never sell your information to third parties.",
  },
];

  return (
    <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Everything You Need</h1>
        <p className="text-bg-500 text-gray-500">Powerful features to help you manage your finances effectively</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {features.map((item: FeatureItem) => (
            <Card className="w-full max-w-sm p-6 shadow-xl">
                <div className="mt-1 bg-gray-300 h-10 w-10 rounded-sm flex justify-center items-center">
                    <item.icon className="text-gray-700" />
                </div>
                <p className="font-bold">{item.name}</p>
                <div className="text-bg-500">{item.description}</div>
            </Card>
            ))}
        </div>
    </div>
  )
}

export default Details