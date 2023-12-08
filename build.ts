import { Builder } from '@robertakarobin/web/build.ts';

const builder = new Builder();

await builder.build({ serve: process.argv.includes(`--serve`) });
