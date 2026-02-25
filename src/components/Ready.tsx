import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

const Ready = () => {
  return (
    <div className="flex justify-center">
        <Card className="w-full max-w-4xl p-20 bg-gray-100 shadow-gray-300">
            <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold">Ready to Get Started?</h1>
            <p className="text-xl text-gray-500">Join thousands of users who are already managing their finances smarter with FinFlow.</p>
            <Button className="p-6" size="lg">Open Dashboard <ArrowRight/> </Button>
            </div>
        </Card>
    </div>
  )
}

export default Ready