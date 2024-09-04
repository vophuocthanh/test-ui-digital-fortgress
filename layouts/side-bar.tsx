'use client';

import { ActiveLink } from '@/components/common';
import { menuItems } from '@/constants';
import logo from '@/public/bg.png';
import logo_2 from '@/public/logo-2.png';
import { TMenuItem } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`p-5 border-r border-r-gray-200 bg-black dark:border-opacity-10 dark:bg-grayDarker lg:flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      style={{ width: isCollapsed ? '5rem' : '16rem', padding: '1rem' }}
    >
      <div
        className={`flex ${
          isCollapsed ? 'flex-col items-center' : 'items-center justify-between'
        }  py-4`}
      >
        <Image
          src={isCollapsed ? logo_2 : logo}
          width={isCollapsed ? 50 : 100}
          height={isCollapsed ? 50 : 100}
          alt='logo'
          className='mb-2'
        />
        <div
          className='p-2 bg-white h-8 w-8 rounded-full items-center flex justify-center cursor-pointer mt-2'
          onClick={handleToggle}
        >
          {isCollapsed ? (
            <ChevronRight className='text-black' />
          ) : (
            <ChevronLeft className='text-black' />
          )}
        </div>
      </div>

      <div className='w-full h-1 border-t  border-gray-300 my-10'></div>
      <ul className='flex flex-col gap-2 mt-4'>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
            isCollapsed={isCollapsed}
          />
        ))}
      </ul>
    </div>
  );
};

function MenuItem({
  url = '/',
  title = '',
  icon,
  isCollapsed,
}: TMenuItem & { isCollapsed: boolean }) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {!isCollapsed && <span className='ml-2'>{title}</span>}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
