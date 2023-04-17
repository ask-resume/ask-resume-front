import { Html, Head, Main, NextScript } from 'next/document';
import { useTranslation } from 'next-i18next';
import i18nextConfig from '../../next-i18next.config';

const MyDocument = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
