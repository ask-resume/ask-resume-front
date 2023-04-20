import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import { TFunction } from 'next-i18next';

interface TitleProps {
  t: TFunction;
}

const Title = ({ t }: TitleProps) => {
  return (
    <div className={styles._wrapper}>
      <div className={styles._title}>
        <Text variant="h1" size="xxxx_large">
          Ask
        </Text>
        <Text variant="h1" size="xxxx_large" textColor={ColorMap.blue_6}>
          Resume
        </Text>
      </div>
      <Text variant="h5" size="x_large">
        {t('sub_title')}
      </Text>
    </div>
  );
};

export default Title;
