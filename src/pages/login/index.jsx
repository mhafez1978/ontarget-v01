import React from "react";
import NavigationMenu from "../../components/navigation-menu";
import { useSession } from "next-auth/react";

const LoginWithGitHub = () => {
  const { data: session } = useSession();
  const { status } = useSession();

  if (!session || status === "loading") {
    return (
      <>
        <NavigationMenu />
      </>
    );
  }

  return (
    <>
      <main>
        <nav>
          <li>home</li>
          <li>About</li>
        </nav>
      </main>
    </>
  );
};

export default LoginWithGitHub;
