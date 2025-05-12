import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: "m93tb79t",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true
  })]
});


