import { Component } from '@robertakarobin/web/component.ts';

import { hashes, paths } from '@src/router.ts';
import { theme, vars } from '@src/theme.ts';

const person = (name: string, title: string, description: string) => ({
	description,
	name,
	title,
});

const leadership = {
	david: person(
		`David Herbert`,
		`Fund Manager`,
		`retired Mayo Clinic business professional whose career included leadership roles in MC Ventures, MC Labs, and MC Global Business Services`,
	),
	harry: person(
		`Harry Hoffman`,
		`Fund Manager`,
		`recently retired Chief Investment Officer and Treasurer at Mayo Clinic`,
	),
	janey: person(
		`Janey Russel`,
		``,
		`recently retired information technology leader at Mayo Clinic`,
	),
	john: person(
		`John Wade`,
		``,
		`RAEDI President and a recognized local business and civic leader`,
	),
	leigh: person(
		`Leigh Johnson`,
		`Chair`,
		`longtime Rochester business owner and founder and chair of Custom Alarm, Inc.`,
	),
	rick: person(
		`Rick Haeflinger`,
		`Secretary/Treasurer`,
		`recently retired Senior Investment Officer at Mayo Clinic`,
	),
};

const leadershipByOrder = [ // eslint-disable-line
	leadership.leigh,
	leadership.rick,
	leadership.david,
	leadership.harry,
	leadership.janey,
	leadership.john,
];

const sections: Array<[string, keyof typeof paths, string]> = [
	[
		`Who we are`,
		`who`,
		`
<markdown>
David Herbert and Harry Hoffman co-manage SMCF and provide investment and administrative management services to Funds I and II. Both are experienced business leaders and investment professionals who had long careers at Mayo Clinic. Together, in 2012, they formed Mayo Clinic's venture co-investment program which today has assets under management of well over $100 million and many successful exits. David and Harry are both personal investors in SMCF Funds I and II.

David Herbert retired from Mayo Clinic in 2015 after a 21-year career as a business professional during which he held leadership positions in Mayo Clinic Ventures, Mayo Clinic Laboratories and Mayo Clinic Global Business Solutions. At MCV, David oversaw Mayo's commercial partnership with Exact Labs which led to the development of Cologuard, Exact's highly successful non-invasive diagnostic test for colon cancer. David holds a BA degree from Stanford University and an MBA from the University of St. Thomas.

Harry Hoffman retired from Mayo Clinic in 2021 after a 30-year career, including 25 years as Chief Investment Officer and Treasurer. Beginning in the late 1990s, Harry led Mayo Clinic's first investments in alternative assets, including venture capital. Over the course of his tenure as CIO, Mayo built relationships with ~30 of the top VC firms globally, invested in over 200 funds, and built venture capital into the top performing asset class in its $20(+) billion Long Term Fund. Harry holds a BA degree from the University of Minnesota and an MBA from the Yale School of Management.
</markdown>
	`,
	],

	[
		`How we operate`,
		`info`,
		`
<markdown>
SMCF members include many current or former physicians, scientists and business leaders from Mayo Clinic as well as local and national small business owners and investment professionals. Unlike most other venture capital funds, SMCF seeks to actively engage with its members and tap their collective knowledge and expertise in evaluating investment opportunities. While David and Harry manage the investment process and screen all potential portfolio companies, they invite all Fund members to hear presentations by and ask questions of the CEOs of all companies being considered for the portfolio. David and Harry conduct final due diligence only on those companies endorsed by the membership. They frequently call on members with specific expertise to provide assistance on the Funds' med tech and life science areas. SMCF's Board of Managers formally approves all investments that David and Harry ultimately recommend. SMCF also offers its members offers to make personal "side investments" in their favorite portfolio companies on the same terms as the Fund.
</markdown>
	`,
	],

	[
		`Our story`,
		`story`,
		`
<markdown>
SMCF traces its origins to a 2014 regional economic development plan sponsored by Rochester Area Economic Development Inc, (RAEDI) called "Journey to Growth" that recognized the need to create a local source of equity capital to support innovative businesses forming in Southeast Minnesota.

In 2017, RAEDI executives Gary Smith and Xavier Frigola formed SMCF and helped raise its initial $2 million fund (Fund I). Between 2018 and 2021, SMCF invested Fund I in 14 Minnesota start-ups, ten of which are either located in SE MN or linked to technologies developed at Mayo Clinic.

In 2021, the SMCF board appointed David Herbert and Harry Hoffman as co-managers of SMCF Fund I and endorsed their plan to raise a second fund. David and Harry raised $7 million for Fund II in early 2022. They anticipate investing most of Fund II between 2022 and 2024.

Harry and David invest SMCF capital with the objective of earning members a 2.5X return on their committed capital over an 8 - 10 year expected fund life. While SMCF hopes that its investments ultimately help foster economic development in southeastern Minnesota and transform Rochester into a bio-business hub, economic development considerations like jobs created are not considered by SMCF in any investment decisions.
</markdown>
	`,
	],
];

const style = `
:host {
	padding: ${vars.marginContentY} ${vars.marginContentX};

	& header {
		text-align: center;
	}

	& ._section {
		margin: 2em auto;
	}

	& h3 {
		margin: 1em auto;
		text-align: center;

		& a {
			color: ${vars.colorBrand};
		}
	}
}
`;

export class AboutComponent extends Component {
	static style = style;

	static {
		this.init();
	}

	template = () => `
<section id="${hashes.about}">
	<header>
		<h2 class="${theme.typeClassNames.h1}">
			<a href="#${paths.about}">About us</a>
		</h2>
	</header>

	${sections.map(([title, routeName, body]) => `
		<div class="_section" id="${hashes[routeName]}">
			<h3 class="${theme.typeClassNames.h2}">
				<a href="${paths[routeName]}">${title}</a>
			</h3>

			${body}
		</div>
	`).join(``)}
</section>
	`;
}
