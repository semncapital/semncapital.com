const preference = (title: string, logo: string, description: string) => ({
	description,
	logo,
	title,
});

const preferences = {
	early: preference(
		`Seed and early stage`,
		`fa-flask`,
		`We invest in seed and early stage rounds where equity capital is most scarce and opportunities for substantial gains are highest.`
	),
	entrepreneurs: preference(
		`Great entrepreneurs and founders`,
		`fa-users`,
		`Above all, we back visionary founders and great teams. Strong leadership is the one common ingredient
		among our most successful portfolio companies`
	),
	innovation: preference(
		`Innovation`,
		`fa-gears`,
		`We favor companies with innovative technologies and/or product ideas. We invest mostly in the med tech and life science sectors but we will consider promising opportunities in other sectors.`,
	),
	mn: preference(
		`Minnesota companies`,
		`fa-map`,
		`We favor Minnesota-based companies, but preferably ones located in Southeast Minnesota or with a nexus to Mayo Clinic.`
	),
};

const preferencesByOrder = [
	preferences.mn,
	preferences.innovation,
	preferences.early,
	preferences.entrepreneurs,
];

export default () => `
<ul>
	${preferencesByOrder.map(preference => `
		<li class="investPref">
			<h3>
				<span class="fa fa-solid ${preference.logo}"></span>
				${preference.title}
			</h3>

			<p>${preference.description}</p>
		</li>
		`).join(`\n`)
	}
</ul>`;
