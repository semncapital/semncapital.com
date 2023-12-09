import { Component } from '@robertakarobin/web/component.ts';

import { bp, vars } from '@src/theme.ts';
import { Link, menu } from '@src/router.ts';

const style = `
:host {
	left: 0;
	position: fixed;
	top: 0;
	z-index: ${vars.zNav};

	& ._links {
		width: 100%;

		& a {
			align-items: center;
			box-sizing: border-box;
			display: inline-flex;
			font-weight: 700;
			justify-content: center;
			padding: ${vars.marginPageX};
			text-align: center;
			text-transform: uppercase;
			text-decoration: none;
			width: 100%;
		}
	}

	& ._toggle {
		align-items: center;
		color: ${vars.colorBrand};
		display: inline-flex;
		height: ${vars.navHeight};
		font-size: 30px;
		justify-content: center;
		transition: color 0.2s;
		width: ${vars.navHeight};

		&:hover {
			color: ${vars.colorBrandHigh};
		}
	}

	@media ${bp.lessThan.tablet} {
		width: 100%;

		& ._panel {
			background-color: #ffffff;
			display: flex;
			height: ${vars.navHeight};
			position: relative;
			width: 100%;

			& ._logo {
				display: inline-flex;
				height: 100%;
				padding: 0 ${vars.marginPageX};
			}

			& ._links {
				background-color: #ffffff;
				box-shadow: 0 0 10px #00000060;
				left: 0;
				padding-top: ${vars.navHeight};
				position: absolute;
				transition: bottom 0.2s;
				width: 100%;
				z-index: -1;
			}

			&:focus-within {
				& ._links {
					bottom: calc(0px - (var(--menu-size) * ${vars.navHeight}));
				}

				& + ._toggle-closed {
					visibility: visible;
				}
			}

			&:not(:focus-within) {
				& ._links {
					bottom: 0;
				}

				& + ._toggle-closed {
					visibility: hidden;
				}
			}
		}

		& ._toggle {
			position: absolute;
			right: 0;
			text-decoration: none;
			top: 0;
			z-index: ${vars.zNavToggle};
		}

		& + main {
			padding-top: ${vars.navHeight};
		}
	}

	@media ${bp.moreThan.tablet} {
		& ._panel {
			align-items: center;
			background-color: #ffffff;
			box-shadow: 0 0 10px #00000020;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			height: 100vh;
			position: relative;
			justify-content: center;
			transition: left 0.2s;
			z-index: calc(${vars.zNavToggle} + 1);

			& ._logo {
				display: block;
				padding-bottom: 20px;

				& img {
					display: block;
					margin: 0 auto;
					width: calc(100% - (2 * ${vars.marginPageX}));
				}
			}
		}

		& + main {
			padding-left: ${vars.navWidth};
		}

		& ._toggle {
			display: none;
		}
	}
}
`;

const template = () => `
<nav style="--menu-size: ${menu.length}">
	<div class="_panel">
		${new Link().to(`home`, `
			<img
				alt="Southeast Minnesota Capital Fund logo"
				src="/assets/images/smcf-sm.svg"
			/>
		`, { class: `_logo` })}

		<button
			aria-label="Open sidebar"
			class="_toggle"
			tabindex="0"
			type="button"
		>☰</button>

		<ul class="_links">
			${menu.map(([routeName, label]) => `
				<li>${new Link().to(routeName, label)}</li>
			`).join(``)}
		</ul>
	</div>

	<button
		aria-label="Close sidebar"
		class="_toggle _toggle-closed"
		type="button"
	>☰</button>
</nav>
`;

export class NavComponent extends Component {
	static style = style;

	static {
		this.init();
	}

	template = template;
}
