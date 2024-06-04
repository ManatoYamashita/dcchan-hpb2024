import withSvgr from "next-plugin-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // ファイルローダーを追加して動画ファイルを処理
    config.module.rules.push({
      test: /\.(mov|webm)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/static/videos/`,
            outputPath: `${isServer ? "../" : ""}static/videos/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default withSvgr(nextConfig);
