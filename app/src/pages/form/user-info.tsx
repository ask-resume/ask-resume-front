import Head from 'next/head';
import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import Link from 'next/link';

export default function UserInfo({ data }) {
  console.log(data);
  return (
    <main>
      <Text>user info page</Text>
      <Link href="/form/user-resume">Go to user resume page</Link>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://3.38.55.104:8080/api/v1/jobs?locale=ko');
  const { data } = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60, // 60초마다 데이터 갱신
  };
}
