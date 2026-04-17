import { Download, Send, ShoppingBag, Zap } from "lucide-react";

export const paymentMethods = [
    {
        title: "Send money",
        description: "Transfer funds",
        icon: Send,
        color: "blue"
    },
    {
        title: "Request money",
        description: "Get payments",
        icon: Download,
        color: "green"
    },
    {
        title: "Pay bills",
        description: "Auto payments",
        icon: Zap,
        color: "purple"
    },
    {
        title: "Shop now",
        description: "Browse deals",
        icon: ShoppingBag,
        color: "red"
    }
]