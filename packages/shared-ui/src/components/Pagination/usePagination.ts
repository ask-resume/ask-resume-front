export interface UsePaginationProps {
  currentPage?: number;
  totalRows?: number;
  rowsPerPage?: number;
  numOfPageButtons?: number;
}

const usePagination = (props: UsePaginationProps = {}) => {
  const { currentPage = 1, totalRows = 0, rowsPerPage = 1, numOfPageButtons = 5 } = props;

  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const start = Math.max(1, Math.ceil(currentPage - numOfPageButtons / 2));
  const end = Math.min(totalPages, start + numOfPageButtons - 1);

  const getPageRange = (start: number, end: number) => {
    const length = end - start + 1;
    const range = Array.from({ length }, (_, i) => start + i);

    return Array.from({ length }, (_, i) => start + i);
  };

  const range = getPageRange(start, end);

  return {
    start,
    end,
    range,
    totalPages,
    isFirst: true,
    isLast: false,
  };
};

export default usePagination;
