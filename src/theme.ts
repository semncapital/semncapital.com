import { CssTheme } from '@robertakarobin/util/theme.ts';

export const breakpoints = {
	tablet: 1100,
} as const;

export const constants = {
	...breakpoints,
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

export const typefaces = {
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
};

export const theme = new CssTheme({
	bps: breakpoints,
	types: typefaces,
	val: constants,
});

export const { bp, reset, types, val, vars, vname } = theme;
