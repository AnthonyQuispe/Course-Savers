'use client'

import { Button } from "@/components/ui/button"
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

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"

export default function SignIn() {
    const router = useRouter()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        signIn("credentials", { ...loginData, redirect: false });
        router.push('/search')
    }

    return (
        <div className="w-[100dvw] h-[100dvh] bg-[#643A8F] text-white flex justify-center">
            <div className="w-full h-full bg-login-background bg-center flex justify-center items-center">
                <form onSubmit={loginUser} className="border-none w-full ">
                    <Card className="border-none px-6 flex flex-col">
                        <CardHeader className="p-0">
                            <CardTitle className="text-center mb-4">Sign In</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">
                                        <Input id="email" type="text" placeholder="Email Address" className="rounded bg-white text-black border-none" value={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} />
                                    </Label>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password" >
                                        <Input id="password" placeholder="Password" type="password" className="rounded bg-white text-black border-none" value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} />
                                    </Label>
                                </div>
                            </div>
                        </CardContent>
                        <Link href="/sign-up" className="text-[12px] text-center mt-4 underline underline-offset-4">Don&apos;t have an account? <span className="text-[#B1EBEF]">
                            Sign Up</span></Link>
                        <div className="flex justify-center p-0 absolute bottom-8 left-[50%] right-[50%]">
                            <Button className="bg-[#8541CB] rounded w-100 px-20" type="submit">Submit</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </div>
    )
}
