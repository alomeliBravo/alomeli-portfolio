import { defaultLang, ui, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: UiKey): string {
		return (ui[lang][key] ?? ui[defaultLang][key]) as string;
	};
}

export function getAlternateLangUrl(url: URL): string {
	const pathname = url.pathname;
	if (pathname.startsWith('/es')) {
		const stripped = pathname.replace(/^\/es/, '');
		return stripped || '/';
	}
	return `/es${pathname === '/' ? '' : pathname}`;
}
