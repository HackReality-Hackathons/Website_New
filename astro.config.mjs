import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [preact(), icon(), tailwind(), react()],
});