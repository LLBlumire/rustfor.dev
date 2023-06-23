/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
  },
};

const withMDX = require("@next/mdx")({
  remark: [require("remark-gfm")],
  rehype: []
});
module.exports = withMDX(nextConfig);
