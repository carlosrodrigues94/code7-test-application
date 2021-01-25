import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../../../../components/Modals/Card';
import ModalSimple from '../../../../components/Modals/ModalSimple';
import { IDebt } from '../../../../types/IDebt';
import { IUserJSONPlaceHolder } from '../../../../types/IUserJsonPlaceHolder';
import { currency, dateFormat } from '../../../../utils/masks';
import { money } from '../../../../utils/parsers';
import { ContentInputs } from './styles';

interface IModalEditDebtProps {
  isOpen: boolean;
  debt: IDebt;
  onSubmitSuccess: (data: IDebt) => void;
  onClickCancel: () => void;
  user: IUserJSONPlaceHolder | undefined;
}

const ModalEditDebt: React.FC<IModalEditDebtProps> = ({
  debt,
  isOpen,
  onSubmitSuccess,
  onClickCancel,
  user,
}) => {
  const [reason, setReason] = useState('');
  const [value, setValue] = useState<string | number>('');

  const handleConfirmEdit = useCallback(() => {
    if (!reason) {
      toast.error(
        'Erro.. Os campos Motivo e Valor devem ser preenchidos corretamente.',
      );
      return;
    }

    const valueParsed = money(value.toString());

    onSubmitSuccess({ ...debt, valor: valueParsed, motivo: reason });
  }, [debt, value, reason, onSubmitSuccess]);

  useEffect(() => {
    if (debt.motivo) {
      setReason(debt.motivo);
    }
    setValue(currency(parseFloat(debt.valor.toString()).toFixed(2)));
  }, [debt]);

  return (
    <ModalSimple
      title="Editar Dívida"
      isOpen={isOpen}
      onClickBtnRight={handleConfirmEdit}
      onClickBtnLeft={onClickCancel}
    >
      <Card alignItems="center">
        <p>
          <strong>Devedor:</strong>
          {' '}
          {user?.name || 'Devedor não encontrado.'}
          {' '}
        </p>
        <p>
          <strong>Divida Criada-em:</strong>
          {' '}
          {dateFormat(new Date(debt.criado))}
          {' '}
        </p>
      </Card>
      <Card alignItems="center">
        <strong>Para editar essa dívida, altere os campos abaixo.</strong>

        <ContentInputs>
          <p>Motivo da Dívida</p>
          <input
            placeholder="Motivo"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          />
          <p>Valor da Dívida</p>
          <input
            placeholder="Valor"
            value={value}
            onChange={(event) => {
              const inputValue = (event.target.value);

              setValue(currency(inputValue));
            }}
          />
        </ContentInputs>
      </Card>
    </ModalSimple>
  );
};

export default ModalEditDebt;
