import { SubmitListItemResponse } from 'modules/myPage/api/my-submit';
import Table, { Tbody, Td, Th, Thead, Tr } from 'shared-ui/src/components/Table';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';

interface MySubmitTableProps {
  mySubmits: SubmitListItemResponse[];
  totalElements: number;
  currentPage: number;
  pageSize: number;
}

const MySubmitTable = ({ mySubmits, totalElements, currentPage, pageSize }: MySubmitTableProps) => {
  const { t } = useTranslation(MyPageTranslateNamespaces);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{t('my_submit_table.number')}</Th>
          <Th>{t('my_submit_table.title')}</Th>
          <Th>{t('my_submit_table.status')}</Th>
          <Th>{t('my_submit_table.submitted_at')}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mySubmits.map(({ id, title, status, createdAt }, index) => {
          const number = totalElements - (currentPage - 1) * pageSize - index;

          return (
            <Tr key={id}>
              <Td>{number}</Td>
              <Td>{title}</Td>
              <Td>{status}</Td>
              <Td>{dayjs(createdAt).format('YYYY-MM-DD')}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default MySubmitTable;
