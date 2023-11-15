import { CssTheme } from '@robertakarobin/web/styles/lib.css.ts';

export const bps = {
	bp: 1100,
} as const;

export const constants = {
	...bps,
	colorBg: `#f9f7ff`,
	colorBrand: `#3366cc`,
	colorBrandHigh: `#6699ff`,
	colorBrandLow: `#142952`,
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

export const fonts = fontsFrom({
	h1: `
		font-size: 3rem;
		font-weight: 100;
		line-height: 1.5em;
	`,

	h2: `
		font-size: 2rem;
		font-weight: 100;
		line-height: 1.5em;
	`,

	h3: `
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.5em;
	`,
});

function fontsFrom<
	Fonts extends Record<string, string>
>(fontsByName: Fonts) {
	const out = {} as Record<string, string>;
	for (const fontName in fontsByName) {
		out[fontName] = `
			${fontsByName[fontName]}
			--fontFace: '${fontName}';
		`;
	}
	return out as Fonts;
}

export const fontClasses = Object.keys(fonts).map(fontName => `
.text-${fontName} {
	${fonts[fontName as keyof typeof fonts]}
}
`).join(`\n`);

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
