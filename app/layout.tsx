import "@/app/ui/global.css";
import {inter} from "@/app/ui/fonts";
import { Metadata } from "next";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'next guide turial',
  description: 'a full-stack framwork',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}