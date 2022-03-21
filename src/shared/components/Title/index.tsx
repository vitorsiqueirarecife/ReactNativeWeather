import React from 'react';
import { TitleSC } from './styles';
import { Props } from './types';

const Title = ({ children }: Props) => {
  return (
    <TitleSC>{children}</TitleSC>    
  );
};

export default Title;
