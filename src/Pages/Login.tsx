import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Lock, Mail, TrendingUp } from "lucide-react"
import {type SubmitHandler, useForm} from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long')
})

type formFields = z.infer<typeof formSchema>

const Login = () => {

    const {register, handleSubmit, formState: {errors} } = useForm<formFields>({resolver: zodResolver(formSchema)})
    const onSubmit: SubmitHandler<formFields> = (data) => {
        console.log(data)
    }
  return (  
    <div className="">
        <div className="flex flex-col h-screen gap-4 justify-center items-center w-full">
        <div className="p-4 rounded-sm bg-gray-900">
            <TrendingUp className="text-white"/>
        </div>
        <h1 className="text-xl font-bold">Welcome Back</h1>
        <p className="text-gray-500">Sign in to manage your finances</p>
            <Card className="w-full max-w-md shadow-2xl p-6">

                <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="">
                <Label className="pb-1" htmlFor="email">Email Address</Label>
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
  <Input {...register('email')} type="text" placeholder="Enter email" className="pl-10" />
</div> 
{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
</div>            
    <div>
        <div  className="flex flex-row justify-between">
    <Label className="pb-1" htmlFor="email">Password</Label>
        <Label className="pb-1" htmlFor="email">Forget Password</Label>   
                </div>
    <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
  <Input {...register('password')} type="password" placeholder="Enter password" className="pl-10" />
  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
    </div>
    <div className="flex flex-row gap-4 pt-6 ">
        <Checkbox/>
        <p className="text-gray-500 font-bold">Remember me for 30 days</p>
    </div>
    <div className="pt-4">
        <Button className="p-6 w-full border-xl">Sign In</Button>
    </div>
    <p className="text-center text-sm pt-6">Or continue with</p>
    <div className="flex flex-row gap-4 mt-4">
        <Button className="flex-1" variant="outline">Google</Button>
        <Button className="flex-1" variant="outline"><Github/> Github</Button>
    </div>
</div>  
</form>           
            </Card>
        </div>
    </div>
  )
}

export default Login