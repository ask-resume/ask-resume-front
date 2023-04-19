import languageDetector from '../lib/languageDetector';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitchLink = ({ locale, href }) => {
  const router = useRouter();

  const replaceQueryParams = (path, query) => {
    return Object.keys(query).reduce((p, c) => {
      if (c === 'locale') {
        return p.replace(`[${c}]`, locale);
      }
      return p.replace(`[${c}]`, query[c]);
    }, path);
  };

  let newHref = href || router.asPath;
  const newPathname = replaceQueryParams(router.pathname, router.query);

  if (locale) {
    newHref = href ? `/${locale}${href}` : newPathname;
  }

  if (!newHref.includes(`/${locale}`)) {
    newHref = `/${locale}${newHref}`;
  }

  return (
    <>
      <Link href={newHref}>
        <button style={{ fontSize: 'small' }} onClick={() => languageDetector.cache(locale)}>
          {locale}
        </button>
      </Link>
    </>
  );
};

export default LanguageSwitchLink;
