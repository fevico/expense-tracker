import { cardDetails } from "@/data/card"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"

const TransactionCard = () => {
  return (
    <div>
        {/* <Card className={bgColor + " text-white rounded-md px-4 h-60 hover:scale-105 transition-transform duration-300"}> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        {cardDetails.map((item, index) => (
        <Card key={index} className={`relative overflow-hidden ${item.bgColor} hover:scale-105 transition-transform duration-300 text-white rounded-xl p-6 h-60`}>
          <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center mb-2">
            <span className="shadow-sm p-1 rounded-md">
            {<item.icon size={30} />}
            </span>
            <Badge variant="secondary" className="text-sm py-0 px-2">
              {item.title}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground text-white capitalize text-bold">
            {item.description}
          </span>
          <p className="text-2xl font-bold">${item.balance.toFixed(2)}</p>
          <div className="flex justify-between">
            <p className="text-sm">{item.type === "Expire" ? "Card Number" : "Account Number"}</p>
            <p className="text-sm">{item.type === "Expire" ? "Expires" : "Type"}</p>
          </div>
          <div className="flex justify-between ">
            <p>{item.cardNumber}</p>
            <p className="text-sm">{item.type === "Type" ? "Debit" : `${item.expires}`}</p>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 mt-4">
            <p className="text-sm text-muted-foreground">Card Number</p>
            <p className="text-sm">Expires</p>
            <p className="text-sm">{cardNumber}</p>
            <p className="text-sm">{expiry}</p>
          </div> */}
          </div>
        </Card>
        ))}
        </div>
    </div>
  )
}

export default TransactionCard