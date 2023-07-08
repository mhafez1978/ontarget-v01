import { useSession, signIn } from "next-auth/react";

export default function Page() {
  const { data: session, status, update } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <main>
          <h2>Profile Info</h2>
          <p>Signed in as {session.user.name}</p>
          <img src={session.user.image} alt=" " />
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <h2>You need to be logged in to view your profile </h2>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login Here
        </button>
      </main>
    </>
  );
}
