import React from 'react';

import { CSSProperties } from 'styled-components';

import {
  Content, Line, Header, ModalContainer,
} from './styles';

interface IModalSmallProps {
  textBtnLeft?: string;
  textBtnRight?: string;
  isOpen: boolean;
  title?: string;
  showBtnClose?: boolean;
  onClickBtnRight?: () => void;
  onClickBtnLeft?: () => void;
  stylesButtonLeft?: CSSProperties;
  stylesButtonRight?: CSSProperties;
}

const ModalSmall: React.FC<IModalSmallProps> = ({
  onClickBtnRight = () => {},
  onClickBtnLeft = () => {},
  textBtnLeft = 'Cancelar',
  textBtnRight = 'Confirmar',
  title = 'Título',
  children,
  isOpen,
  stylesButtonLeft,
  stylesButtonRight,
}) => (
  <ModalContainer isOpen={isOpen}>
    <Content className={isOpen ? 'openModal' : 'closeModal'}>
      <Header>{title}</Header>
      {children}
      <Line>
        <button type="button" onClick={onClickBtnLeft} style={stylesButtonLeft}>
          {textBtnLeft}
        </button>
        <button type="button" onClick={onClickBtnRight} style={stylesButtonRight}>
          {textBtnRight}
        </button>
      </Line>
    </Content>
  </ModalContainer>
);
export default ModalSmall;
