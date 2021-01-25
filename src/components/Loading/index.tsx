import React, { HtmlHTMLAttributes } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { Container } from './styles';

type ILoadingProps = HtmlHTMLAttributes<HTMLDivElement>

const Loading: React.FC<ILoadingProps> = ({ ...rest }) => (
  <Container {...rest}>
    <AiOutlineLoading />
  </Container>
);

export default Loading;
