import { signOutFn } from "@/actions/auth/sign-out";

export function SignOut() {
    return (
        <form action={signOutFn}>
            <button type="submit">Sign Out</button>
        </form>
    );
}
