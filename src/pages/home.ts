import { Component, Page } from '@robertakarobin/util/component.ts';

import { AboutComponent } from '@src/sections/about.ts';
import { CompaniesComponent } from '@src/sections/companies.ts';
import { ContactComponent } from '@src/sections/contact.ts';
import { HomeHero } from '@src/sections/hero.ts';
import { PreferencesComponent } from '@src/sections/preferences.ts';

@Component.define()
export class HomePage extends Page {
	template = () => /*html*/`
	${new HomeHero()}

	${new CompaniesComponent()}

	${new PreferencesComponent()}

	${new AboutComponent()}

	${new ContactComponent()}
`;
}
