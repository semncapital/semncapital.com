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

export default () => `
<markdown>
###	Our Story

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</markdown>
`;
