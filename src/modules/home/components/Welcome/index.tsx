import React from 'react';
import { ContentSC, CardSC } from './styles';
import { Props } from './types';

const Welcome = ({ children }: Props) => {
  return (
    <CardSC>
      <ContentSC>{children}</ContentSC>    
    </CardSC>
  );
};

export default Welcome;
