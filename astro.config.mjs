import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://assets.teaclient.net",
	redirects: {
	   '/': {
		  status: 301,
		  destination: 'https://teaclient.net/wiki',
	  },
	},
	integrations: [
		mdx(),
		tailwind(),
		(await import("@playform/compress")).default({
			CSS: true,
			HTML: true,
			Image: true,
			JavaScript: true,
			SVG: true,
		}),
	],
	compressHTML: true,
});
