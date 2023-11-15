import { Component } from '@robertakarobin/web/index.ts';

import { bp, css } from '../../styles/shared.ts';

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
	dyamx: company(
		`DyaMX`,
		18.60,
		`Devices for GI/metabolic disease`,
		`dyamx.png`,
		``,
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
		`Diagnostics`,
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

const pfx = `companies`;

const style = `
.${pfx} {
	margin: ${css.marginContentY} auto;

	& header {
		padding: ${css.marginContentY} ${css.marginContentX};
		text-align: center;
	}

	& .${pfx}__grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		& > li {
			display: contents;
		}
	}

	& .${pfx}__company {
		--padding: 10px;

		align-items: center;
		background-color: transparent;
		box-sizing: border-box;
		color: #00000070;
		display: flex;
		flex-direction: column;
		flex-grow: 0;
		flex-shrink: 0;
		mix-blend-mode: multply;
		padding: var(--padding);
		position: relative;
		text-align: center;
		text-decoration: none;
		transition: background-color .2s, color .2s;

		@media ${bp.lessThan} {
			width: calc(100% / 2);
		}

		@media ${bp.moreThan} {
			width: calc(100% / 6);
		}

		&:hover {
			background-color: #FFFFFF;
			color: ${css.colorBrand};
		}

		& img {
			height: 100px;
			margin-top: 10px;
			mix-blend-mode: multiply;
			object-fit: contain;
			object-position: center;
			width: 100%;
		}

		& p {
			box-sizing: border-box;
			padding: 20px 10px 50px 10px;
			width: 100%;
		}
	}
}
`;

const template = () => `
<section class="${pfx}">
	<header>
		<h2 class="text-h1">Our portfolio</h2>
	</header>

	<ul class="${pfx}__grid">
		${companiesByOrder.map(company => `
			<li>
				<a
					class="${pfx}__company"
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
</section>
`;

export class CompaniesComponent extends Component {
	style = style;
	template = template;
}

export default CompaniesComponent.toFunction(CompaniesComponent);
