import { useState, useEffect } from 'react';
export default function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    } catch (err) {
      val = defaultValue;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key,state])
  return [state, setState]
}