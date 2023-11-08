import { Page } from '@robertakarobin/web/index.ts';

import route from './routes.ts';

const template = () => `
<nav>
	${route(`about`, `About`)}
	${route(`preferences`, `Investment Preferences`)}
	${route(`portfolio`, `Portfolio`)}
	${route(`contact`, `Contact`)}
</nav>
`;

export class HomePage extends Page {
	template = template;
	title = ``;
}

export default HomePage.toFunction(HomePage);
