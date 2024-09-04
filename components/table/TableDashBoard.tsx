'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Edit, Trash } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

const data: Project[] = [
  {
    id: '1',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '22 Jan 2022',
    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
  {
    id: '2',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '20 Jan 2022',
    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
  {
    id: '3',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '24 Jan 2022',

    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
  {
    id: '4',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '26 Jan 2022',

    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
  {
    id: '5',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '18 Jan 2022',

    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
  {
    id: '6',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '28 Jan 2022',

    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
  {
    id: '7',
    projectName: 'Sisyphus',
    avatar:
      'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    domain: 'sisyphus.com',
    lastAssessed: '16 Jan 2022',

    licenseUse: ['Active', 'Customer data', 'Admin'],
  },
];

export type Project = {
  id: string;
  avatar: string;
  projectName: string;
  domain: string;
  lastAssessed: string;
  licenseUse: string[];
};

export const columns: ColumnDef<Project>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'projectName',
    header: 'Project',
    cell: ({ row }) => (
      <div className='flex items-center'>
        <div className='mr-2'>
          <Image
            width={100}
            height={100}
            src={row.original.avatar}
            alt='Avatar'
            className='size-4 rounded-full'
          />
        </div>
        <div>
          <div className='text-white'>{row.getValue('projectName')}</div>
          <div className='text-gray-400 text-sm'>{row.original.domain}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'lastAssessed',
    header: 'Last assessed',
    cell: ({ row }) => <div className=''>{row.getValue('lastAssessed')}</div>,
  },
  {
    accessorKey: 'licenseUse',
    header: 'License use',
    cell: ({ row }) => (
      <div className='flex gap-2'>
        {row.original.licenseUse.map((tag) => {
          let colorClass = 'text-white';

          switch (tag) {
            case 'Active':
              colorClass = 'bg-green-500 text-white';
              break;
            case 'Customer data':
              colorClass = 'bg-yellow-500 text-black';
              break;
            default:
              colorClass = 'bg-red-500 text-white';
              break;
          }

          return (
            <div
              key={tag}
              className={`text-xs px-2 py-1 rounded-full ${colorClass}`}
            >
              {tag}
            </div>
          );
        })}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <div className='flex gap-2'>
        <Trash className='mr-2 h-4 w-4 cursor-pointer' />
        <Edit className='mr-2 h-4 w-4 cursor-pointer' />
      </div>
    ),
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const { getHeaderGroups, getRowModel, getState, setState } = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      pagination,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className='w-full bg-black p-2 rounded mt-4 text-white'>
      <Table>
        <TableHeader>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-between mt-4'>
        <Button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.max(0, prev.pageIndex - 1),
            }))
          }
          disabled={pagination.pageIndex === 0}
        >
          Previous
        </Button>
        <span>
          Page {pagination.pageIndex + 1} of{' '}
          {Math.ceil(data.length / pagination.pageSize)}
        </span>
        <Button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: Math.min(
                Math.ceil(data.length / pagination.pageSize) - 1,
                prev.pageIndex + 1
              ),
            }))
          }
          disabled={
            pagination.pageIndex >=
            Math.ceil(data.length / pagination.pageSize) - 1
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
