export const currentMemberKeys = {
  all: ['currentMember'],

  details: () => [...currentMemberKeys.all, 'detail'],
  detail: () => [...currentMemberKeys.details()],
};
