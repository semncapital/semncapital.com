import { Builder } from '@robertakarobin/web/build.ts';

import { type app } from './src/app.ts';
import layout from './src/pages/_layout.ts';

class CustomBuilder extends Builder<typeof app[`routes`]> {
	formatHtml(input: string) {
		return layout(input);
	}
}

const builder = new CustomBuilder();

await builder.build({ serve: process.argv.includes(`--serve`) });
