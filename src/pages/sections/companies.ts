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
};

const companiesByOrder = Object.values(companies)
	.filter(company => !(company.isExited))
	.sort((a, b) => a.year - b.year);

export default () => companiesByOrder.map(company => `
<li class="portfolioItem">
	<a href="${company.url}">
		<h3>
			<img
				alt="${company.title}"
				src="/images/${company.logo}"
				/>

			${company.title} ('${Math.round(company.year)})
		</h3>

		<p>${company.description}</p>
	</a>
</li>
`).join(`\n`);
