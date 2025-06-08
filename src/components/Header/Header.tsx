import { styled, Container, Stack, Typography } from '@mui/material';
import config from '../../config';
import { MainMenu } from '../MainMenu';
import { ThemeToggle } from '../ThemeToggle';

const Wrapper = styled('header')(() => ({
  width: '100%',
  minHeight: '60px',
  backgroundColor: 'grey',
  flex: 0,
}));
const Block = styled(Stack)(() => ({
  width: 'calc(100 / 3)',
}));

const Header = () => (
  <Wrapper>
    <Container sx={{ height: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
        <Block>
          <MainMenu />
        </Block>
        <Block>
          <Typography variant="h1">{config.meta.name}</Typography>
        </Block>
        <Block>
          <ThemeToggle />
        </Block>
      </Stack>
    </Container>
  </Wrapper>
);

export default Header;
