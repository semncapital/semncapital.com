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

const leadershipByOrder = [
	leadership.leigh,
	leadership.rick,
	leadership.david,
	leadership.harry,
	leadership.janey,
	leadership.john,
];

export default () => `
<h3>Our Story</h3>

<p>SMCF traces its origins to a 2014 regional economic development plan sponsored by Rochester Area Economic Development Inc, (RAEDI) called "Journey to Growth" that recognized the need to create a local source of equity capital to support innovative businesses forming in Southeast Minnesota.</p>

<p>In 2017, RAEDI executives Gary Smith and Xavier Frigola formed SMCF and helped raise its initial $2 million fund (Fund I). Between 2018 and 2021, SMCF invested Fund I in 14 Minnesota start-ups, ten of which are either located in SE MN or linked to technologies developed at Mayo Clinic.</p>

<p>In 2022, SMCF launched fundraising for its second fund (Fund II) with a target size of $3-5 million. RAEDI will act as Fund II's primary sponsor and lead investor.</p>

<p>Southeast Minnesota Capital Partners LLC (SMCP), a newly formed management company as described below, will provide fund management and administration services to both Fund I and Fund II beginning in January 2022.</p>

<h3>How We Operate</h3>

<p>SMCF is a member-driven organization that pools its capital and invests together. It holds periodic investment meetings, mostly in the early evening via Zoom, at which members hear presentations by the CEOs of companies under consideration for investment and then participate in group discussion. SMCP, which manages the investment activities of the Fund, screens all potential companies before they are invited to pitch to SMCF members and then conducts follow up due diligence on those companies endorsed for possible investment. SMCF's Executive Committee oversees Fund operations, sets the agendas for member meetings and coordinates votes by the SMCF Board of Managers. which must formally approve all investments.</p>

<h3>Our Leadership</h3>

<p>SMCF is led by its Executive Committee, all of whom are SMCF member/investors. Current members are listed below:</p>

<ul>
	${leadershipByOrder.map(person => `
		<li>${person.name}${person.title ? `, ${person.title}` : ``} &mdash; ${person.description}</li>
	`).join(`\n`)}
</ul>

<h3>Southeast Minnesota Capital Partners LLC</h3>

<p>SMCP provides fund and administrative management services to SMCF. It was formed in late 2021 by David Herbert and Harry Hoffman, who formerly served as chair and vice chair of SMCF Fund I.</p>

<p>David and Harry are both experienced investors and worked together in the formation and operation of Mayo Clinic's venture co-investment program.</p>

<p>David retired from Mayo Clinic in 2015 after a 21 year career as a business professional during which he held leadership positions in Mayo Clinic Ventures, Mayo Clinic Labs and Mayo Clinic Global Business Solutions. He holds a BA degree from Stanford University and an MBA from the University of St. Thomas.</p>

<p>Harry retired from Mayo Clinic in 2021 after a 30 year career, including 25 years as Chief Investment Officer and Treasurer. He holds a BA degree from the University of Minnesota and an MBA from the Yale School of Management.</p>
`;
