import { useRouter } from 'next/router';
import Pagination from 'shared-ui/src/components/Pagination';

import { Page } from '../api/mySubmit';

interface MySubmitPaginationProps {
  pageData: Omit<Page<any>, 'lists'>;
}

const MySubmitPagination = ({ pageData }: MySubmitPaginationProps) => {
  const router = useRouter();

  const onChange = (page: number) => {
    router.push({
      query: {
        ...router.query,
        page,
      },
    });
  };

  return (
    <Pagination
      currentPage={pageData.page}
      totalRows={pageData.totalElements}
      rowsPerPage={pageData.pageSize}
      onClickPageButton={onChange}
    />
  );
};

export default MySubmitPagination;
