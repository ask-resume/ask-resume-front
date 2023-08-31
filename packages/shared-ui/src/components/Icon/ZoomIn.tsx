import { ColorMap } from '../../config/colorMap';
import './index.scss';
import cn from 'classnames';

export interface LogOutProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  rotate?: number;
}

export const ZoomIn = ({ color = ColorMap.gray_8, className, size = 24, rotate }: LogOutProps) => {
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
          d="M15.5 14L20.5 19L19 20.5L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14H15.5ZM9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14ZM12 10H10V12H9V10H7V9H9V7H10V9H12V10Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
