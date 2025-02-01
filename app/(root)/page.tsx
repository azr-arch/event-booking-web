import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Link href={"/sign-in"}>
                <Button>Login</Button>
            </Link>
            <Link href={"/sign-up"}>
                <Button variant={"outline"}>Create an account</Button>
            </Link>
        </div>
    );
}
