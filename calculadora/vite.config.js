import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/calculadora-com-react/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Calculadora React",
        short_name: "CalcReact",
        description: "Calculadora feita em React",
        theme_color: "#000000",
        background_color: "#1a1a1a",
        display: "standalone",
        start_url: "/calculadora-com-react/",

        icons: [
          {
            src: "favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
