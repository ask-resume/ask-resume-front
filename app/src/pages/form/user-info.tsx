import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import { getJobs } from '@/api/form';

interface UserInfoProps<T> {
  jobs: T[];
}

export default function UserInfo<T>({ jobs }: UserInfoProps<T>) {
  return (
    <main>
      <Text>user info page</Text>
      <div>{JSON.stringify(jobs)}</div>
      <Link href="/form/user-resume">Go to user resume page</Link>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const jobs = await getJobs(locale!);
  return {
    props: {
      jobs,
    },
    revalidate: 3600,
  };
}
