import React from 'react';
import Title from '../Title';
import {ButtonSC} from './styles';
import {Props} from './types';

const Button = ({children, onPress}: Props) => {
  return (
    <ButtonSC onPress={onPress}>
      <Title>{children}</Title>
    </ButtonSC>
  );
};

export default Button;
