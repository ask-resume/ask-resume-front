import Head from 'next/head';
import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UserResume() {
  const router = useRouter();
  const handleGoToResult = () => {
    router.replace('/result', undefined, { shallow: true });
  };

  return (
    <main>
      <Text>user resume page</Text>
      <Link href="/form/user-info">Go to user info page</Link>
      <button onClick={handleGoToResult}>Go to user result page</button>
    </main>
  );
}
