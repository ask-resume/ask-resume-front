import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

type Valiant = 'single' | 'double' | 'circle' | 'alt' | 'circle-ghost';

interface CheckIconProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  rotate?: number;
  flip?: boolean;
  variant?: Valiant;
}

export const CheckIcon = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'single',
}: CheckIconProps) => {
  const CheckIcon = getCheckIcon(variant, color);
  return (
    <i
      className={cn('dds-icon', className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {CheckIcon}
    </i>
  );
};

const getCheckIcon = (valiant?: Valiant, color?: ColorMap) => {
  switch (valiant) {
    case 'single':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4797 6.23894C18.0439 6.64461 18.1686 7.42565 17.7583 7.98344L11.5513 16.4214C11.0377 17.1196 10.0146 17.1989 9.39718 16.5885L6.36997 13.5956C5.87668 13.1079 5.87668 12.3172 6.36997 11.8295C6.86326 11.3418 7.66304 11.3418 8.15633 11.8295L10.2689 13.9181L15.7152 6.51439C16.1255 5.9566 16.9155 5.83328 17.4797 6.23894Z"
          />
        </svg>
      );
    case 'single':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.414 9L9.707 12.293L18 4L19.414 5.414L9.707 15.121L5 10.414L6.414 9ZM6.414 14L9.707 17.293L18 9L19.414 10.414L9.707 20.121L5 15.414L6.414 14Z"
          />
        </svg>
      );
    case 'circle':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7986 9.15286C17.1405 8.68804 17.0366 8.03717 16.5664 7.69912C16.0963 7.36106 15.4379 7.46383 15.096 7.92866L10.5574 14.0984L8.79694 12.3579C8.38587 11.9515 7.71938 11.9515 7.30831 12.3579C6.89723 12.7643 6.89723 13.4232 7.30831 13.8296L9.83098 16.3237C10.3455 16.8324 11.1981 16.7663 11.626 16.1845L16.7986 9.15286Z"
            fill={color || ColorMap.green}
          />
        </svg>
      );
    case 'alt':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9998 22C17.4184 22 21.3747 18.3454 21.9024 13.9713L21.9998 13.5V13.25L21.8358 12.583C21.2974 8.84917 18.0839 6 14.2498 6C10.9828 6 8.25047 8.51808 7.65645 11.7062L7.5732 12L6.91892 12.0546C6.78391 12.0669 6.65389 12.0981 6.53145 12.1477C6.20978 12.2947 6.03189 12.6716 6.17891 12.9933L6.22591 13.0878L7.35625 15.8597C7.69196 16.5032 8.35801 16.7983 8.97788 16.5814C9.58259 16.3677 9.93356 15.7181 9.78751 15.0859L9.74221 14.9916L8.35466 12.3767L10.1252 11.3741L10.0309 11.329C10.0217 11.3237 10.0119 11.3188 10.0015 11.3143C9.45421 11.0948 9.17703 10.4569 9.39654 9.90954L9.46447 9.78546L12.9998 4L13.1819 4.24261C13.7052 4.80961 13.7013 5.67795 13.1719 6.24811L13.1027 6.32657L12.9998 6.5L12.8969 6.32657L12.8277 6.24811C12.2983 5.67795 12.2944 4.80961 12.8178 4.24261L12.9998 4Z"
          />
        </svg>
      );
    case 'circle-ghost':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill={color || ColorMap.green}
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5664 7.6955C17.0366 8.02741 17.1405 8.66644 16.7986 9.12281L11.626 16.0266C11.1981 16.5978 10.3455 16.6627 9.83098 16.1633L7.30831 13.7146C6.89723 13.3155 6.89723 12.6686 7.30831 12.2696C7.71938 11.8705 8.38587 11.8705 8.79694 12.2696L10.5574 13.9785L15.096 7.92086C15.4379 7.46449 16.0963 7.36359 16.5664 7.6955Z"
            fill={color || ColorMap.green}
          />
        </svg>
      );
  }
};
