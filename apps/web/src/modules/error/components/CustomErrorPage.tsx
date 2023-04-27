import Link from 'next/link';
import { TFunction } from 'next-i18next';

import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import { ColorMap } from 'shared-ui/src/config/colorMap';

interface ErrorPageProps {
  t: TFunction;
  errorCode: string;
}

const CustomErrorPage = ({ t, errorCode }: ErrorPageProps) => {
  return (
    <div className={styles._ERROR_PAGE_}>
      <div className={styles._wrapper}>
        <div className={styles.title}>
          <Text variant="h1" size="xxxx_large" weight="bold">
            {errorCode}
          </Text>
          <Text variant="h1" size="x_large" weight="bold">
            {t(`${errorCode}.description`)}
          </Text>
        </div>

        <Divider />

        <div className={styles.explain}>
          <Text align="center" textColor={ColorMap.gray_6} size="small" lineHeight="wide">
            {t(`${errorCode}.content`)}
          </Text>
        </div>
      </div>

      <div>
        <Link href="/">
          <Button
            label={{
              labelText: t(`${errorCode}.home-router`) ?? '',
            }}
            rounded
            variant="ghost"
            buttonColor="blue"
          />
        </Link>
      </div>
    </div>
  );
};

export default CustomErrorPage;
