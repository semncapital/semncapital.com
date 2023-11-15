import { Page } from '@robertakarobin/web/index.ts';

// import about from './sections/about.ts';
import companies from './sections/companies.ts';
import contact from './sections/contact.ts';
import hero from './sections/hero.ts';
import preferences from './sections/preferences.ts';

const template = () => `

${hero()}

${companies()}

${preferences()}

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
