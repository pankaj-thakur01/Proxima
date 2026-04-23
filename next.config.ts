import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactCompiler: true,

  images:{
    domains: ['encrypted-tbn0.gstatic.com','previews.123rf.com',"cdn-icons-png.freepik.com"]
  }


};

export default nextConfig;
