import { Component } from '@robertakarobin/web/component.ts';

import { bp, theme, vars } from '@src/theme.ts';
import { Link } from '@src/router.ts';

const style = `
:host {
	@media ${bp.lessThan.tablet} {
		background-color: #FFFFFF;
		padding: ${vars.marginContentY} ${vars.marginContentX};
		text-align: center;

		& ._mn {
			display: none;
		}
	}

	@media ${bp.moreThan.tablet} {
		align-items: center;
		background-image:url('/assets/images/rochester.jpg');
		background-position: center right;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: flex-end;
		padding: 100px 0;
		position: relative;

		& ._body {
			--cloudOverlap: ${vars.marginContentX};

			background-color: #FFFFFFF0;
			border: 0 solid #00000030;
			border-radius: var(--cloudOverlap) 0 0 var(--cloudOverlap);
			border-width: 1px 0 1px 1px;
			height: 100%;
			padding: ${vars.marginContentY} ${vars.marginContentX};
			position: relative;
			width: 50%;

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
<section>
	<header>
		<h1>
			<img
				alt="Southeast Minnesota Capital Fund"
				class="_mn"
				src="/assets/images/smcf-mn.svg"
				/>
		</h1>
	</header>

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
