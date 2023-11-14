import { setupForBrowser } from '@robertakarobin/web/index.ts';

import { app } from './app.ts';

setupForBrowser(app, document.querySelector(`main`)!);
