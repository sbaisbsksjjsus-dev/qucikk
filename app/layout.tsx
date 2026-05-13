import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickQ-新一代AI智能VPN加速",
  description: "QuickQ 提供专业级全球网络访问加速，支持 QuickVPN 下载，稳定梯子工具保障。",
  keywords: ["quickQ", "quickQVPN", "quick", "VPN", "quiick", "quickQ下载", "quickvpn", "vpn下载", "翻墙", "梯子", "quick下载"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
