import { Component } from '@robertakarobin/web/index.ts';

import { bp, css } from '../../styles/shared.ts';
import route from '../../components/route.ts';

const pfx = `home`;

const style = `
.${pfx} {
	@media ${bp.lessThan} {
		background-color: #FFFFFF;
		padding: ${css.marginContentY} ${css.marginContentX};
		text-align: center;

		& .${pfx}__mn {
			display: none;
		}
	}

	@media ${bp.moreThan} {
		align-items: center;
		background-image:url('/assets/images/rochester.jpg');
		background-position: center right;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: flex-end;
		padding: 100px 0;
		position: relative;

		& .${pfx}__body {
			--cloudOverlap: ${css.marginContentX};

			background-color: #FFFFFFF0;
			border: 0 solid #00000030;
			border-radius: var(--cloudOverlap) 0 0 var(--cloudOverlap);
			border-width: 1px 0 1px 1px;
			height: 100%;
			padding: ${css.marginContentY} ${css.marginContentX};
			position: relative;
			width: 50%;

		}

		& .${pfx}__mn {
			height: 100%;
			left: ${css.marginContentX};
			opacity: 0.4;
			position: absolute;
			top: 0;
		}
	}
}
`;

const template = () => `
<section class="${pfx}">
	<header>
		<h1>
			<img
				alt="Southeast Minnesota Capital Fund"
				class="${pfx}__mn"
				src="/assets/images/smcf-mn.svg"
				/>
		</h1>
	</header>

	<div class="${pfx}__body">
		<p class="text-h2">The <strong>Southeast Minnesota Capital Fund</strong> is a member-driven angel investment group focused on backing Minnesota entrepreneurs, and dedicated to fostering innovation and economic growth in Rochester and Greater Southeast Minnesota.</p>

		<p>
			${route(`contact`, `Get in touch`, { class: `button` })}
		</p>
	</div>
</section>
`;

export class HomeHero extends Component {
	style = style;
	template = template;
}

export default HomeHero.toFunction(HomeHero);
