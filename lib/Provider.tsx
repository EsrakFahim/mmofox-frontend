'use client';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
      return <ReduxProvider store={ store }> { children } </ReduxProvider>;
}
