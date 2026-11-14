/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` produces a plain HTML/CSS/JS site in /out
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
