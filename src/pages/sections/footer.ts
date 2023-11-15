import { Component } from '@robertakarobin/web/index.ts';

import { css } from '../../styles/shared.ts';

const pfx = `footer`;

const style = `
.${pfx} {
	background-color: ${css.colorBrandLow};
	color: #FFFFFF;
	padding: calc(2 * ${css.marginContentY}) ${css.marginContentX};
	text-align: center;

	& a {
		color: #FFFFFF;
	}
}
`;


const template = () => `
<footer class="${pfx}">
	<h2 class="text-h2">Southeast Minnesota Capital Fund</h2>

	<address>221 1st Avenue SW. Suite 202<br />
	Rochester, MN 55902</address>

	<p><a href="mailto:exec@semncapital.com">exec@semncapital.com</a></p>
</footer>
`;

export class FooterComponent extends Component {
	style = style;
	template = template;
}

export default FooterComponent.toFunction(FooterComponent);
