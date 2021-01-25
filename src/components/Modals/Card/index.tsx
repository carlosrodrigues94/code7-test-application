import React from 'react';

import { CSSProperties } from 'styled-components';

import { Container } from './styles';

interface ICardProps extends CSSProperties {
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  className?:string;
}

const Card: React.FC<ICardProps> = ({
  children, alignItems = '', className = '', ...rest
}) => (
  <Container className={className} style={{ alignItems: alignItems || 'flex-start', ...rest }}>
    {children}
  </Container>
);

export default Card;
