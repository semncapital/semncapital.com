import {
	bp,
	css,
	fontClasses,
	theme,
	vname,
} from './styles/shared.ts';

export default `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
@import url("/assets/css/fontawesome.min.css");

* {
	${theme.reset}
}

:root {
	${theme.setCssVals()}

	font-family: ${css.fontFamily};
	font-size: ${css.fontSize};

	@media ${bp.lessThan} {
		${vname.marginContentX}: ${css.marginPageX};
	}
}

${fontClasses}

body {
	background-color: ${css.colorBg};
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

p + p {
	margin-top: 1em;
}

strong {
	font-weight: bold;
}

.button {
	align-items: center;
	background-color: ${css.colorBrand};
	border-radius: 4px;
	color: #FFFFFF;
	display: inline-flex;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.2rem;
	padding: .66em 2em;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	transition: background-color .2s;

	&:hover {
		background-color: ${css.colorBrandHigh};
		color: #FFFFFF;
	}
}
`;
