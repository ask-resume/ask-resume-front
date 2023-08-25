import { useTranslation } from 'next-i18next';

import Text, { TextWeight } from 'shared-ui/src/components/Text';
import { FontSize } from 'shared-ui/src/config/size';
import Divider from 'shared-ui/src/components/Divider';
import { FormTranslateNamespaces } from '../constants';
import Icon from 'shared-ui/src/components/Icon';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import { FormRouterType } from '../types';
import styles from './index.module.scss';

interface RouterProps {
  type: FormRouterType;
  userInfoChecked: boolean;
  resumeInfoChecked: boolean;
}

const Router = ({ type, userInfoChecked, resumeInfoChecked }: RouterProps) => {
  const { t } = useTranslation(FormTranslateNamespaces);

  const getTextProps = (routeType: FormRouterType | FormRouterType[]) => {
    const isActive = type === routeType || routeType?.includes(type);

    return {
      textColor: isActive ? ColorMap.gray_7 : ColorMap.gray_4,
      weight: isActive ? ('bold' as TextWeight) : ('medium' as TextWeight),
      size: 'medium' as FontSize,
    };
  };

  return (
    <section className={styles._ROUTER_}>
      <div className={styles._router_item}>
        <RouterIcon order={1} checked={userInfoChecked} />
        <Text {...getTextProps('user-info')}>{t('user_info.router.user-info')}</Text>
      </div>

      <Divider variant="vertical" width={20} height={2} />

      <div className={styles._router_item}>
        <RouterIcon order={2} checked={resumeInfoChecked} />
        <Text {...getTextProps(['resume', 'pdf'])}>{t('user_info.router.resume')}</Text>
      </div>

      <Divider variant="vertical" width={20} height={2} />

      <div className={styles._router_item}>
        <RouterIcon order={3} checked={userInfoChecked && resumeInfoChecked} />
        <Text {...getTextProps('confirmation')}>{t('user_info.router.input-confirmation')}</Text>
      </div>
    </section>
  );
};

export default Router;

interface RouterIconProps {
  order: number;
  checked: boolean;
}

const RouterIcon = ({ order, checked }: RouterIconProps) => {
  return (
    <>
      {checked && <Icon.Check variant="circle" color={ColorMap.blue_5} size={20} />}
      {!checked && (
        <button type="button" className={styles.router_icon}>
          {order}
        </button>
      )}
    </>
  );
};
