import { CssTheme } from '@robertakarobin/web/styles/lib.css.ts';

export const constants = {} as const;

export const theme = new CssTheme(constants);

export const { css, val } = theme;
