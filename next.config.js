/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.(mp4|webm|ogg)$/,
			use: {
				loader: "file-loader",
				options: {
					publicPath: "/_next/static/videos/",
					outputPath: "static/videos/",
					name: "[name].[hash].[ext]",
					esModule: false,
				},
			},
		});

		return config;
	},
};

module.exports = nextConfig;
