import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SignIn() {



    return (
        <div className="w-[100dvw] h-[100dvh] bg-[#643A8F] text-white flex justify-center">
            <div className="w-full h-full bg-login-background bg-center flex justify-center items-center">
                <Card className="border-none flex flex-col w-full px-6  ">
                    <CardHeader className="p-0">
                        <CardTitle className="text-center mb-4">Sign In</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">
                                        <Input id="email" placeholder="Email Address" className="rounded bg-white text-black border-none" />
                                    </Label>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password" >
                                        <Input id="password" placeholder="Password" className="rounded bg-white text-black border-none" />
                                    </Label>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center p-0 absolute bottom-4 left-[50%] right-[50%]">
                        <Button className="bg-[#8541CB] rounded w-100 px-20">Submit</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
