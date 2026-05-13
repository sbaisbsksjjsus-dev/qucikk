import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 开启静态导出
  images: {
    unoptimized: true, // 静态导出不支持 Next.js 图片优化，需开启此项
  },
};

export default nextConfig;