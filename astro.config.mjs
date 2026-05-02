import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://danshtu.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Nimbus Sans L",
      cssVariable: "--font-nimbus",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/NimbusSansL-Bold.otf"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/NimbusSansL-BoldItalic.otf"],
            weight: 400,
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/NimbusSansL-Bold.otf"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/NimbusSansL-BoldItalic.otf"],
            weight: 700,
            style: "italic",
          },
        ],
      },
    },
  ],
});
