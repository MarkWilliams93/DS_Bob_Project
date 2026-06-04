import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: 'example',
      server: {
        port: 5173,
      },
    };
  }

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'marks-super-basic-design-system',
        formats: ['es', 'cjs', 'umd'],
        fileName: (format) => `marks-super-basic-design-system.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  };
});
