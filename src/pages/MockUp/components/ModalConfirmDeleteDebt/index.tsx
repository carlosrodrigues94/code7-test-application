import React from 'react';
import Card from '../../../../components/Modals/Card';
import ModalSmall from '../../../../components/Modals/ModalSmall';

// import { Container } from './styles';

interface IModalConfirmDeleteDebtProps {
  isOpen: boolean;
  onClickConfirm: () => void;
  onClickCancel: () => void;
}

const ModalConfirmDeleteDebt: React.FC<IModalConfirmDeleteDebtProps> = ({
  isOpen,
  onClickCancel,
  onClickConfirm,
}) => (
  <ModalSmall
    title="Deletar Dívida"
    isOpen={isOpen}
    onClickBtnRight={onClickConfirm}
    onClickBtnLeft={onClickCancel}
  >
    <Card alignItems="center">
      <p>
        <strong>Quer mesmo deletar essa dívida ?</strong>
      </p>
    </Card>
  </ModalSmall>
);

export default ModalConfirmDeleteDebt;
