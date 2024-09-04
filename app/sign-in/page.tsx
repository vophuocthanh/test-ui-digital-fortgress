'use client';
import { IconEmail, IconPassword } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password });
  };

  return (
    <div className='flex h-screen'>
      <div className='w-1/2 flex items-center justify-center bg-black p-8'>
        <form onSubmit={handleSubmit} className='space-y-6 w-full max-w-md'>
          <h2 className='text-3xl text-white font-bold'>
            Hello,{' '}
            <span className='text-transparent bg-gradient-to-r from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] bg-clip-text text-4xl font-bold'>
              Digital Fortress
            </span>
          </h2>
          <p className='text-[#6F767E] text-sm'>
            Log in to platform to start creating magic.
          </p>
          <div className='space-y-2'>
            <Input
              icon={<IconEmail />}
              type='email'
              value={username}
              placeholder='Enter your email'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='space-y-2'>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              icon={<IconPassword />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center justify-center space-x-2'>
              <Checkbox id='terms' className='w-4 h-4' />
              <Label
                htmlFor='terms'
                className='text-base font-normal text-white cursor-pointer'
              >
                Remember me
              </Label>
            </div>
            <Link
              href='/forgot-password'
              className='text-primary hover:underline'
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            type='submit'
            className='w-full bg-primary text-black hover:bg-primary hover:shadow-md'
          >
            Log in
          </Button>
          <p className='text-center text-[#6F767E] text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='/sign-up' className='text-primary hover:underline'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className='w-1/2 relative bg-gray-100'>
        <Image
          src='https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='bg-image'
          className='w-full h-full object-cover'
          width={500}
          height={500}
        />
        <div className='absolute space-y-10 bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-opacity-50 p-4'>
          <div className='flex flex-col space-y-2 text-left text-white'>
            <p className='text-3xl'>
              Digital Fortress has been a game-changer for our content creation
              process.
            </p>
            <p className='text-3xl'>
              The AI-powered tools are incredibly user-friendly and have saved
              us countless hours of work.
            </p>
          </div>
          <div className='flex flex-col space-y-2 mt-4 text-left text-white'>
            <span className='text-xl'>Lily Alisson</span>
            <span className='text-primary text-sm'>
              CMO at Digital Fortress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
