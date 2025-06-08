import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
