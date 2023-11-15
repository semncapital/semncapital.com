import { CssTheme } from '@robertakarobin/web/styles/lib.css.ts';

export const bps = {
	bp: 1000,
} as const;

export const constants = {
	...bps,
	colorBg: `#fffbf9`,
	colorBrand: `#3366cc`,
	colorBrandHigh: `#6699ff`,
	fontFamily: `'Open Sans', Helvetica`,
	fontSize: `16px`,
	marginContentX: `100px`,
	marginContentY: `3rem`,
	marginPageX: `20px`,
	marginPageY: `20px`,
	navHeight: `60px`,
	navWidth: `300px`,
	zNav: 100,
	zNavToggle: 110,
} as const;

export const theme = new CssTheme(constants);

export const { css, val } = theme;

export const vname = Object.keys(constants).reduce((vnames, constant) => {
	vnames[constant as keyof typeof constants] = `--${constant}`;
	return vnames;
}, {} as Record<keyof typeof constants, string>);

type BreakpointQueries = Record<`lessThan` | `moreThan`, string>;

function bpsFrom<
	Breakpoints extends Record<string, number>
>(bpSizesByName: Record<keyof Breakpoints, number>) {
	const bpNamesOrdered = Object.keys(bpSizesByName).sort((a, b) => {
		return bpSizesByName[a] - bpSizesByName[b];
	});

	const queriesByBpName = {} as Record<keyof Breakpoints, BreakpointQueries>;
	for (const bpName of bpNamesOrdered) {
		const bpSize = bpSizesByName[bpName];
		queriesByBpName[bpName as keyof Breakpoints] = {
			lessThan: `(max-width: ${bpSize}px)`,
			moreThan: `(min-width: ${bpSize + 1}px)`,
		};
	}

	return queriesByBpName;
}

export const { bp } = bpsFrom(bps);
