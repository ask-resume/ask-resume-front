import React from 'react';
import Pagination from 'shared-ui/src/components/Pagination';
import 'shared-ui/src/reset.scss';

export default {
  title: 'Component/Pagination',
  component: Pagination,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Pagination currentPage={1} totalRows={102} />
    </div>
  );
};
