import { useState, useEffect } from 'react';

const useStorage = (key, name) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(name !== 'local' ? sessionStorage.getItem(key) : localStorage.getItem(key));
  }, []);

  return value;
};

export default useStorage;
