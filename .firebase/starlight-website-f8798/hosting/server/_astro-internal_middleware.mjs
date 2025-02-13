import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BOjfq4TN.mjs';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import './chunks/astro/server_C8gyeDor.mjs';
import 'clsx';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_BGB_KjoH.mjs';
import { u as useTranslations } from './chunks/translations_tDF1Nfqb.mjs';

const onRequest$1 = defineMiddleware((context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  return next();
});

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
