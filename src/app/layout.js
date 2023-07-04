import "./globals.css";
import { Roboto } from "next/font/google";
import { Providers } from "./Providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomepageContent from "@/components/homepageContent";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
});

export const metadata = {
  title: "OnTarget",
  description: "Business as usual...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Navbar />

          <HomepageContent>{children}</HomepageContent>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
