import { useTranslation } from 'next-i18next';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import styles from './index.module.scss';
import Select, { ObjectOption } from 'shared-ui/src/components/Select';
import { useRouter } from 'next/router';
import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';

const MySubmitTableHeader = () => {
  const { t } = useTranslation(MyPageTranslateNamespaces);

  const router = useRouter();

  const PAGE_SIZE_OPTION: ObjectOption[] = [
    { name: t('my_submit_table.header.pageSize.10'), value: '10' },
    { name: t('my_submit_table.header.pageSize.20'), value: '20' },
    { name: t('my_submit_table.header.pageSize.30'), value: '30' },
    { name: t('my_submit_table.header.pageSize.50'), value: '50' },
  ];

  const selectedPageSize =
    PAGE_SIZE_OPTION.find(option => option.value == router.query['pageSize']) ??
    PAGE_SIZE_OPTION[0];

  const onClickReload = () => {
    router.reload();
  };

  return (
    <div className={styles._MY_SUBMIT_TABLE_HEADER_}>
      <Button
        variant="ghost"
        buttonColor="gray"
        size="sm"
        label={{
          labelLeadingIcon: <Icon.Refresh />,
          labelText: t('my_submit_table.footer.refresh_button'),
        }}
        onClick={onClickReload}
      />

      <Select
        selectedOption={selectedPageSize}
        options={PAGE_SIZE_OPTION}
        onChangeSelectedOption={(changed: ObjectOption) =>
          router.push({
            query: {
              ...router.query,
              pageSize: changed.value.toString(),
            },
          })
        }
        style={{ width: '120px' }}
      />
    </div>
  );
};

export default MySubmitTableHeader;
