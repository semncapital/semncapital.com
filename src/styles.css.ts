import { bp, css, theme, vname } from './styles/shared.ts';
import section from './styles/section.ts';

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

	@media ${bp.lessThan} {
		${vname.marginContentX}: ${css.marginPageX};
	}
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

.company {
	& img {
		width: 100px;
	}
}

${section}
`;
