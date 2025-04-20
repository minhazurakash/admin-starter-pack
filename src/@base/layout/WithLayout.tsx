import { publicPaths } from '@lib/constant/paths';
import React from 'react';
import AppLayout from './AppLayout';

interface IProps extends React.PropsWithChildren {
  pathname: string;
}
const WithLayout: React.FC<IProps> = ({ children, pathname }) => {
  const SelectLayout = () => {
    switch (true) {
      case publicPaths.includes(pathname):
        return children;

      default:
        return <AppLayout>{children}</AppLayout>;
    }
  };

  return <>{SelectLayout()}</>;
};
export default WithLayout;
