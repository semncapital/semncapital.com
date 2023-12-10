import { Resolver, Router } from '@robertakarobin/web/router.ts';
import { LinkComponent } from '@robertakarobin/web/link.ts';

export const router = new Router({
	about: `/#about`,
	contact: `/#contact`,
	home: `/`,
	info: `/#info`,
	portfolio: `/#portfolio`,
	preferences: `/#preferences`,
	story: `/#story`,
	who: `/#who`,
});

export const { routes } = router;

export const resolver = new Resolver(router, async() => {
	return new (await import(`./pages/home.ts`)).HomePage().set({
		title: `SEMN Capital Fund`,
	});
});

export class Link extends LinkComponent {
	static {
		this.init();
	}

	router = router;
}

export const menu: Array<[keyof typeof routes, string]> = [
	[`portfolio`, `Portfolio`],
	[`preferences`, `Investment Preferences`],
	[`about`, `About`],
	[`contact`, `Contact`],
];
