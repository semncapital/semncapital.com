import { Page } from '@robertakarobin/web/index.ts';

import about from './sections/about.ts';
import companies from './sections/companies.ts';
import contact from './sections/contact.ts';
import preferences from './sections/preferences.ts';

const template = () => `
<section
	class="section section--hero"
	style="background-image: url('/assets/images/rochester.jpg')"
>
	<header>
		<h1>
			<img
				alt="Southeast Minnesota Capital Fund"
				src="/assets/images/smcf.svg"
				/>
		</h1>
	</header>

	<p>We are a member-driven angel investment group focused on backing Minnesota entrepreneurs, and dedicated to fostering innovation and economic growth in Rochester and the Greater Southeast Minnesota region.</p>
</section>

<section class="section">
	<header>
		<h2>About</h2>
	</header>

	<ul>
		${about()}
	</ul>
</section>

<section class="section">
	<header>
		<h2>Investment Preferences</h2>
	</header>

	<ul>
		${preferences()}
	</ul>
</section>

<section class="section">
	<header>
		<h2>Portfolio Companies</h2>

		<p>These are the companies SE MN Capital Fund has invested in.</p>
	</header>

	<ul>
		${companies()}
	</ul>
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
