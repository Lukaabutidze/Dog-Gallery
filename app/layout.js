import { Lora } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const lora = Lora({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Dog Gallery",
  description: "Dog images gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navigation />

        {children}
      </body>
    </html>
  );
}
