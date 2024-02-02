import { Resolver, Router } from '@robertakarobin/util/router.ts';

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

export const { hashes, paths } = router;

export const resolver = new Resolver(router, async() => {
	return new (await import(`./pages/home.ts`)).HomePage({
		title: `SEMN Capital Fund`,
	});
});

export const menu: Array<[keyof typeof router.paths, string]> = [
	[`portfolio`, `Portfolio`],
	[`preferences`, `Investment Preferences`],
	[`about`, `About`],
	[`contact`, `Contact`],
];
