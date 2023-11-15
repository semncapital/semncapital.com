import { Page } from '@robertakarobin/web/index.ts';

import about from './sections/about.ts';
import companies from './sections/companies.ts';
import contact from './sections/contact.ts';
import hero from './sections/hero.ts';
import preferences from './sections/preferences.ts';

const template = () => `

${hero()}

<section class="section">
	<header>
		<h2>Portfolio Companies</h2>

		<p>These are the companies SE MN Capital Fund has invested in.</p>
	</header>

	${companies()}
</section>

<section class="section">
	<header>
		<h2>About</h2>
	</header>

	${about()}
</section>

<section class="section">
	<header>
		<h2>Investment Preferences</h2>
	</header>

	${preferences()}
</section>

<section class="section">
	<header>
		<h2>Contact</h2>
	</header>

	${contact()}
</section>
`;

export class HomePage extends Page {
	importMetaUrl = import.meta.url;
	template = template;
	title = ``;
}

export default HomePage.toFunction(HomePage);
