import { Component } from '@robertakarobin/web/component.ts';

import { bp, vars } from '@src/theme.ts';
import { Link } from '@src/router.ts';

const style = `
:host {
	backdrop-filter: blur(4px);
	background-color: ${vars.colorBg};
	box-shadow: 0 0 10px #00000020;
	box-sizing: border-box;
	height: ${vars.navHeight};
	left: 0;
	padding: 0 ${vars.marginContentX};
	position: fixed;
	top: 0;
	width: 100%;
	z-index: ${vars.zNav};

	& ._logo {
		display: block;
		height: 100%;

		& img {
			height: 100%;
		}
	}

	& ._links {
		transition: right .2s;

		& a {
			align-items: center;
			display: inline-flex;
			font-weight: 700;
			height: ${vars.navHeight};
			text-transform: uppercase;
			text-decoration: none;
		}
	}

	& ._toggle {
		align-items: center;
		color: ${vars.colorBrand};
		display: inline-flex;
		height: ${vars.navHeight};
		font-size: 30px;
		justify-content: center;
		text-decoration: none;
		transition: color .2s, right .2s;
		width: ${vars.navHeight};
		z-index: ${vars.zNavToggle};

		&:hover {
			color: ${vars.colorBrandHigh};
		}
	}

	& ._toggle-closed {
		z-index: calc(${vars.zNavToggle} + 1);
	}

	@media ${bp.lessThan.tablet} {
		display: flex;
		justify-content: space-between;

		& ._links {
			background-color: #FFFFFF;
			box-shadow: 0 0 20px 0 #00000020;
			height: 100vh;
			padding-top: ${vars.navHeight};
			position: fixed;
			top: 0;
			width: ${vars.navWidth};

			& a {
				box-sizing: border-box;
				padding: 0 ${vars.marginPageX};
				justify-content: right;
				width: 100%;
			}
		}

		&:not(:focus-within) &._links {
			right: calc(0px - ${vars.navWidth});
		}

		&:focus-within &._links {
			right: 0;
		}

		& ._toggle {
			position: fixed;
			right: 0;
			top: 0;
		}

		& ._toggle-closed {
			background-color: #FFFFFF;
			right: calc(0px - ${vars.navHeight});
		}

		&:focus-within + ._toggle-closed {
			right: 0;
		}
	}

	@media ${bp.moreThan.tablet} {
		box-sizing: border-box;
		display: flex;
		height: ${vars.navHeight};
		padding: 0 ${vars.marginContentX};

		& ._links {
			--link-paddingX: calc(${vars.marginPageX} / 2);

			display: flex;
			flex-grow: 1;
			justify-content: flex-end;
			margin-left: var(--link-paddingX);

			& a {
				padding: 0 var(--link-paddingX);
			}
		}

		& ._toggle {
			display: none;
		}
	}
}
`;

const template = () => `
<nav class="nav">
	${new Link().to(`home`, `
		<img
			alt="Southeast Minnesota Capital Fund logo"
			src="/assets/images/smcf-sm.svg"
		/>
	`, { class: `_logo` })}

	<button
		aria-label="Open sidebar"
		class="_toggle"
	>☰</button>

	<ul class="_links">
		<li>${new Link().to(`preferences`, `Investment Preferences`)}</li>
		<li>${new Link().to(`portfolio`, `Portfolio`)}</li>
		<li>${new Link().to(`contact`, `Contact`)}</li>
	</ul>
</nav>

<button
	aria-label="Close sidebar"
	class="_toggle _toggle--closed"
>&times;</button>
`;

export class NavComponent extends Component {
	static style = style;

	static {
		this.init();
	}

	template = template;
}
