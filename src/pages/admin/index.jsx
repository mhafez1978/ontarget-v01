import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  // session is always non-null inside this page, all the way down the React tree.
  return (
    <>
      <h2>Some super secret Admin dashboard</h2>
      <button
        onClick={() => {
          router.push("/api/auth/signout");
        }}
      >
        Logout
      </button>
    </>
  );
}

AdminDashboard.auth = true;
AdminDashboard.auth = {
  role: "admin",
  //   loading: "loading ....",
  unauthorized: "/login", // redirect to this url
};
