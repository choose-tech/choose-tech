import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://choose-tech.com",
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  vite: {
    plugins: [Icons({
      compiler: "astro"
    })]
  },
  output: "hybrid",
  adapter: vercel()
});