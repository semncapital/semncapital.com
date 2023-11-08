import { Page } from '@robertakarobin/web/index.ts';

const template = () => `
<header>
	<h1>Southeast Minnesota Capital Fund</h1>

	<p>We back innovative Minnesota start-ups and are dedicated to fostering economic growth in Southeastern Minnesota.</p>
</header>

<section>
	<h2>About</h2>
</section>
`;

export class HomePage extends Page {
	importMetaUrl = import.meta.url;
	template = template;
	title = ``;
}

export default HomePage.toFunction(HomePage);
