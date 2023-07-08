import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const About = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <>
        <main>
          You need to login
          <button
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <h2>This is the about us page...</h2>
      </main>
    </>
  );
};

export default About;
