import { BaseApp } from '@robertakarobin/util/components/app.ts';
import { Component } from '@robertakarobin/util/component.ts';

import { resolver, router } from '@src/router.ts';
import { FooterComponent } from '@src/sections/footer.ts';
import { NavComponent } from '@src/sections/nav.ts';

@Component.define()
export class App extends BaseApp {
	resolver = resolver;
	router = router;

	template = () => /*html*/`
${new NavComponent()}

${this.page}

${new FooterComponent()}
	`;
}
