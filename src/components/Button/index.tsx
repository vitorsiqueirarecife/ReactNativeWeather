import React from 'react';
import Title from '../Title';
import { ButtonSC } from './styles';
import { Props } from './types';

const Button = ({ children }: Props) => {
  return (
    <ButtonSC><Title>{children}</Title></ButtonSC>    
  );
};

export default Button;
