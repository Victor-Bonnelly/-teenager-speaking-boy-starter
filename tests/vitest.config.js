import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default definesConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.js"],
    coverage: {
      enabled: true,
    },
  },
});
