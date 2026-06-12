import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://new.hanlongmarine.com",
  base: "/",
  integrations: [tailwind()],
  output: "static"
});
