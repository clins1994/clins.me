import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export const {
  PUBLIC_FIRST_NAME: FIRST_NAME,
  PUBLIC_LAST_NAME: LAST_NAME,
  PUBLIC_HANDLE: HANDLE,
  PUBLIC_EMAIL: EMAIL,
  PUBLIC_RESUME_URL: RESUME_URL
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  site: 'https://clins.me',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
})
