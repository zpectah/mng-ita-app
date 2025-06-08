import { create } from 'zustand';
import { type ThemeMode, themeModeKeys } from '../types';
import { APP_THEME_MODE } from '../constants';

interface ThemeStore {
  mode: ThemeMode;
  setMode: (locale: ThemeMode) => void;
}

const useThemeStore = create<ThemeStore>((set) => {
  const current = window.localStorage.getItem(APP_THEME_MODE) ?? themeModeKeys.light;

  const setModeHandler = (mode: ThemeMode) => {
    set({ mode });
    window.localStorage.setItem(APP_THEME_MODE, mode as string);
  };

  return {
    mode: current as ThemeMode,
    setMode: setModeHandler,
  };
});

export default useThemeStore;
