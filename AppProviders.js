import React from 'react';
import PropTypes from 'prop-types';
import { TailwindProvider } from 'tailwindcss-react-native';

const AppProviders = ({ children }) => {
  return <TailwindProvider>{children}</TailwindProvider>;
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;