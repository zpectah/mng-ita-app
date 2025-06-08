import { useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { mainMenuItems } from './constants';

const MainMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();

  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        id="mainmenu-button"
        aria-controls={open ? 'mainmenu-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AppsIcon />
      </IconButton>
      <Menu
        id="mainmenu-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'mainmenu-button',
          },
        }}
      >
        {mainMenuItems.map(({ name, label, path }) => (
          <MenuItem key={name} component={Link} to={path} onClick={handleClose} selected={pathname.includes(path)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MainMenu;
