import { execSync } from 'child_process';
import postCss from 'postcss';
import postcssNested from 'postcss-nested';

import { Builder } from '@robertakarobin/ssg/build.ts';

class CustomBuilder extends Builder {
	cleanup() {
		try {
			execSync(`npm run lint`, { encoding: `utf8`, stdio: `inherit` });
		} catch (error) {
		}
	}

	async formatCss(input: string) {
		const unnested = await postCss([postcssNested]).process(input, {
			from: undefined,
		});
		let css = unnested.css;
		css = await super.formatCss(unnested.css);
		return css;
	}

	formatHead(input: Parameters<Builder[`formatHead`]>[0]) {
		return /*html*/`
			${super.formatHead({
				...input,
				description: `The Southeast Minnesota Capital Fund provides early-stage investment capital to Minnesota entrepreneurs building innovative, high growth companies. We invest across the state, with a preference for companies located in or connected to Rochester and SE Minnesota.`,
			})}
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
			<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
		`;
	}
}

const builder = new CustomBuilder();

await builder.build({ serve: process.argv.includes(`--serve`) });
