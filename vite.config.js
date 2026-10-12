import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{rollupOptions:{input:{home:new URL('./index.html',import.meta.url).pathname,en:new URL('./library-en.html',import.meta.url).pathname,ru:new URL('./library.html',import.meta.url).pathname}}}});
