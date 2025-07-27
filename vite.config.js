import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test APIs like 'test', 'describe', 'expect'
    environment: 'jsdom', // or other environment if applicable
    exclude: [...configDefaults.exclude, '**/e2e/**'], // Example usage
    // ... other test configuration
  },
  // ... other Vite configuration
})
