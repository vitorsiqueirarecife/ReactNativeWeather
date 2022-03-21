import React from 'react';
import { SafeAreaSC } from './styles';
import { Props } from './types';

const SafeArea = ({ children }: Props) => {
  return (
    <SafeAreaSC>{children}</SafeAreaSC>    
  );
};

export default SafeArea;
