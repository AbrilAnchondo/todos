import { useState } from 'react';
// custom hook for Form
export default function useInputState (initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const reset = () => {
    setValue('');
  }

  return [value, handleChange, reset];
}