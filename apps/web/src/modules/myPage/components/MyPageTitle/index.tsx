import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import { useTranslation } from 'next-i18next';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import styles from './index.module.scss';

interface MyPageTitleProps {
  titleKey: string;
  subTitleKey: string;
}

const MyPageTitle = ({ titleKey, subTitleKey }: MyPageTitleProps) => {
  const { t } = useTranslation(MyPageTranslateNamespaces);

  return (
    <div className={styles._MY_PAGE_TITLE_}>
      <Text weight="bold" variant="h1" size="xx_large">
        {t(titleKey)}
      </Text>
      <Text color={ColorMap.gray_5} variant="h2" size="xx_small">
        {t(subTitleKey)}
      </Text>
    </div>
  );
};

export default MyPageTitle;
