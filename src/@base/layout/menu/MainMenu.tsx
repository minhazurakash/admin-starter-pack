import { Paths } from '@lib/constant/paths';
import { $$ } from '@lib/utils/functions';
import { getRbacMenuItems } from '@modules/auth/lib/utils';
import { Menu } from 'antd';
import Link from 'next/link';
import React from 'react';
import { TbUserCog } from 'react-icons/tb';

interface IProps {
  openedMenuKeys: string[];
  onOpenChange: (openKeys: string[]) => void;
  defaultSelectedKeys: string[];
}

const MainMenu: React.FC<IProps> = ({ openedMenuKeys, onOpenChange, defaultSelectedKeys }) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      openKeys={openedMenuKeys}
      onOpenChange={onOpenChange}
      items={getRbacMenuItems([
        {
          key: Paths.root,
          label: <Link href={$$.appendPagination(Paths.root)}>Dashboard</Link>,
          icon: <TbUserCog size={16} />,
          // allowedAccess: ['internal-user:read', 'internal-user:delete', 'internal-user:write'],
        },
      ])}
    />
  );
};

export default MainMenu;
