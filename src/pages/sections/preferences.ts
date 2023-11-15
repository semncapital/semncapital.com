import { Component } from '@robertakarobin/web/index.ts';

import { bp, css } from '../../styles/shared.ts';

const preference = (title: string, logo: string, description: string) => ({
	description,
	logo,
	title,
});

const preferences = {
	early: preference(
		`Seed and early stage`,
		`<span class="fa fa-solid fa-flask"></span>`,
		`We invest in seed and early stage rounds where equity capital is most scarce and opportunities for substantial gains are highest.`
	),
	entrepreneurs: preference(
		`Great entrepreneurs and founders`,
		`<span class="fa fa-solid fa-users"></span>`,
		`Above all, we back visionary founders and great teams. Strong leadership is the one common ingredient
		among our most successful portfolio companies`
	),
	innovation: preference(
		`Innovation`,
		`<span class="fa fa-solid fa-gears"></span>`,
		`We favor companies with innovative technologies and/or product ideas. We invest mostly in the med tech and life science sectors but we will consider promising opportunities in other sectors.`,
	),
	mn: preference(
		`Minnesota companies`,
		`<img src="/assets/images/smcf-mn.svg" alt="MN state" />`,
		`We favor Minnesota-based companies, but preferably ones located in Southeast Minnesota or with a nexus to Mayo Clinic.`
	),
};

const preferencesByOrder = [
	preferences.mn,
	preferences.innovation,
	preferences.early,
	preferences.entrepreneurs,
];

const pfx = `preferences`;

const style = `
.${pfx} {
	background-color: #FFFFFF;
	padding: ${css.marginContentY} ${css.marginContentX};

	& header {
		margin: ${css.marginContentY} ${css.marginContentX};
		text-align: center;
	}

	& .${pfx}__body {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	& .${pfx}__pref {
		box-sizing: border-box;
		padding: 20px;
		text-align: center;

		@media ${bp.moreThan} {
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
	}
}
`;

const template = () => `
<section class="${pfx}" id="preferences/">
	<header>
		<h2 class="text-h1">Investment Preferences</h2>
	</header>

	<ul class="${pfx}__body">
		${preferencesByOrder.map(preference => `
			<li class="${pfx}__pref">
				<h3 class="text-h2">
					${preference.logo}
					${preference.title}
				</h3>

				<p>${preference.description}</p>
			</li>
			`).join(`\n`)
		}
	</ul>
</section>
`;

export class PreferencesComponent extends Component {
	style = style;
	template = template;
}

export default PreferencesComponent.toFunction(PreferencesComponent);
