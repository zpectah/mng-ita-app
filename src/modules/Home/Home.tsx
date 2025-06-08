import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { mainMenuItems } from '../../components';

const Home = () => {
  return (
    <>
      <Stack direction="row" gap={1.5}>
        {mainMenuItems.map(({ name, label, path }) => {
          if (name === 'home') return;

          return (
            <Button key={name} component={Link} to={path} color="secondary" variant="outlined">
              {label}
            </Button>
          );
        })}
      </Stack>
    </>
  );
};

export default Home;
