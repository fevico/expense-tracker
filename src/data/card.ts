import { AppWindow, DollarSign, Wallet } from "lucide-react";

export const cardDetails = [
    {
        id: 1,
        title: "primary",
        description: "card balance",
        icon: AppWindow,
        balance: 12482.50,
        cardNumber: "**** **** **** 4829",
        type: "Expire",
        expires: "12/28",
        bgColor: "bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#1e3a8a]"
    },
    {
        id: 2,
        title: "savings",
        description: "savings account",
        icon: Wallet,
        balance: 7850.00,
        cardNumber: "**** **** **** 2156",
        type: "Type",
        expires: "09/27",
        bgColor: 'bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#ec4899]'
    },
    {
        id: 3,
        title: "business",
        description: "business account",
        icon: DollarSign,
        balance: 24156.80,
        cardNumber: "**** **** **** 8743",
        type: "Expire",
        expires: "12/26",
        bgColor: "bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#ef4444]"
    }
]