import { build, type BuildOptions, watchAndServe } from '@robertakarobin/web/build.ts';

import { resolve, routes } from './src/routes.ts';
import layout from './src/pages/_layout.ts';

const options: BuildOptions<typeof routes> = {
	layout,
	resolve,
	routes,
};

if (process.argv.includes(`--watch`)) {
	watchAndServe(options);
} else {
	await build(options);
}
