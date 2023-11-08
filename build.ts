import esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { getBuildOptions } from '@robertakarobin/web/build.ts';
import path from 'path';

import { resolve, routes } from './src/routes.ts';
import baseStyles from './src/styles.css.ts';
import layout from './src/pages/_layout.ts';

const baseDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(baseDir, `/public`);

fs.rmSync(distDir, { force: true, recursive: true });
fs.mkdirSync(distDir);

fs.writeFileSync(path.join(distDir, `styles.css`), baseStyles);

const vendorFile = `/web.js`;
esbuild.buildSync({
	bundle: true,
	entryPoints: [`@robertakarobin/web/index.ts`],
	format: `esm`,
	outfile: path.join(distDir, vendorFile),
});

const buildOptions = await getBuildOptions({
	baseDir,
	distDir,
	resolve: async path => layout((await resolve(path))!),
	routes,
});

await esbuild.build({
	absWorkingDir: distDir,
	alias: {
		"@robertakarobin/web/index.ts": vendorFile,
	},
	bundle: true,
	entryPoints: [
		{ in: path.join(baseDir, `./src/script.ts`), out: `script` },
		...buildOptions.entryPoints,
	],
	external: [
		vendorFile,
	],
	format: `esm`,
	outdir: distDir,
	plugins: [
		...buildOptions.plugins,
	],
});

if (process.argv.includes(`--serve`)) {
	const port = 3000;
	void retryPort();
	async function retryPort() {
		(await esbuild.context({})).serve({
			port,
			servedir: distDir,
		}).then(() => {
			console.log(`Serving at http://localhost:${port}`);
		}).catch(() => {
			void retryPort();
		});
	}
}