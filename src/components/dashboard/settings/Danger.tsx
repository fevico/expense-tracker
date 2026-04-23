import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Danger = () => {
  return (
    <div className='mt-4'>
        <Card className='w-full p-4 border-red-500 flex flex-col gap-4'>
            <h3 className='text-lg text-red-500 font-semibold'>Danger zone</h3>
            <Card className='w-full bg-red-50 p-4'>
                <div className='flex justify-between'>
                 <div className="flex flex-col gap-1">
                <h4 className='text-red-900 font-bold'>Delete Account</h4>
                <p className="text-sm text-red-500">Permanently delete your account and all data</p>
                 </div>
                <Button className='bg-red-500 text-white' variant="default">Delete</Button>
                </div>
            </Card>
        </Card>
    </div>
  )
}

export default Danger