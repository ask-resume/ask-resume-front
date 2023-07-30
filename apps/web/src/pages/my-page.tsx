import { useRedirect } from 'modules/i18n/lib/redirect';

export default function MyPage() {
  useRedirect('/my-submit');
  return <></>;
}
