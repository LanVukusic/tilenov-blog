import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: "m93tb79t",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true
  })]
});