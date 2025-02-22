import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kinsta.com",
      },
      {
        protocol: "https",
        hostname: "d2gr4gsp182xcm.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "humancoders-formations.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "mui.com",
      },
      {
        protocol: "https",
        hostname: "programandoointentandolo.com",
      },
      {
        protocol: "https",
        hostname: "docs.nestjs.com",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
