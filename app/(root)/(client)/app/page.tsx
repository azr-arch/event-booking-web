import { auth } from "@/auth";
import UserNav from "../../(admin)/admin/_components/user-nav";

export default async function AppPage() {
  const session = await auth();

  return (
    <div>
      <h1>🚧 Under Construction 🚧</h1>
      <p>The client-side app is currently being developed.</p>
      <p>Stay tuned for updates!</p>
      <UserNav session={session} />
    </div>
  );
}
