import { useCurrentMember } from 'modules/myPage/api/currentMember';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Avatar from 'shared-ui/src/components/Avatar';
import Button from 'shared-ui/src/components/Button';

const UserMenu = ({ loginLabel }: { loginLabel: string }) => {
  const { data: currentMember } = useCurrentMember();

  return currentMember ? (
    <Avatar src={currentMember.profile} name={currentMember.username} />
  ) : (
    <Link href="/login">
      <Button buttonColor="blue">{loginLabel}</Button>
    </Link>
  );
};

export default UserMenu;
