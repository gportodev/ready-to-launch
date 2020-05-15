import React from 'react';
import {StatusBar} from 'react-native';

import Src from './src/index';

const prsvg = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#400080" />
      <Src />
    </>
  );
};

export default prsvg;
