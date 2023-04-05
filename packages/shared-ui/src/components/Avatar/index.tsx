import React from 'react';
import cn from 'classnames';
import './index.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | null;
  userId?: number;
  name?: string;
  size?:
    | /*24px*/ 'xs'
    | /*32px*/ 'sm'
    | /*40px*/ 'md'
    | /*48px*/ 'lg'
    | /*60px*/ 'xl'
    | /*150px*/ 'xxl';
  variant?: 'profile' | 'workspace';
}

const Avatar = ({
  className,
  src,
  userId,
  name,
  size = 'sm',
  variant = 'profile',
  ...props
}: AvatarProps) => {
  const avatarName = name ? name[0] : '';

  return (
    <div className={cn('_AVATAR_CONTAINER_', className, variant)} {...props}>
      <div className={cn('_AVATAR_', size)}>
        <div className="image">
          {src ? (
            <img src={src} alt={avatarName} />
          ) : (
            <div className={cn('default-image')}>{avatarName}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
