import { App } from '@robertakarobin/web/index.ts';

export const app = new App(
	{
		contact: `/#contact`,
		home: `/`,
		portfolio: `/#portfolio`,
		preferences: `/#preferences`,
	},

	async() => {
		return (await import(`./pages/home.ts`)).default();
	}
);
