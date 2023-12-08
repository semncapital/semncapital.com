import { Component } from '@robertakarobin/web/component.ts';

import { theme, vars } from '@src/theme.ts';

const style = `
:host {
	background-color: ${vars.colorBrandLow};
	color: #ffffff;
	padding: calc(2 * ${vars.marginContentY}) ${vars.marginContentX};
	text-align: center;

	& a {
		color: #ffffff;
	}
}
`;

export class FooterComponent extends Component {
	static style = style;
	template = () => `
	<footer>
		<h2 class="${theme.typeClassNames.h2}">Southeast Minnesota Capital Fund</h2>

		<address>221 1st Avenue SW. Suite 202<br />
		Rochester, MN 55902</address>

		<p><a href="mailto:exec@semncapital.com">exec@semncapital.com</a></p>
	</footer>
	`;
}
