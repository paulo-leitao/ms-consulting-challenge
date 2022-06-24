import React from 'react'
import App from "./App";
import ApiProvider from './providers/api-provider';

const Providers = () => {
  return (
    <ApiProvider>
      <App />
    </ApiProvider>
  );
};

export default Providers