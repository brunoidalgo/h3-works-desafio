import { Geist, Geist_Mono, Montserrat, Inconsolata } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}