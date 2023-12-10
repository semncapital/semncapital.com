import {
	bp,
	reset,
	theme,
	val,
	vars,
	vname,
} from './theme.ts';

export default `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
@import url('/assets/css/fontawesome.min.css');

:root {
	${theme.varsDeclarations}

	font-family: ${vars.fontFamily};
	font-size: ${vars.fontSize};
	line-height: 1.5em;

	@media ${bp.lessThan.tablet} {
		${vname.marginContentX}: ${val.marginPageX};
	}
}

* {
	${reset}
}

${theme.typeClasses}

body {
	background-color: ${vars.colorBg};
}

a, button {
	cursor: pointer;
}

a {
	color: ${vars.colorBrand};
	text-decoration: underline;
	transition: color 0.2s;
}

a:hover {
	color: ${vars.colorBrandHigh};
}

p + p {
	margin-top: 1em;
}

h1,
h2,
h3 {
	& a[href^='/#'] {
		color: inherit;
		text-decoration: none;
	}
}

em {
	font-style: italic;
}

strong {
	font-weight: bold;
}

.button {
	align-items: center;
	background-color: ${vars.colorBrand};
	border-radius: 4px;
	color: #ffffff;
	display: inline-flex;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.2rem;
	padding: 0.66em 2em;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${vars.colorBrandHigh};
		color: #ffffff;
	}
}
`;
