import { useState, useEffect } from 'react';

// FUNCTION: hook to access local/sessionStorage, cause re-rendering page might interrupt reading from storage in default JS way
const useStorage = (key, name) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(name !== 'local' ? sessionStorage.getItem(key) : localStorage.getItem(key));
  }, []);

  return value;
};

export default useStorage;
