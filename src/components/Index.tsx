import Details from "./Details";
import Footer from "./Footer";
import Ready from "./Ready";
import { Button } from "./ui/button";
import { ArrowRight, Zap } from 'lucide-react';
   
const Index = () => {
    return ( <div className="">
        <span className="flex bg-gray-200 rounded-2xl p-2 max-w-55 text-sm gap-2"> <Zap size={15}/> Smart Financial Management</span>
        <div className="flex justify-between">
            <div className="space-y-6">
                <h1 className="text-5xl font-bold">Take Control of Your Financial Future</h1>
                <p className="text-gray-500">Track transactions, analyze spending patterns, and make smarter financial decisions with our intuitive dashboard.</p>
                <div className="flex gap-4">
                    <Button size="lg">Get Started <ArrowRight/> </Button>
                    <Button size="lg" variant="outline">Learn more</Button>
                </div>
                <div className="grid grid-cols-3 gap-6">

  <div>
    <div className="text-2xl font-bold">50k+</div>
    <div className="text-gray-500">Active users</div>
  </div>

  <div>
    <div className="text-2xl font-bold">$2M+</div>
    <div className="text-gray-500">Track daily</div>
  </div>

  <div>
    <div className="text-2xl font-bold">99.9%</div>
    <div className="text-gray-500">Uptime</div>
  </div>

</div>
            </div>
            <div className="">
                <img src="/finance.jpg" alt="finace" className="rounded-lg" /> 
            </div>
        </div>
        {/*  details */}
        <div className="mt-50">
            <Details/>
        </div>
        {/* get started */}
        <div className="mt-50">
            <Ready/>
        </div>
        <div className="mt-50">
            <Footer/>
        </div>
    </div> );
}
 
export default Index;