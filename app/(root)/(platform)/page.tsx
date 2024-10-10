import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={"/sign-in"}>Login</Link>
            <Link href={"/sign-up"}>Create an account</Link>

            <Link href={"/dashboard"} className="block my-2 ">
                Go To Dashboard
            </Link>
        </div>
    );
}
