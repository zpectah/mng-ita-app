import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import { Header } from '../Header';
import LayoutContent from './LayoutContent';

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AppLayout = () => {
  return (
    <Wrapper>
      <Header />
      <LayoutContent inFlex>
        <Outlet />
      </LayoutContent>
    </Wrapper>
  );
};

export default AppLayout;
