import React from 'react';
import cn from 'classnames';
import './index.scss';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number;
}

const Badge = ({ className, number, ...props }: BadgeProps) => {
  return (
    <div className={cn('_BADGE_', className)} {...props}>
      {number}
    </div>
  );
};

export default Badge;
