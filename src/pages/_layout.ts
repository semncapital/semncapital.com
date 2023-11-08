import { Page } from '@robertakarobin/web/index.ts';

import nav from '../components/nav.ts';

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
		<link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
	</head>
	<body>
		${nav()}

		<main id="output">${contents}</main>

		<footer>
			<h2>Southeast Minnesota Capital Fund</h2>

			<address>221 1st Avenue SW. Suite 202<br />
			Rochester, MN 55902</address>
		</footer>
	</body>
</html>
`;
