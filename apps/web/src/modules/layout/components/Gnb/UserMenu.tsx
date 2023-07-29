import React from 'react';
import { useCurrentMember } from 'modules/myPage/api/currentMember';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Avatar from 'shared-ui/src/components/Avatar';
import Button from 'shared-ui/src/components/Button';
import Dropdown from 'shared-ui/src/components/Dropdown';
import Icon from 'shared-ui/src/components/Icon';
import SkeletonUI from 'shared-ui/src/components/SkeletonUI';
import { useRouter } from 'next/router';
import { logout } from 'modules/login/api/logout';

const UserMenu = React.memo(() => {
  const { t } = useTranslation(['common']);

  const router = useRouter();
  const { data: currentMember, isLoading, isFetching } = useCurrentMember();

  if (isLoading || isFetching) return <SkeletonUI variant="circle" />;

  return currentMember ? (
    <Dropdown
      button={<Avatar src={currentMember.profile} name={currentMember.username} />}
      menu={[
        {
          icon: <Icon.User />,
          label: t('user_menu.my_page'),
          onClick: () => router.push('/my-page'),
        },
        {
          icon: <Icon.LogOut />,
          label: t('user_menu.logout'),
          onClick: async () => {
            await logout();
            router.push('/');
          },
        },
      ]}
    />
  ) : (
    <Link href="/login">
      <Button buttonColor="blue">{t('user_menu.login')}</Button>
    </Link>
  );
});

UserMenu.displayName = 'UserMenu';

export default UserMenu;
