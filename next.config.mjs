import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  remark: [remarkGfm],
  rehype: []
});

export default withMDX(nextConfig);
