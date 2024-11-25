import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header className="flex justify-between items-center px-4 py-4 border-b-2 border-blue-800 mx-2">
        <div className="flex flex-col gap-2 m-0">
          <h1 className="font-bold text-xl">{"فرم درخواست"}</h1>
          <p className="text-gray-500 flex gap-1 m-0">
            <span>{"ارسال رزومه برای شغل :"}</span>
            <span>{"تست 2"}</span>
          </p>
        </div>
        <div>
          <button className="text-red-400 font-bold border border-red-400 px-2 py-1 rounded-lg hover:bg-red-100 transition">{"لغو درخواست"}</button>
        </div>
      </header>
        {children}
      </body>
    </html>
  );
}
