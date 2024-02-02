import { Component } from '@robertakarobin/util/component.ts';

import { bp, theme, vars } from '@src/theme.ts';

const style = /*css*/`
:host {
	background-color: ${vars.colorBrandLow};
	color: #ffffff;
	padding: calc(2 * ${vars.marginContentY}) ${vars.marginContentX};
	text-align: center;

	& a {
		color: #ffffff;
	}

	@media ${bp.moreThan.tablet} {
		padding-left: calc(${vars.navWidth} + ${vars.marginContentX});
	}
}
`;

@Component.define({ style })
export class FooterComponent extends Component.custom(`footer`) {
	static style = style;
	template = () => /*html*/`
	<h2 class="${theme.typeClassNames.h2}">Southeast Minnesota Capital Fund</h2>

	<address>221 1st Avenue SW. Suite 600<br />
	Rochester, MN 55902</address>

	<p><a href="mailto:exec@semncapital.com">exec@semncapital.com</a></p>
	`;
}
