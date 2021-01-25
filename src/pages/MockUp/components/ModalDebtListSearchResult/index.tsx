import React from 'react';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Card from '../../../../components/Modals/Card';
import ModalSimple from '../../../../components/Modals/ModalSimple';
import { IDebt } from '../../../../types/IDebt';
import { IUserJSONPlaceHolder } from '../../../../types/IUserJsonPlaceHolder';
import { currency, dateFormat } from '../../../../utils/masks';
import { ContentDebtList } from './styles';

interface IModalDebtListSearchResultProps {
  isOpen: boolean;
  debtList: IDebt[];
  users:IUserJSONPlaceHolder[];
  onClickBtnLeft: () => void;
  onClickBtnRight: () => void;
  onClickDeleteDebt: (debtId: string) => void;
  onClickEditDebt: (debtId: string) => void;
}

const ModalDebtListSearchResult: React.FC<IModalDebtListSearchResultProps> = ({
  isOpen,
  users = [],
  debtList,
  onClickBtnLeft,
  onClickBtnRight,
  onClickDeleteDebt,
  onClickEditDebt,
}) => (
  <ModalSimple
    isOpen={isOpen}
    onClickBtnRight={onClickBtnRight}
    onClickBtnLeft={onClickBtnLeft}
    title="Lista de Dívidas (Todas)"
    stylesButtonRight={{ display: 'none' }}
    textBtnLeft="Fechar"
  >
    <ContentDebtList>
      {debtList.map((debt:IDebt) => (
        <Card className="div-card-debt" key={debt._id}>
          <div className="div-informations">
            <p>
              <strong>
                Devedor:
                {' '}
              </strong>
              {users.find((user) => user.id === debt.idUsuario)?.name || 'Devedor não encontrado.'}

            </p>
            <p>
              <strong>Motivo:</strong>
              {' '}
              {debt.motivo}
            </p>
            <p>
              <strong>Valor:</strong>
              {' '}
              {currency(parseFloat(debt.valor.toString()).toFixed(2))}
            </p>
            <p>
              <strong>Criado em:</strong>
              {' '}
              {dateFormat(new Date(debt.criado))}
            </p>
          </div>
          <div className="div-edit-delete">
            <button type="button" onClick={() => onClickEditDebt(debt._id)}>
              {' '}
              <FaPencilAlt />
              {' '}
            </button>
            <button type="button" onClick={() => onClickDeleteDebt(debt._id)}>
              {' '}
              <FaTrashAlt />
              {' '}
            </button>
          </div>
        </Card>
      ))}
    </ContentDebtList>
  </ModalSimple>
);
export default ModalDebtListSearchResult;
