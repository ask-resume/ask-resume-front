import React from 'react';
import cn from 'classnames';
import './index.scss';
import Button from '../Button';
import Icon from '../Icon';
import usePagination, { UsePaginationProps } from './usePagination';

export interface PaginationProps extends UsePaginationProps {
  className?: string;
  onClickPageButton?: (nextPage: number) => void;
}

const Pagination = React.memo(
  ({
    className,
    currentPage,
    totalRows,
    rowsPerPage,
    numOfPageButtons,
    onClickPageButton,
  }: PaginationProps) => {
    const { start, end, range, totalPages, isFirst, isLast } = usePagination({
      currentPage,
      totalRows,
      rowsPerPage,
      numOfPageButtons,
    });

    return (
      <div className={cn('_Pagination_', className)}>
        <Button
          variant="ghost"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Arrow />,
          }}
          disabled={isFirst}
          onClick={() => onClickPageButton && onClickPageButton(Math.max(1, start - 1))}
        />
        <ul>
          {range.map(page => {
            const active = page === currentPage;

            return (
              <li key={page}>
                <Button
                  variant={active ? 'solid' : 'ghost'}
                  buttonColor={active ? 'blue' : 'gray'}
                  label={{
                    labelText: page,
                  }}
                  onClick={() => onClickPageButton && onClickPageButton(page)}
                />
              </li>
            );
          })}
        </ul>
        <Button
          variant="ghost"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Arrow rotate={180} />,
          }}
          disabled={isLast}
          onClick={() => onClickPageButton && onClickPageButton(Math.min(totalPages, end + 1))}
        />
      </div>
    );
  },
);

export default Pagination;
