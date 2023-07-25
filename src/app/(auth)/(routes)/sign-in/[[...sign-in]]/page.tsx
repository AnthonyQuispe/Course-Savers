import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return <div className="w-[100dvw] h-[100dvh] bg-[url('/signInBackground.png')] bg-cover flex justify-center items-center">
        <SignIn
        />
    </div>
}