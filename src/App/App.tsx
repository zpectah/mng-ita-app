import AppProvider from './AppProvider';
import AppRouter from './AppRouter';
import { useAppControl } from './useAppControl';

const App = () => {
  useAppControl();

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
