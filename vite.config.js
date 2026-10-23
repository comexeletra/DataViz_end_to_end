import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
export default { base: './', plugins: [react(), viteSingleFile()], build: { assetsInlineLimit: 100000000 } };
