import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5250, // por defecto 5250
    host: true, // para que acepte conexiones externas en docker
  },
});
