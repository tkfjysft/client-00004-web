// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // glob ローダーをインポート

const home = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/home" }),
});

export const collections = { home };