import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { themeModeKeys } from '../../types';
import { useTheme } from '../../hooks';

const ThemeToggle = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <IconButton onClick={toggleMode}>{mode === themeModeKeys.dark ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
  );
};

export default ThemeToggle;
