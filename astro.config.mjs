/* tasuren.xyz - Astro's Config */

import { defineConfig } from 'astro/config';

import { setDefaultOptions } from 'date-fns';
import jaLocale from "date-fns/locale/ja";


const DEFAULT_LAYOUT = '/src/layouts/Main.astro';

function setDefaultLayout() {
  return function (_, file) {
    const { frontmatter } = file.data.astro;
    if (!frontmatter.layout) frontmatter.layout = DEFAULT_LAYOUT;
  };
};


export default defineConfig({
  markdown: {
    remarkPlugins: [setDefaultLayout]
  },
  experimental: {
    assets: true
  }
});


// デフォルトのdate-fnsの言語設定を日本語にする。 
setDefaultOptions({locale: jaLocale});