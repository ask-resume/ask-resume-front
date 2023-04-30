import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Text, { TextWeight } from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';
import { FontSize } from 'shared-ui/src/config/size';

import { formatYearsOfCareer } from '../lib';
import styles from './index.module.scss';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { UserInfoState } from './UserInfo';
import { TranslateNamespaces } from 'modules/form/constants';

interface ConfirmationProps {
  isMobile: boolean;
  userInfo: UserInfoState;
}

const Confirmation = ({ isMobile, userInfo }: ConfirmationProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

  const pathname = `/${locale}/form`;
  const { changeQueryParams } = useQueryParams();

  return (
    <div className={styles._CONTAINER_}>
      <div className={styles._CONFIRM_CONTENT_}>
        <UserInfoConfirmation userInfo={userInfo} />

        <div>
          <Text>
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
          </Text>
          <Text>
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
          </Text>
        </div>
      </div>

      <div className={styles._button_wrapper}>
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          label={{
            labelText: t('button.prev-page') ?? '',
            labelLeadingIcon: <Icon.Arrow />,
          }}
          onClick={() => {
            const query = { type: 'resume' };
            changeQueryParams(pathname, query);
          }}
        />
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          label={{
            labelText: t('button.next-page') ?? '',
            labelTailingIcon: <Icon.Arrow flip />,
          }}
          // TODO: Resume page로 이동하는 기능 구현
          // onClick={() => {
          // }}
        />
      </div>
    </div>
  );
};

export default Confirmation;

interface UserInfoConfirmationProps {
  userInfo: UserInfoState;
}

const UserInfoConfirmation = ({ userInfo }: UserInfoConfirmationProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

  const Option = ({ title, value }: { title: string; value: string }) => (
    <div className={styles.item_container}>
      <div className={styles.item_content}>
        <Text
          className={styles.item_title}
          variant="inline"
          size="medium"
          textColor={ColorMap.gray_5}
        >
          {title}
        </Text>
        <Text variant="inline" textColor={ColorMap.gray_7} size="medium" weight="bold">
          {value ? value : t('user_info.not_selected')}
        </Text>
      </div>
    </div>
  );

  return (
    <div className={styles._user_info_container}>
      <Option
        title={t('user_info.label.job')}
        value={
          userInfo.selectedJob && isObjectOption(userInfo.selectedJob)
            ? userInfo.selectedJob.name
            : ''
        }
      />
      <Option
        title={t('user_info.label.nation')}
        value={
          userInfo.selectedLanguage && isObjectOption(userInfo.selectedLanguage)
            ? userInfo.selectedLanguage.name
            : ''
        }
      />
      <Option
        title={t('user_info.label.difficulty')}
        value={
          userInfo.selectedDifficulty && isObjectOption(userInfo.selectedDifficulty)
            ? userInfo.selectedDifficulty.name
            : ''
        }
      />
      <Option
        title={t('user_info.label.years-of-experience')}
        value={formatYearsOfCareer({
          t,
          locale,
          selectedYearsOfCareer: userInfo.selectedYearsOfCareer,
        })}
      />
    </div>
  );
};
