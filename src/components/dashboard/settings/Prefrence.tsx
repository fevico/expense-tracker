import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Prefrence = () => {
  return (
    <div className='mt-4'>
        <Card className='w-full p-4'>
            <h3 className='text-lg font-semibold'>Preferences</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1'>
                    <Label>Currency</Label>
                    {/* Currency */}
                <Select>
      <SelectTrigger className="w-full max-w-md">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="apple">USD - US Dollar</SelectItem>
          <SelectItem value="banana">EUR - Euro</SelectItem>
          <SelectItem value="blueberry">GPD - British Pound</SelectItem>
          <SelectItem value="grapes">CAD - Canandian Dollar</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>

            <div className='flex flex-col gap-1'>
                    <Label>Language</Label>
                <Select>
      <SelectTrigger className="w-full max-w-md">
        <SelectValue placeholder="Select lanuage" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="spanish">Spanish</SelectItem>
          <SelectItem value="french">French</SelectItem>
          <SelectItem value="german">German</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>

            <div className='flex flex-col gap-1'>
                    <Label>Time zone</Label>
                <Select>
      <SelectTrigger className="w-full max-w-md">
        <SelectValue placeholder="Select time zone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="est">EST - Eastern Time</SelectItem>
          <SelectItem value="pst">PST - Pacific Time</SelectItem>
          <SelectItem value="cst">CST - Central Time</SelectItem>
          <SelectItem value="mst">MST - Mountain Time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>

            <div className='flex flex-col gap-1'>
                    <Label>Date Format</Label>
                <Select>
      <SelectTrigger className="w-full max-w-md">
        <SelectValue placeholder="Select date format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
          <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
        </SelectGroup>
      </SelectContent>   
    </Select>
            </div>

            </div>
        </Card>
    </div>
  )
}

export default Prefrence