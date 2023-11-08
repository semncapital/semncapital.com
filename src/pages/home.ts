import { Page } from '@robertakarobin/web/index.ts';

const template = () => `
<h1>Hello world</h1>
`;

export class HomePage extends Page {
	template = template;
	title = ``;
}

export default HomePage.toFunction(HomePage);
