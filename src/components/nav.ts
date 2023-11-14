import { Component } from '@robertakarobin/web/index.ts';

import { css, val } from '../styles/shared.ts';
import route from './route.ts';

const nav = `.nav`;

const style = `
${nav} {
	height: ${css.navHeight};
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: ${css.zNav};
}

${nav}__logo {
	display: block;
	height: 100%;
	padding: 0 ${css.marginPageX};

	& img {
		height: 100%;
	}
}

${nav}__links {
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

${nav}__toggle {
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

${nav}__toggle:hover {
	color: ${css.colorBrandHigh};
}

${nav}__toggle--closed {
	z-index: calc(${css.zNavToggle} + 1);
}

@media (max-width: ${val.bpLarge - 1}px) {
	${nav} {
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}

	${nav}__links {
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

	${nav}:not(:focus-within) ${nav}__links {
		right: calc(0px - ${css.navWidth});
	}

	${nav}:focus-within ${nav}__links {
		right: 0;
	}

	${nav}__toggle {
		position: fixed;
		right: 0;
		top: 0;
	}

	${nav}__toggle--closed {
		background-color: #FFFFFF;
		right: calc(0px - ${css.navHeight});
	}

	${nav}:focus-within + ${nav}__toggle--closed {
		right: 0;
	}
}

@media (min-width: ${val.bpLarge}px) {
	${nav} {
		backdrop-filter: blur(4px);
		background-color: #FFFFFFE0;
		box-shadow: 0 0 10px #00000030;
		display: flex;
		height: ${css.navHeight};
	}

	${nav}__links {
		--link-paddingX: calc(${css.marginPageX} / 2);

		display: flex;
		flex-direction: flex-end;
		flex-grow: 1;
		justify-content: flex-end;
		margin-right: var(--link-paddingX);

		& a {
			padding: 0 var(--link-paddingX);
		}
	}

	${nav}__toggle {
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
		<li>${route(`home`, `About`)}</li>
		<li>${route(`preferences`, `Investment Preferences`)}</li>
		<li>${route(`portfolio`, `Portfolio`)}</li>
		<li>${route(`contact`, `Contact`)}</li>
	</ul>
</nav>
`;

export class NavComponent extends Component {
	style = style;
	template = template;
}

export default Component.toFunction(NavComponent);
