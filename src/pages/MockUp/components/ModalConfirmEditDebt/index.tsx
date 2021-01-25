import React from 'react';
import Card from '../../../../components/Modals/Card';
import ModalSmall from '../../../../components/Modals/ModalSmall';

// import { Container } from './styles';

interface IModalConfirmEditDebtProps {
  isOpen: boolean;
  onClickConfirm: () => void;
  onClickCancel: () => void;
}

const ModalConfirmEditDebt: React.FC<IModalConfirmEditDebtProps> = ({
  isOpen,
  onClickCancel,
  onClickConfirm,
}) => (
  <ModalSmall
    title="Editar Dívida"
    isOpen={isOpen}
    onClickBtnRight={onClickConfirm}
    onClickBtnLeft={onClickCancel}
  >
    <Card alignItems="center">
      <p>
        <strong>Quer mesmo editar essa dívida ?</strong>
      </p>
    </Card>
  </ModalSmall>
);

export default ModalConfirmEditDebt;
