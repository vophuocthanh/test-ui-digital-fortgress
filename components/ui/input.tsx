import { cn } from '@/lib/utils';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className='flex items-center space-x-2 border border-primary rounded-md px-3 py-2 dark:border-slate-800 dark:bg-slate-950'>
        {icon && (
          <span className='text-slate-500 dark:text-slate-400'>{icon}</span>
        )}{' '}
        <input
          type={type}
          className={cn(
            'flex-1 bg-transparent text-sm placeholder:text-slate-500 focus-visible:outline-none dark:placeholder:text-slate-400 text-white',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
