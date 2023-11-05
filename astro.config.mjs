import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import netlify from "@astrojs/netlify/functions";
import { redirectsIntegration } from "./integrations/redirects";

// https://astro.build/config
export default defineConfig({
  site: "https://choose-tech.com",
  trailingSlash: "always",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    redirectsIntegration({
      redirects: ["databases", "javascript-libraries", "vue-ui-libraries"],
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  output: "hybrid",
  adapter: netlify(),
});
