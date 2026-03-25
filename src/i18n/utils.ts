import { defaultLang, ui, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const pathname = url.pathname.slice(base.length) || '/';
	const [, lang] = pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: UiKey): string {
		return (ui[lang][key] ?? ui[defaultLang][key]) as string;
	};
}

export function getAlternateLangUrl(url: URL): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const withoutBase = url.pathname.slice(base.length) || '/';
	if (withoutBase.startsWith('/es')) {
		return `${base}${withoutBase.replace(/^\/es/, '') || '/'}`;
	}
	return `${base}/es${withoutBase === '/' ? '' : withoutBase}`;
}
