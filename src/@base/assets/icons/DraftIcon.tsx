import { cn } from '@lib/utils/cn';
import React from 'react';

interface IProps {
  className?: string;
  color?: string;
}
const DraftIcon: React.FC<IProps> = ({ className, color = '#000' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g id="react-icons/md/MdDrafts">
        <path
          id="Vector"
          d="M21.99 8C21.99 7.28 21.62 6.65 21.05 6.3L12 1L2.95 6.3C2.38 6.65 2 7.28 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18L21.99 8ZM12 13L3.74 7.84L12 3L20.26 7.84L12 13Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default DraftIcon;
