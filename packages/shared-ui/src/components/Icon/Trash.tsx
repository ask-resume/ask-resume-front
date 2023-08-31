import { ColorMap } from '../../config/colorMap';
import './index.scss';
import cn from 'classnames';

export interface LogOutProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  rotate?: number;
}

export const Trash = ({ color = ColorMap.gray_8, className, size = 16, rotate }: LogOutProps) => {
  return (
    <i
      className={cn('dds-icon', className)}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path
          id="icon__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
