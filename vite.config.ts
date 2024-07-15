import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'ProjetoBase',
      // the proper extensions will be added
      fileName: (format) => `projeto-base.${format}.js`,
      formats: ['es', 'umd'] // Gerar ambos os formatos
      /*entry: path.resolve(__dirname, 'src/components/MeuBotao.vue'),
      name: 'MeuBotao',
      fileName: (format) => `meu-botao.${format}.js`,
      formats: ['umd'],*/
    },
    rollupOptions: {
      external: ['vue'], // Lista de dependências externas
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue()],
});
