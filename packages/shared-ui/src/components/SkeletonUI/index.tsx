import React from 'react';
import './index.scss';
import cn from 'classnames';

export interface SkeletonBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'rect' | 'circle';
  animation?: 'pulse' | 'wave' | 'false';
  width?: number | string;
  height?: number | string;
}

const SkeletonBox = ({
  className,
  variant = 'rect',
  animation = 'wave',
  width,
  height,
  children,
  ...props
}: SkeletonBoxProps) => {
  return (
    <div
      className={cn('_SKELETON_', className, variant, animation)}
      style={{
        width,
        height,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default SkeletonBox;
