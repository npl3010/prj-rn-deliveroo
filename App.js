import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppProviders from './AppProviders';
import AppContainer from './modules/components/AppContainer';

export default function App() {
  return (
    <AppProviders>
      <AppContainer />
      <StatusBar style="auto" />
    </AppProviders>
  );
}
