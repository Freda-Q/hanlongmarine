import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://freda-q.github.io",
  base: "/hanlongmarine/",
  integrations: [tailwind()],
  output: "static"
});
