import type { AstroIntegration } from "astro";
import { fileURLToPath } from "node:url";
import fsp from "node:fs/promises";

export const redirectsIntegration = (options: {
  redirects: Array<string>;
}): AstroIntegration => {
  return {
    name: "@choose-tech/redirects",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const redirectsPath = fileURLToPath(new URL("./_redirects", dir));

        let fileContent = await fsp.readFile(redirectsPath, "utf-8");
        for (const redirect of options.redirects) {
          fileContent += `/${redirect}/* https://${redirect}.choose-tech.com/${redirect}/:splat 200!\n`;
        }
        await fsp.writeFile(redirectsPath, fileContent, "utf-8");
      },
    },
  };
};
