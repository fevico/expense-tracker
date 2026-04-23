import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Security from "./Security";
import Notification from "./Notification";
import Prefrence from "./Prefrence";
import Danger from "./Danger";

const SettingsPage = () => {
  return (
    <div>
      <Card className="flex flex-col w-full p-6 rounded-lg gap-6">
        
        {/* TITLE */}
        <h4 className="text-lg font-semibold">Profile Information</h4>

        {/* PROFILE SECTION */}
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarFallback className="bg-black text-white text-xl font-semibold">
              JD
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>

            <Button className="mt-2">Change Photo</Button>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* FULL NAME */}
          <div className="flex flex-col gap-1">
            <Label>Full Name</Label>
            <Input defaultValue="John Doe" />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <Label>Email</Label>
            <Input defaultValue="john.doe@example.com" />
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-1">
            <Label>Phone Number</Label>
            <Input defaultValue="+1 (555) 123-4567" />
          </div>

          {/* COUNTRY */}
          <div className="flex flex-col gap-1">
            <Label>Country</Label>
            <Input defaultValue="United States" />
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </Card>

      <div className="flex gap-4 w-full">
        {/* security */}
        <div className="h-full w-1/2">
        <Security/>
        </div>

        {/* notification */}
        <div className="h-full w-1/2">
        <Notification/>
        </div>

      </div>
        {/* prefrence */}
        <Prefrence/>

        {/* danger */}
        <Danger/>
    </div>
  );
};

export default SettingsPage;