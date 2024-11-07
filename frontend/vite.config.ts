import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@i18n': path.resolve(__dirname, './src/i18n'),
        '@atoms': path.resolve(__dirname, './src/components/atoms'),
        '@organisms': path.resolve(__dirname, './src/components/organisms'),
        '@templates': path.resolve(__dirname, './src/components/templates'),
        '@pages': path.resolve(__dirname, './src/components/pages'),
        '@hooks': path.resolve(__dirname, './src/helpers/hooks'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
      },
    },
    server: {
      host: true,
      port: parseInt(env.VITE_FRONTEND_PORT || '4173', 10),
    },
    preview: {
      host: true,
      port: parseInt(env.VITE_FRONTEND_PORT || '4173', 10),
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  };
});
