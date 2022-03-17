import React from 'react';
import { CardSC } from './styles';
import { Props } from './types';

const CardTitle = ({ children }: Props) => {
  return (
    <CardSC>{children}</CardSC>    
  );
};

export default CardTitle;
