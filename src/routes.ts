import { resolver, routeMap } from '@robertakarobin/web/index.ts';

import homePage from './pages/home.ts';

export const routes = routeMap({
	about: `/about.html`,
	contact: `/#contact`,
	home: `/`,
	portfolio: `/#portfolio`,
	preferences: `/#preferences`,
});

export const resolve = resolver(routes, path => {
	switch(path) {
		case routes.home:
			return homePage();
	}
});
