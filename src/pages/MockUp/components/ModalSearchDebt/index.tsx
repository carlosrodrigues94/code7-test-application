import React, { useEffect, useState } from 'react';
import Card from '../../../../components/Modals/Card';
import ModalSmall from '../../../../components/Modals/ModalSmall';

// import { Container } from './styles';

interface IModalSearchDebt {
  isOpen: boolean;
  onClickSearch: (value: string) => void;
  onClickCancel: () => void;
}

const ModalSearchDebt: React.FC<IModalSearchDebt> = ({
  isOpen,
  onClickSearch,
  onClickCancel,
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isOpen) {
      setInputValue('');
    }
  }, [isOpen]);

  return (
    <ModalSmall
      isOpen={isOpen}
      onClickBtnLeft={onClickCancel}
      onClickBtnRight={() => onClickSearch(inputValue)}
      title="Buscar Dívida"
      textBtnRight="Buscar"
      textBtnLeft="Fechar"
    >
      <Card alignItems="center">
        <input
          placeholder="digite o motivo ou id da dívida."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{
            height: '40px',
            width: '95%',
            background: 'none',
            border: '2px solid var(--border-color)',
            borderRadius: '5px',
            paddingLeft: '16px',
          }}
        />
      </Card>
    </ModalSmall>
  );
};

export default ModalSearchDebt;
