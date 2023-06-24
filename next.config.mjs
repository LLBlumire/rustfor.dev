import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = nextMDX({
  options: {
    remark: [remarkGfm],
    rehype: [],
  }
});

export default withMDX(nextConfig);
