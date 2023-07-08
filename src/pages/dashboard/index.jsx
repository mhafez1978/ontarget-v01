import { useSession, signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });
  const { data: session } = useSession();

  if (status === "loading") {
    return (
      <>
        <button
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
      </>
    );
  }

  return (
    <>
      <main>
        <h2>Welcome back, {session.user.name}</h2>
        <img src={session.user.image} alt="" />
        <p>978-888-7688</p>
        <button
          onClick={() => {
            router.push("/profile");
          }}
        >
          Your profile page
        </button>
        <button
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          Logout
        </button>
      </main>
    </>
  );
}
