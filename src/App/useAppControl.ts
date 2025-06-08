import { useEffect } from 'react';
import type { AppControl } from '../types';
import { useTheme } from '../hooks';

export const useAppControl = (): AppControl => {
  const { mode, init: initTheme } = useTheme();

  useEffect(() => {
    initTheme();
  }, []);

  return {
    mode
  };
};
