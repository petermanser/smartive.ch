import React, { FC } from 'react';
import { Copy } from '../elements/copy';

type Props = {
  awardTags: string[];
  vertical?: boolean;
  className?: string;
};

const TagColors = ['bg-apricot-500', 'bg-mint-500', 'bg-cornflower-500'] as const;

export const AwardTags: FC<Props> = ({ awardTags, vertical = false, className = '' }) => (
  <div className={`grid grid-flow-col gap-6 justify-start ${className}`}>
    {awardTags.map((tag, index) => (
      <Copy
        key={tag}
        className={`${TagColors[index % 3]} text-white-100 py-3 px-4 ${
          vertical ? 'rounded-t-sm transform origin-center rotate-180 writing-vertical' : 'rounded-sm'
        }`}
      >
        {tag}
      </Copy>
    ))}
  </div>
);