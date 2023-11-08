import { Component } from '@robertakarobin/web/index.ts';

import route from './routes.ts';

const template = () => `
<nav>
	${route(`home`, `About`)}
	${route(`preferences`, `Investment Preferences`)}
	${route(`portfolio`, `Portfolio`)}
	${route(`contact`, `Contact`)}
</nav>
`;

export class NavComponent extends Component {
	template = template;
}

export default NavComponent.toFunction(NavComponent);
