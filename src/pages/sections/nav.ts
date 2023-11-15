import { Component } from '@robertakarobin/web/index.ts';

import { bp, css } from '../../styles/shared.ts';
import route from '../../components/route.ts';

const root = `.nav`;

const style = `
${root} {
	backdrop-filter: blur(4px);
	background-color: ${css.colorBg};
	box-shadow: 0 0 10px #00000020;
	box-sizing: border-box;
	height: ${css.navHeight};
	left: 0;
	padding: 0 ${css.marginContentX};
	position: fixed;
	top: 0;
	width: 100%;
	z-index: ${css.zNav};
}

${root}__logo {
	display: block;
	height: 100%;

	& img {
		height: 100%;
	}
}

${root}__links {
	transition: right .2s;

	& a {
		align-items: center;
		display: inline-flex;
		font-weight: 700;
		height: ${css.navHeight};
		text-transform: uppercase;
		text-decoration: none;
	}
}

${root}__toggle {
	align-items: center;
	color: ${css.colorBrand};
	display: inline-flex;
	height: ${css.navHeight};
	font-size: 30px;
	justify-content: center;
	text-decoration: none;
	transition: color .2s, right .2s;
	width: ${css.navHeight};
	z-index: ${css.zNavToggle};
}

${root}__toggle:hover {
	color: ${css.colorBrandHigh};
}

${root}__toggle--closed {
	z-index: calc(${css.zNavToggle} + 1);
}

@media ${bp.lessThan} {
	${root} {
		display: flex;
		justify-content: space-between;
	}

	${root}__links {
		background-color: #FFFFFF;
		box-shadow: 0 0 20px 0 #00000020;
		height: 100vh;
		padding-top: ${css.navHeight};
		position: fixed;
		top: 0;
		width: ${css.navWidth};

		& a {
			box-sizing: border-box;
			padding: 0 ${css.marginPageX};
			justify-content: right;
			width: 100%;
		}
	}

	${root}:not(:focus-within) ${root}__links {
		right: calc(0px - ${css.navWidth});
	}

	${root}:focus-within ${root}__links {
		right: 0;
	}

	${root}__toggle {
		position: fixed;
		right: 0;
		top: 0;
	}

	${root}__toggle--closed {
		background-color: #FFFFFF;
		right: calc(0px - ${css.navHeight});
	}

	${root}:focus-within + ${root}__toggle--closed {
		right: 0;
	}
}

@media ${bp.moreThan} {
	${root} {
		box-sizing: border-box;
		display: flex;
		height: ${css.navHeight};
		padding: 0 ${css.marginContentX};
	}

	${root}__links {
		--link-paddingX: calc(${css.marginPageX} / 2);

		display: flex;
		flex-grow: 1;
		justify-content: flex-end;
		margin-left: var(--link-paddingX);

		& a {
			padding: 0 var(--link-paddingX);
		}
	}

	${root}__toggle {
		display: none;
	}
}
`;

const template = () => `
<nav class="nav">
	${route(`home`, `
		<img
			alt="Southeast Minnesota Capital Fund logo"
			src="/assets/images/smcf-sm.svg"
		/>
	`, { class: `nav__logo` })}

	<button
		aria-label="Open sidebar"
		class="nav__toggle"
	>☰</button>

	<ul class="nav__links">
		<li>${route(`preferences`, `Investment Preferences`)}</li>
		<li>${route(`portfolio`, `Portfolio`)}</li>
		<li>${route(`contact`, `Contact`)}</li>
	</ul>
</nav>

<button
	aria-label="Close sidebar"
	class="nav__toggle nav__toggle--closed"
>&times;</button>
`;

export class NavComponent extends Component {
	style = style;
	template = template;
}

export default Component.toFunction(NavComponent);
