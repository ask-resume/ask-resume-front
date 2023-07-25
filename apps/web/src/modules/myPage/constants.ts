export const MyPageTranslateNamespaces = ['my-page', 'common'];

export const currentMemberKeys = {
  all: ['currentMember'],

  details: () => [...currentMemberKeys.all, 'detail'],
  detail: (props: any = {}) => [...currentMemberKeys.details(), props],
};
