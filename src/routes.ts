import { resolver, routeMap } from '@robertakarobin/web/index.ts';

export const routes = routeMap({
	contact: `/#contact`,
	home: `/`,
	portfolio: `/#portfolio`,
	preferences: `/#preferences`,
});

export const resolve = resolver(routes, async path => {
	switch(path) {
		case routes.home:
		case routes.contact:
		case routes.portfolio:
		case routes.preferences:
			return (await import(`./pages/home.ts`)).default();
	}
});
