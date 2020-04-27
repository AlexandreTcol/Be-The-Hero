import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <>
       <StatusBar backgroundColor='transparent' translucent barStyle='dark-content'/>
      <Routes />
    </>
  );
}

