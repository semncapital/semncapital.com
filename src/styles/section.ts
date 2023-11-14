import { css } from '../styles/shared.ts';

const root = `.section`;

export default `
${root} {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 60vh;
	padding: ${css.marginContentY} ${css.marginContentX};
}

${root}--hero {
	background-position: center;
	background-size: cover;
	height: calc(100vh - ${css.navHeight});
}
`;
