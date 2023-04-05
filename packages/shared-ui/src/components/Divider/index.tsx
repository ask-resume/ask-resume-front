import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

export interface DividerProps {
  className?: string;
  variant?: 'default' | 'vertical';
  color?: ColorMap;
  size?: number;
  width?: number;
  height?: number;
}

const Divider = ({
  className,
  variant = 'default',
  color,
  size = 8,
  width,
  height,
}: DividerProps) => {
  return (
    <hr
      className={cn('_DIVIDER_', className, variant)}
      style={{
        backgroundColor: `${color || ColorMap.gray_2}`,
        margin: `${variant === 'default' ? `${size}px` : 0} ${
          variant === 'vertical' ? `${size}px` : 0
        }`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default Divider;
