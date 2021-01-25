import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../../../../components/Modals/Card';
import ModalSimple from '../../../../components/Modals/ModalSimple';
import { IUserJSONPlaceHolder } from '../../../../types/IUserJsonPlaceHolder';
import { currency } from '../../../../utils/masks';
import { money } from '../../../../utils/parsers';

import { ContentInputs } from './styles';

export interface ISubmitSuccessProps {
  motivo:string;
  valor:number|string;
  idUsuario:number
}

interface IModalCreateDebtProps {
  isOpen: boolean;
  onSubmitSuccess: (data:ISubmitSuccessProps) => void;
  onClickCancel: () => void;
  user: IUserJSONPlaceHolder | undefined;
}

const ModalCreateDebt: React.FC<IModalCreateDebtProps> = ({
  isOpen,
  onSubmitSuccess,
  onClickCancel,
  user,
}) => {
  const [reason, setReason] = useState('');
  const [value, setValue] = useState<string | number>('');

  const handleConfirmRegister = useCallback(() => {
    if (!reason) {
      toast.error(
        'Erro.. Os campos Motivo e Valor devem ser preenchidos corretamente.',
      );
      return;
    }

    if (!user) {
      toast.error('Erro ao cadastrar a dívida, usuário não encontrado, por favor tente novamente.');
      return;
    }

    const valueParsed = money(value.toString());

    const data:ISubmitSuccessProps = {
      motivo: reason,
      valor: valueParsed,
      idUsuario: user.id,
    };

    onSubmitSuccess(data);
  }, [value, reason, onSubmitSuccess, user]);

  useEffect(() => {
    if (isOpen) {
      setReason('');
      setValue('');
    }
  }, [isOpen]);

  return (
    <ModalSimple
      title="Cadastrar uma Dívida"
      isOpen={isOpen}
      onClickBtnRight={handleConfirmRegister}
      onClickBtnLeft={onClickCancel}
    >
      <Card alignItems="center">
        <p>
          <strong>Devedor:</strong>
          {' '}
          {user?.name || 'Devedor não encontrado.'}
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

export default ModalCreateDebt;
