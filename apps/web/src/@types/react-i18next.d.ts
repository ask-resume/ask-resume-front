import 'react-i18next';
import type * as ko from '../../public/locales/ko';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof ko.common;
      'error-page': typeof ko.errorPage;
      form: typeof ko.form;
      landing: typeof ko.landing;
      result: typeof ko.result;
    };
  }
}
