export const MyPageTranslateNamespaces = ['my-submit', 'common'];

export const mySubmitKeys = {
  all: ['mySubmit'],

  details: () => [...mySubmitKeys.all, 'detail'],
  detail: (submitId: number) => [...mySubmitKeys.details(), submitId],
};
