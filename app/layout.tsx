import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "沐汪宠物洗护店",
  description: "一宠一浴缸，温柔低压洗护的宠物门店单页。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
