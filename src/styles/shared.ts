import { CssTheme } from '@robertakarobin/web/styles/lib.css.ts';

export const constants = {
	bpLarge: 800,
	colorBrand: `#3366cc`,
	colorBrandHigh: `#6699ff`,
	fontFamily: `'Open Sans', Helvetica`,
	fontSize: `16px`,
	marginPageX: `20px`,
	marginPageY: `20px`,
	navHeight: `60px`,
	navWidth: `300px`,
	zNav: 100,
	zNavToggle: 110,
} as const;

export const theme = new CssTheme(constants);

export const { css, val } = theme;
