import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Copy: FC<Props> = ({ children, as: Tag = 'p', className = '' }) => (
  <Tag className={`font-sans font-normal text-sm ${className}`}>{children}</Tag>
);