import { styled, Container } from '@mui/material';
import type { WithChildren } from '../../types';

const Main = styled('main')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'auto',
}));
const Content = styled('div')(() => ({
  margin: 'auto',
}));

type LayoutContentProps = WithChildren & {
  inFlex?: boolean;
};

const LayoutContent = ({ children, inFlex }: LayoutContentProps) => {
  return (
    <Main style={{ flex: inFlex ? 1 : 'auto' }}>
      <Content>
        <Container>
          {children}
        </Container>
      </Content>
    </Main>
  );
};

export default LayoutContent;
