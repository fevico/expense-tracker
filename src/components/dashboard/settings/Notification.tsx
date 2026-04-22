import { Card } from '@/components/ui/card'
import { Bell, Mail, Shield, TrendingUp } from 'lucide-react'

const Notification = () => {
    const data =  [
        {
            icon: Bell,
            title: "Transaction Alerts",
            description: "Get notified of all transactions",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: Mail,
            title: "Marketing Emails",
            description: "Receive promotional content",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: Shield,
            title: "Security Alerts",
            description: "Unusual activity notifications",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: TrendingUp,
            title: "Product Updates",
            description: "New features and improvements",
            color: "bg-red-100 text-red-600"
        }
    ]
  return (
    <div className='mt-4'>
        <Card className='flex flex-col h-110 p-4'>
            <h3 className='text-lg font-semibold'>Notifications</h3>
                {data.map((item, index) => (
            <Card className="p-2">
                    <div key={index} className='flex justify-between'>
                    <div className='flex gap-2'>
                        <div className={`w-11 h-11 p-3 ${item.color} rounded-lg`}>
                            <item.icon className='w-5 h-5'/>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='text-md font-semibold'>{item.title}</p>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>
                    </div>
                </div>
            </Card>
                ))}
        </Card>
    </div>
  )
}

export default Notification