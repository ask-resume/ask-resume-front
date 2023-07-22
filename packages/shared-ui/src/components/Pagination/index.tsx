import React from 'react';
import cn from 'classnames';
import './index.scss';
import Button from '../Button';
import Icon from '../Icon';
import usePagination, { UsePaginationProps } from './usePagination';

export interface PaginationProps extends UsePaginationProps {
  className?: string;
  onChange?: (nextPage: number) => void;
}

const Pagination = React.memo(
  ({
    className,
    currentPage,
    totalRows,
    rowsPerPage,
    numOfPageButtons,
    onChange,
  }: PaginationProps) => {
    const { start, end, range, totalPages } = usePagination({
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
          onChange={() => onChange && onChange(Math.max(1, start - 1))}
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
          onChange={() => onChange && onChange(Math.min(totalPages, end + 1))}
        />
      </div>
    );
  },
);

export default Pagination;
