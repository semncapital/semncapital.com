import { Page } from '@robertakarobin/web/component.ts';

// import about from './sections/about.ts';
import { FooterComponent } from '@src/sections/footer.ts';
import { NavComponent } from '@src/sections/nav.ts';

import { CompaniesComponent } from '@src/sections/companies.ts';
import { ContactComponent } from '@src/sections/contact.ts';
import { HomeHero } from '@src/sections/hero.ts';
import { PreferencesComponent } from '@src/sections/preferences.ts';

const template = () => `
<body>
	${new NavComponent().render()}

	<main>
		${new HomeHero().render()}

		${new CompaniesComponent().render()}

		${new PreferencesComponent().render()}

		${new ContactComponent().render()}

		${new FooterComponent().render()}
	</main>
</body>
`;

export class HomePage extends Page {
	template = template;
}
