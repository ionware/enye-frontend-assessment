import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonLoader() {
  return (
    <div className='mb-4'>
      <div className='flex items-center mb-4'>
        <Skeleton circle width={40} height={40} className='mr-2' />
        <Skeleton width={250} height={20} />
      </div>
      <div className='mb-3'>
        <Skeleton width='100%' height={20} className='mb-2' />
        <Skeleton width='100%' height={20} className='mb-2' />
        <Skeleton width='100%' height={20} className='mb-2' />
      </div>
      <Skeleton width={130} height={25} />
    </div>
  );
}
