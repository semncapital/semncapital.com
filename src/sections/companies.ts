import { Component } from '@robertakarobin/util/component.ts';

import { bp, theme, vars } from '@src/theme.ts';
import { hashes, paths } from '@src/router.ts';

const company = (
	title: string,
	year: number,
	description: string,
	logo: string,
	url: string,
	isExited: boolean = false,
) => ({
	description,
	isExited,
	logo,
	title,
	url,
	year,
});

const companies = {
	abilitech: company(
		`Abilitech Medical`,
		19.10,
		`Devices for prosthetics`,
		`abilitech.png`,
		`https://abilitechmedical.com/`,
	),
	activeortho: company(
		`ActivOrtho`,
		23.00,
		`Devices for active orthopedic compression`,
		`activortho.png`,
		`https://activortho.com/`
	),
	ambient: company(
		`Ambient Clinical`,
		18.40,
		`Healthcare IT for ER and ICU`,
		`ambient.png`,
		`https://ambientclinical.com/`,
	),
	endogenex: company(
		`Endogenex`,
		18.60,
		`Devices for GI/metabolic disease`,
		`endogenex.png`,
		`https://www.endogenex.com/`,
	),
	geneticure: company(
		`Geneticure`,
		18.30,
		`Diagnostics for hypertension`,
		`geneticure.png`,
		`https://geneticure.com`
	),
	leah: company(
		`LEAH Laboratories`,
		23.10,
		`Biotech therapies for canines`,
		`leah.png`,
		`https://leahlabs.com`
	),
	marani: company(
		`Marani`,
		19.01,
		`Devices, for OB/GYN`,
		`marani.png`,
		`https://www.maranihealth.com/`
	),
	marblehead: company(
		`Marblehead`,
		18.50,
		`Devices for stroke`,
		`marblehead.png`,
		``,
		true,
	),
	melodi: company(
		`Melodi Health`,
		24.01,
		`Devices for breast reconstruction`,
		`melodi.png`,
		`https://www.melodihealth.com/`,
	),
	mnmed: company(
		`Minnesota Medical Technologies`,
		23.30,
		`Devices for fecal incontinence`,
		`mnmed.png`,
		`https://mnmedicaltechnologies.com`
	),
	nested: company(
		`Nested Knowledge`,
		22.01,
		`Healthcare IT`,
		`nested.png`,
		`https://nested-knowledge.com/`,
	),
	oculogica: company(
		`Oculogica`,
		18.10,
		`Devices/diagnostics for concussion`,
		`oculogica.png`,
		`https://www.oculogica.com/`,
	),
	omnia: company(
		`Omnia Fishing`,
		19.20,
		`Marketplace`,
		`omnia.png`,
		`https://www.omniafishing.com/`,
	),
	pear: company(
		`Pear Commerce`,
		21.01,
		`E-commerce`,
		`pear.png`,
		`https://pearcommerce.com/`,
	),
	phemonix: company(
		`Phenomix Sciences`,
		21.10,
		`Precision medicine for obesity`,
		`phenomix.png`,
		`https://www.phenomixsciences.com/`,
	),
	sonex: company(
		`Sonex Health`,
		18.01,
		`Devices for carpal tunnel`,
		`sonex.png`,
		`https://www.sonexhealth.com/`,
	),
	subiomed: company(
		`Subiomed`,
		19.30,
		`Devices for orthopedics`,
		`subiomed.png`,
		`https://www.subiomed.com/`,
	),
	vyriad: company(
		`Vyriad`,
		18.20,
		`Pharma/virotherapy for oncology`,
		`vyriad.png`,
		`https://www.vyriad.com/`
	),
	xdot: company(
		`xDot Medical`,
		23.20,
		`Devices for cardiovascular procedures`,
		`xdot.svg`,
		`https://www.xdotmedical.com`
	),
};

const companiesByOrder = Object.values(companies)
	.filter(company => !(company.isExited))
	.sort((a, b) => a.year - b.year);

const style = /*css*/`
:host {
	margin: ${vars.marginContentY} auto;

	& header {
		padding: ${vars.marginContentY} ${vars.marginContentX};
		text-align: center;
	}

	& ._grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		& > li {
			display: contents;
		}
	}

	& ._company {
		--padding: 10px;

		align-items: center;
		background-color: transparent;
		border: 0 solid #00000010;
		border-bottom-width: 1px;
		box-sizing: border-box;
		color: #000000;
		display: flex;
		flex-direction: column;
		flex-grow: 0;
		flex-shrink: 0;
		padding: var(--padding);
		position: relative;
		text-align: center;
		text-decoration: none;
		transition: background-color 0.2s, color 0.2s;

		@media ${bp.lessThan.tablet} {
			width: calc(100% / 2);
		}

		@media ${bp.moreThan.tablet} {
			width: calc(100% / 3);
		}

		&:hover {
			background-color: #ffffff;
			color: ${vars.colorBrand};
		}

		& img {
			height: 150px;
			mix-blend-mode: multiply;
			object-fit: contain;
			object-position: center;
			width: 100%;
		}

		& p {
			box-sizing: border-box;
			padding: 20px 10px;
			width: 100%;
		}
	}
}
`;

@Component.define({ style })
export class CompaniesComponent extends Component.custom(`section`) {
	static style = style;

	template = () => /*html*/`
<host id="${hashes.portfolio}">
	<header>
		<h2 class="${theme.typeClassNames.h1}">
			<a href="${paths.portfolio}">Our portfolio</a>
		</h2>
	</header>

	<ul class="_grid">
		${companiesByOrder.map(company => `
			<li>
				<a
					class="_company"
					href="${company.url}"
					rel="noopener"
					>
					<h3>
						<img
							alt="${company.title}"
							src="/assets/images/${company.logo}"
							/>
					</h3>

					<p>${company.description}</p>
				</a>
			</li>
		`).join(`\n`)}
	</ul>
</host>
`;
}
