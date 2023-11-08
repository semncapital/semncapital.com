import { theme } from './styles/shared.ts';



export default `
* {
	${theme.reset}
}

:root {
	${theme.setCssVals()}
}
`;
