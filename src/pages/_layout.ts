import { Page } from '@robertakarobin/web/index.ts';

import nav from '../components/nav.ts';

export default (contents: string) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>${Page.title.last ? `${Page.title.last} | ` : ``}SEMN Capital Fund</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script src="/web.js" type="module"></script>
		<script src="/script.js" type="module"></script>
		<link rel="stylesheet" href="/styles.css" />
	</head>
	<body>
		${nav()}
		<div id="output">${contents}</div>
	</body>
</html>
`;
