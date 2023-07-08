import { useSession } from "next-auth/react";

const AppHeader = () => {
  const { data: session } = useSession();
  const { status } = useSession();

  if (!session || status === "loading" || status === "unauthenticated") {
    return (
      <>
        <header>
          <h1>Brand Name</h1>
          <ul>
            <li>menu when not logged in </li>
          </ul>
        </header>
      </>
    );
  }

  return (
    <>
      <header>
        <h1>Brand Name</h1>
        <ul>
          <li>menu when logged in </li>
        </ul>
      </header>
    </>
  );
};

export default AppHeader;
