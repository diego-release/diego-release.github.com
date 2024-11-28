import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ScreensApp } from './Screens/App';

import './scss/index.scss';
import './scss/_styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScreensApp />
  </StrictMode>,
)
