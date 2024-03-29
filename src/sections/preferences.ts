import { Component } from '@robertakarobin/util/component.ts';

import { bp, theme, vars } from '@src/theme.ts';
import { hashes, paths } from '@src/router.ts';

const preference = (
	title: string,
	logo: string,
	description: string,
) => ({
	description,
	logo,
	title,
});

const preferences = {
	early: preference(
		`Seed and early stage`,
		`<span class="fa fa-solid fa-flask"></span>`,
		`We invest in seed and early stage rounds where equity capital is most scarce and opportunities for substantial gains are highest.`,
	),
	entrepreneurs: preference(
		`Great entrepreneurs and founders`,
		`<span class="fa fa-solid fa-users"></span>`,
		`Above all, we back visionary founders and great teams. Strong leadership is the one common ingredient
		among our most successful portfolio companies`,
	),
	innovation: preference(
		`Innovation`,
		`<span class="fa fa-solid fa-gears"></span>`,
		`We favor companies with innovative technologies and/or product ideas. We invest mostly in the med tech and life science sectors but we will consider promising opportunities in other sectors.`,
	),
	mn: preference(
		`Minnesota companies`,
		`<img src="/assets/images/smcf-mn.svg" alt="MN state" />`,
		`We favor Minnesota-based companies, but preferably ones located in Southeast Minnesota or with a nexus to Mayo Clinic.`,
	),
};

const preferencesByOrder = [
	preferences.mn,
	preferences.innovation,
	preferences.early,
	preferences.entrepreneurs,
];

const style = /*css*/`
:host {
	background-color: #ffffff;
	padding: ${vars.marginContentY} ${vars.marginContentX};

	& header {
		margin: ${vars.marginContentY} ${vars.marginContentX};
		text-align: center;
	}

	& ._body {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	& ._pref {
		box-sizing: border-box;
		padding: 20px;
		text-align: center;

		@media ${bp.moreThan.tablet} {
			width: 50%;
		}

		& .fa,
		& img {
			display: block;
			font-size: 100px;
			height: 150px;
			line-height: 150px;
			margin: 20px auto;
			vertical-align: middle;
		}

		& p {
			margin-top: 20px;
		}

		&:nth-child(3n + 1) {
			color: #000044;
		}
		&:nth-child(3n + 2) {
			color: #004400;
		}
		&:nth-child(3n + 3) {
			color: #440000;
		}

	}
}
`;

@Component.define({ style })
export class PreferencesComponent extends Component.custom(`section`) {
	static style = style;
	template = () => /*html*/`
<host id="${hashes.preferences}">
	<header>
		<h2 class="${theme.typeClassNames.h1}">
			<a href="${paths.preferences}">Investment preferences</a>
		</h2>
	</header>

	<ul class="_body">
		${preferencesByOrder.map(preference => `
			<li class="_pref">
				<h3 class="${theme.typeClassNames.h2}">
					${preference.logo}
					${preference.title}
				</h3>

				<p>${preference.description}</p>
			</li>
			`).join(`\n`)
		}
	</ul>
</host>
	`;
}
