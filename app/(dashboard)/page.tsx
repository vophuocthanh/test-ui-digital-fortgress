import Heading from '@/components/common/Heading';
import Header from '@/components/header/header';
import { DataTableDemo } from '@/components/table/TableDashBoard';

const page = async () => {
  return (
    <div>
      <Header />
      <Heading className='mt-4'>Dashboard</Heading>
      <DataTableDemo></DataTableDemo>
    </div>
  );
};

export default page;
