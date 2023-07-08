import { SessionProvider } from "next-auth/react";
import AppHeader from "@/components/app-header";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <AppHeader />
          <Component {...pageProps} />
        </Auth>
      ) : (
        <>
          <AppHeader />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}
