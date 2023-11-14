import { css, theme } from './styles/shared.ts';

export default `
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");
@import url("/assets/css/fontawesome.min.css");

* {
	${theme.reset}
}

:root {
	${theme.setCssVals()}

	font-family: ${css.fontFamily};
	font-size: ${css.fontSize};
}

a, button {
	cursor: pointer;
}

a {
	color: ${css.colorBrand};
	text-decoration: underline;
	transition: color .2s;
}

a:hover {
	color: ${css.colorBrandHigh};
}

main {
	padding-top: ${css.navHeight};
}

.section {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 60vh;
	padding: ${css.marginPageY} ${css.marginPageX};
}
`;
