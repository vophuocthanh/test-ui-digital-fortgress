import {
  IconDashboard,
  IconProject,
  IconSchedule,
  IconTask,
} from '@/components/icons';
import { TMenuItem } from '@/types';

export const menuItems: TMenuItem[] = [
  {
    url: '/',
    title: 'Dashboard',
    icon: <IconDashboard className='size-5' />,
  },
  {
    url: '/task',
    title: 'Task',
    icon: <IconTask className='size-5' />,
  },
  {
    url: '/projects',
    title: 'Projects',
    icon: <IconProject className='size-5' />,
  },
  {
    url: '/schedule',
    title: 'Schedule',
    icon: <IconSchedule className='size-5' />,
  },
];
