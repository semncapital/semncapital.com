import { Component } from '@robertakarobin/util/component.ts';

import { bp, theme, vars } from '@src/theme.ts';
import { paths } from '@src/router.ts';

const style = /*css*/`
:host {
	@media ${bp.lessThan.tablet} {
		background-color: #ffffff;
		background-image: none !important;
		padding: ${vars.marginContentY} ${vars.marginContentX};
		text-align: center;

		& ._mn {
			display: none;
		}
	}

	@media ${bp.moreThan.tablet} {
		align-items: center;
		background-position: center right;
		background-repeat: no-repeat;
		background-size: cover;
		box-sizing: border-box;
		display: flex;
		min-height: 100vh;
		justify-content: flex-end;
		padding: 100px 0;
		position: relative;

		& ._body {
			--cloudOverlap: ${vars.marginContentX};

			background-color: #ffffffc0;
			backdrop-filter: blur(4px);
			border-radius: var(--cloudOverlap) 0 0 var(--cloudOverlap);
			height: 100%;
			padding: ${vars.marginContentY} ${vars.marginContentX};
			position: relative;
			width: 66%;

		}

		& ._mn {
			height: 100%;
			left: ${vars.marginContentX};
			opacity: 0.4;
			position: absolute;
			top: 0;
		}
	}
}
`;

@Component.define({ style })
export class HomeHero extends Component.custom(`header`) {
	static style = style;
	template = () => /*html*/`
<host style="background-image:url('/assets/images/rochester.jpg')">
	<div class="_body">
		<p class="${theme.typeClassNames.h2}">The <strong>Southeast Minnesota Capital Fund</strong> provides early-stage investment capital to Minnesota entrepreneurs building innovative, high growth companies. We invest across the state, with a preference for companies located in or connected to Rochester and SE Minnesota.</p>

		<p>
			<a href="${paths.contact}" class="button">Get in touch</a>
		</p>
	</div>
</host>
`;
}
