import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve("src/WidgetEntry.tsx"),
      name: "FaqWidget",
      fileName: (format) => `faq-widget.${format}.js`,
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"), // 👈 Add this line
  },
});
