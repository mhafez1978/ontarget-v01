"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    console.log(session.user);
    return (
      <>
        <h3>You&apos;re signed in as {session.user.name}</h3>
        <button onClick={() => router.push("/api/auh/signout")}>
          Sign out
        </button>
        {router.push("/dashboard")}
      </>
    );
  }
  return (
    <>
      <h3>Not signed in</h3>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        Sign in
      </button>
    </>
  );
}
