import { SubmitListItemResponse } from 'modules/myPage/api/mySubmit';
import Table, { Tbody, Td, Th, Thead, Tr } from 'shared-ui/src/components/Table';
import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import { useRouter } from 'next/router';

interface MySubmitTableProps {
  mySubmits: SubmitListItemResponse[];
  totalElements: number;
  currentPage: number;
  pageSize: number;
}

const MySubmitTable = ({ mySubmits, totalElements, currentPage, pageSize }: MySubmitTableProps) => {
  const { t } = useTranslation(MyPageTranslateNamespaces);

  const router = useRouter();

  return (
    <Table>
      <Thead align="center">
        <Tr>
          <Th>{t('my_submit_table.number')}</Th>
          <Th>{t('my_submit_table.title')}</Th>
          <Th>{t('my_submit_table.status')}</Th>
          <Th>{t('my_submit_table.submitted_at')}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mySubmits.length > 0 &&
          mySubmits.map(({ submitId, title, submitStatus, createdAt }, index) => {
            const number = totalElements - (currentPage - 1) * pageSize - index;

            let status = submitStatus.replaceAll('_', '');
            status = status[0]?.toUpperCase() + status.substring(1).toLowerCase();

            return (
              <Tr
                key={submitId}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push(`/my-submit/${submitId}`)}
              >
                <Td>{number}</Td>
                <Td>{title}</Td>
                <Td align="center">{status}</Td>
                <Td align="center">{dayjs(createdAt).format('YYYY-MM-DD')}</Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default MySubmitTable;
