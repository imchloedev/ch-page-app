import React, { useCallback, useState } from 'react';

type ReturnType<T> = [
  value: T,
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput = <T>(initialData: T): ReturnType<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  }, []);
  return [value, handler];
};

export default useInput;
