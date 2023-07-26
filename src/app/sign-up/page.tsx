'use client'

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
import { registerSchema } from "@/validators/auth"

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Router, { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

//puts a type to the input object from registerSchema
type Input = z.infer<typeof registerSchema>;

interface School {
    id: string;
    name: string;
    // Add other properties as needed
}

interface Campus {
    id: string;
    name: string;
    schoolName: string;
    // Add other properties as needed
}

export default function SignUp() {

    const router = useRouter();
    const [schoolArray, setSchoolArray] = useState<School[]>([]);
    const [campusArr, setCampusArr] = useState<Campus[]>([])

    const schoolPicked = useRef()

    //useForm is expecting Input type
    const form = useForm<Input>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            studentId: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    })

    //logs form when updated
    // console.log(form.watch());

    async function onSubmit(data: Input) {
        console.log(data)
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })

        const userInfo = await response.json()
        router.push('/sign-in')
    }

    async function getSchools() {
        const schoolArr = await fetch('/api/schools', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return schoolArr.json()
    }

    useEffect(() => {
        async function fetchSchools() {
            try {
                const schools = await getSchools();
                setSchoolArray(schools.data.schoolArr);
                setCampusArr(schools.data.campusArr)
            } catch (error) {
                console.error("Error fetching schools:", error);
            }
        }

        fetchSchools();
    }, []);

    useEffect(() => {
        console.log(schoolArray)
    }, [schoolArray])

    return (
        <div className="w-[100dvw] h-[100dvh] max-h-[100dvh] bg-[white] text-black flex justify-center">
            <Card className=" absolute top-[15%] shadow-gray-300 rounded shadow-lg border-t-0 flex flex-col border-none w-[85%] max-h-[80dvh] overflow-scroll px-4 py-8">
                <CardHeader className="p-0">
                    <CardTitle className="text-[#390A75] mb-8">Sign Up</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pl-2 ">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" className="bg-[#F3F3F3] rounded border-0"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} className="bg-[#F3F3F3] rounded border-0" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="school"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>School</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-[#F3F3F3] rounded border-0">
                                                    <SelectValue placeholder="Select your School" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-[#F3F3F3] rounded border-0">
                                                {schoolArray.length > 0 ? (
                                                    schoolArray.map((school) => (
                                                        <SelectItem key={school.id} value={school.name}>
                                                            {school.name}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="Loading schools..." />
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="campus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Campus</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-[#F3F3F3] rounded border-0">
                                                    <SelectValue placeholder="Select your Campus" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-[#F3F3F3] rounded border-0">
                                                {campusArr.length > 0 ? (
                                                    campusArr.map((campus) => (
                                                        <SelectItem key={campus.id} value={campus.id}>
                                                            {campus.name + " " + campus.schoolName}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="Loading campus..." />
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="studentId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Student ID</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Student I.D." className="bg-[#F3F3F3] rounded border-0" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>School Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} className="bg-[#F3F3F3] rounded border-0" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" {...field} type="password" className="bg-[#F3F3F3] rounded border-0" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Confirm Password" {...field} type="password" className="bg-[#F3F3F3] rounded border-0" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-[#470D92] text-[#FCFCFC] rounded-[20px]">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
