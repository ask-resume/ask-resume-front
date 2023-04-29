import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';

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
      <div className={styles.confirm_content}>
        <UserInfoConfirmation userInfo={userInfo} />

        <div style={{ width: '100%', backgroundColor: 'black' }}></div>

        <div>
          <Text>
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
            안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕
          </Text>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
        }}
      >
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
  const notSelected = 'not selected';
  const { t } = useTranslation(TranslateNamespaces);

  return (
    <div>
      <div>
        <Text>{t('label.job')}</Text>
        <Text>
          {userInfo.selectedJob && isObjectOption(userInfo.selectedJob)
            ? userInfo.selectedJob.name
            : notSelected}
        </Text>
      </div>

      <div>
        <Text>{t('label.nation')}</Text>
        <Text>
          {userInfo.selectedLanguage && isObjectOption(userInfo.selectedLanguage)
            ? userInfo.selectedLanguage.name
            : notSelected}
        </Text>
      </div>

      <div>
        <Text>{t('label.difficulty')}</Text>
        <Text>
          {userInfo.selectedDifficulty && isObjectOption(userInfo.selectedDifficulty)
            ? userInfo.selectedDifficulty.name
            : notSelected}
        </Text>
      </div>

      <div>
        <Text>{t('label.years-of-experience')}</Text>
        <Text>{userInfo.selectedYearsOfCareer}</Text>
      </div>
    </div>
  );
};
