import Link from "next/link";

// TODO Redesign this
export default function NotFound() {
    return (
        <div>
            <p>Page not found!</p>
            <Link href={"/"} className="text-blue-500 hover:underline">
                Back to home
            </Link>
        </div>
    );
}
