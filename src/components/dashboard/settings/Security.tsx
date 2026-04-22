import { Card } from '@/components/ui/card'
import { ChevronRight, Lock, Shield, Smartphone } from 'lucide-react'


const Security = () => {
    const data = [
        {
            icon: Lock,
            title: "change password",
            description: "update your password",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: Shield,
            title: "two-factor authentication",
            description: "Add extra security layer",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: Smartphone,
            title: "trusted devices",
            description: "Managed logged-in devices",
            color: "bg-purple-100 text-purple-600"
        }
    ]
  return (
    <div className='mt-4'>
        <Card className="flex h-110 flex-col p-4 gap-6">
            <h3 className='text-lg font-semibold'>Security</h3>
            {data.map((item, index) => (
                <div key={index} className='flex justify-between hover:bg-gray-300 p-2 rounded-lg'>
                <div className="flex gap-5">
                    <div className={`w-11 h-11 p-3 ${item.color} rounded-lg`}>
                        <item.icon className='w-5 h-5' />
                    </div>

                    {/* detais */}
                    <div className='flex flex-col gap-1'>
                        <p className='text-md font-semibold capitalize'>{item.title}</p>
                        <p className='text-sm test-gray-500'>{item.description}</p>
                    </div>
                </div>
                <ChevronRight/>
            </div>
            ))}
        </Card>
    </div>
  )
}

export default Security