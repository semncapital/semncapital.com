import { Component } from '@robertakarobin/web/component.ts';

import { Link, routes } from '@src/router.ts';
import { theme, types, vars } from '@src/theme.ts';

const style = `
:host {
	background-color: #ffffff;
	padding: ${vars.marginContentY} ${vars.marginContentX};
	text-align: center;

	& header {
		margin: 30px 0;
	}

	& h3 {
		${types.h3}

		margin: 30px 0;
	}

	& ._body {
		margin: 0 auto;
		max-width: 600px;
		width: 100%;
	}
}
`;

const content = `
<markdown>
### Questions about the Southeast MN Capital Fund?

Please send an email to [exec@SEMNCapital.com](mailto:exec@SEMNCapital.com).

### Entrepreneurs

Please first review our ${new Link().to(`preferences`, `Investment Preferences`)}. If you feel your company may be a
good fit for us, please send a short description of your company and/or a short slide deck to [exec@SEMNCapital.com](mailto:exec@SEMNCapital.com).
</markdown>
`;

const template = () => `
<section id="${routes.contact.idAttr}">
	<header>
		<h2 class="${theme.typeClassNames.h1}">
			${new Link().to(`contact`, `Contact`)}
		</h2>
	</header>

	<div class="_body">
		${content}
	</div>
</section>
`;

export class ContactComponent extends Component {
	static style = style;
	static {
		this.init();
	}
	template = template;
}
