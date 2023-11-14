import { Component, Page } from '@robertakarobin/web/index.ts';

import route from '../components/route.ts';

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
		<nav class="nav">
			${route(`home`, `
				<img
					alt="Southeast Minnesota Capital Fund logo"
					src="/assets/images/smcf-sm.svg"
				/>
			`, { class: `nav__logo` })}

			<button
				aria-label="Open sidebar"
				class="nav__toggle"
			>☰</button>

			<ul class="nav__links">
				<li>${route(`home`, `About`)}</li>
				<li>${route(`preferences`, `Investment Preferences`)}</li>
				<li>${route(`portfolio`, `Portfolio`)}</li>
				<li>${route(`contact`, `Contact`)}</li>
			</ul>
		</nav>

		<button
			aria-label="Close sidebar"
			class="nav__toggle nav__toggle--closed"
		>&times;</button>

		<main id="output">${contents}</main>

		<footer>
			<h2>Southeast Minnesota Capital Fund</h2>

			<address>221 1st Avenue SW. Suite 202<br />
			Rochester, MN 55902</address>
		</footer>
	</body>
</html>
`;
