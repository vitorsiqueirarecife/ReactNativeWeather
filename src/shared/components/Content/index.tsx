import React from 'react';
import { ContentSC } from './styles';
import { Props } from './types';

const Content = ({ children }: Props) => {
  return (
    <ContentSC>{children}</ContentSC>    
  );
};

export default Content;
