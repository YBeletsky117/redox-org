import React, { FC } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { Fallback } from './Fallback';

export const CatchError: FC = ({ children }) => (
  <ErrorBoundary FallbackComponent={Fallback}>
    {children}
  </ErrorBoundary>
);