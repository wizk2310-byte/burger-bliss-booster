// @lovable.dev/vite-tanstack-config already provides the core TanStack/React/Nitro setup.
// Netlify's official TanStack Start adapter is added through the wrapper's Vite config.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [netlify()],
  },
});
