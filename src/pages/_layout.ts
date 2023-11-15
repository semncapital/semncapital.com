import { Component, Page } from '@robertakarobin/web/index.ts';

import footer from './sections/footer.ts';
import nav from './sections/nav.ts';

export default (contents: string) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>${Page.title.last ? `${Page.title.last} | ` : ``}SEMN Capital Fund</title>
		<base href="/" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script src="/web.js" type="module"></script>
		<script src="/script.js" type="module"></script>
		<link rel="stylesheet" href="/styles.css" />
		<style>${Array.from(Component.styleCache.values()).join(`\n`)}</style>
	</head>
	<body>
		${nav()}

		<main id="output">${contents}</main>

		${footer()}
	</body>
</html>
`;
