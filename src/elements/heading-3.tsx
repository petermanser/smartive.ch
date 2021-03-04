import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Heading3: FC<Props> = ({ children, as: Tag = 'h3', className = '' }) => (
  <Tag className={`font-sans font-bold text-lg mb-8 ${className}`}>{children}</Tag>
);