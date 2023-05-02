import React, { lazy, Suspense } from 'react';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { useTranslation } from 'next-i18next';
import { getI18nProps } from 'modules/i18n/lib/getStatic';
import { useRouter } from 'next/router';
import { useGenerateResume } from 'modules/result/api/result';

import Spinner from 'shared-ui/src/components/Spinner';
import styles from '../../page.module.scss';

const Result = ({ resumeData }) => {
  return <div>{JSON.stringify(resumeData)}</div>;
};

export default Result;
