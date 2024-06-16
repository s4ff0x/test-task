import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App.tsx';
import { store } from '@/app/providers/redux/store.ts';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '@/features/error-boundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
