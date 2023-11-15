import { Component } from '@robertakarobin/web/index.ts';

import { css, fonts } from '../../styles/shared.ts';
import route from '../../components/route.ts';

const pfx = `contact`;

const style = `
.${pfx} {
	box-sizing: border-box;
	margin: 0 auto;
	max-width: 600px;
	padding: ${css.marginContentY} ${css.marginContentX};
	text-align: center;
	width: 100%;

	& header {
		margin: ${css.marginContentY} 0;
	}

	& h3 {
		${fonts.h3}

		margin: ${css.marginContentY} 0;
	}
}
`;

const content = `
<markdown>
### Questions about SE MN Capital Fund?

Please send an email to [exec@SEMNCapital.com](mailto:exec@SEMNCapital.com).

### Entrepreneurs

Please first review our ${route(`preferences`, `Investment Preferences`)}. If you feel your company may be a
good fit for us, please send a short description of your company and/or a short slide deck to [exec@SEMNCapital.com](mailto:exec@SEMNCapital.com).
</markdown>`;

const template = () => `
<section class="${pfx}" id="contact/">
	<header>
		<h2 class="text-h1">Contact</h2>
	</header>

	<div class="${pfx}__body">
		${content}
	</div>
</section>
`;

export class ContactComponent extends Component {
	style = style;
	template = template;
}

export default ContactComponent.toFunction(ContactComponent);
