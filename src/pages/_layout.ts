import { Page } from '@robertakarobin/web/index.ts';

export default (contents: string) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>${Page.title.last}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<script src="/web.js" type="module"></script>
		<script src="/script.js" type="module"></script>
		<link rel="stylesheet" href="/styles.css" />
	</head>
	<body>
		<div id="output">${contents}</div>
	</body>
</html>
`;
