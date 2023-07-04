// import Image from "next/image";

import styles from "./page.module.css";
import Call2Action from "@/components/c2action";

export const metadata = {
  title: "OnTarget | Home",
  description: "Business as usual...",
};

export default function Home() {
  return (
    <>
      <Call2Action />
      <main className={styles.main}>
        <h1>This is Home page</h1>
      </main>
    </>
  );
}
