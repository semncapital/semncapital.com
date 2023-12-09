import { Component } from '@robertakarobin/web/component.ts';

import { bp, theme, vars } from '@src/theme.ts';
import { Link } from '@src/router.ts';

const style = `
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
		min-height: 80vh;
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

const template = () => `
<section style="background-image:url('/assets/images/rochester.jpg')">
	<div class="_body">
		<p class="${theme.typeClassNames.h2}">The <strong>Southeast Minnesota Capital Fund</strong> is a member-driven angel investment group focused on backing Minnesota entrepreneurs, and dedicated to fostering innovation and economic growth in Rochester and Greater Southeast Minnesota.</p>

		<p>
			${new Link().to(`contact`, `Get in touch`, { class: `button` })}
		</p>
	</div>
</section>
`;

export class HomeHero extends Component {
	static style = style;
	static {
		this.init();
	}
	template = template;
}
