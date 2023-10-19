'use client';

import { experimental_useOptimistic as useOptimistic } from 'react'

export const Counter = () => {

  const [optimisticValue, setOptimisticValue] = useOptimistic(0);

  return (
    <form className="flex items-center gap-5 m-5">
      <button formAction={async () => {
          setOptimisticValue(optimisticValue + 1);
        }}
        className="px-4 py-2 bg-black text-white"
      > 
        increment
      </button>
      <p>{optimisticValue}</p>
    </form>
  );
}