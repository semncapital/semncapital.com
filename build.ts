import { execSync } from 'child_process';

import { Builder } from '@robertakarobin/web/build.ts';

class CustomBuilder extends Builder {
	cleanup() {
		try {
			execSync(`npm run lint`, { encoding: `utf8`, stdio: `inherit` });
		} catch (error) {
		}
	}

	formatHtml(input: Parameters<Builder[`formatHtml`]>[0]) {
		return super.formatHtml({
			...input,
			head: `<meta name="description" content="The Southeast Minnesota Capital Fund provides early-stage investment capital to Minnesota entrepreneurs building innovative, high growth companies. We invest across the state, with a preference for companies located in or connected to Rochester and SE Minnesota.">`,
		});
	}
}

const builder = new CustomBuilder();

await builder.build({ serve: process.argv.includes(`--serve`) });
