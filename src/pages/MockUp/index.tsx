import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';

import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { Container, Form, UserContent } from './styles';

import api from '../../services/api';
import apiJsonPlaceHolder from '../../services/apiJsonPlaceHolder';

import { IUserJSONPlaceHolder } from '../../types/IUserJsonPlaceHolder';
import { IDebt } from '../../types/IDebt';
import { IApiResponse } from '../../types/IApiResponse';
import { ISubmitSuccessProps as ISubmitSuccessPropsModalCreateDebt } from './components/ModalCreateDebt';
import modals from '../../utils/modals';
import Loading from '../../components/Loading';
import ModalUserDebtList from './components/ModalUserDebtList';
import ModalConfirmEditDebt from './components/ModalConfirmEditDebt';
import ModalConfirmDeleteDebt from './components/ModalConfirmDeleteDebt';
import ModalSearchDebt from './components/ModalSearchDebt';
import ModalDebtListSearchResult from './components/ModalDebtListSearchResult';
import ModalEditDebt from './components/ModalEditDebt';
import ModalCreateDebt from './components/ModalCreateDebt';
import SectionInformations from './components/SectionInformations';

const MockUp: React.FC = () => {
  const [showModal, setShowModal] = useState(modals.NO_MODAL);
  const [loading, setLoading] = useState(false);
  const [debtList, setDebtList] = useState<IDebt[]>([]);
  const [userDebtList, setUserDebtList] = useState<IDebt[]>([]);
  const [debtId, setDebtId] = useState('');
  const [debtToEdit, setDebtToEdit] = useState<IDebt>({
    __v: 0,
    _id: '',
    criado: new Date(),
    valor: 0,
    motivo: '',
    idUsuario: 0,
    uuid: '',
  });
  const [debtsListResultSearch, setDebtsListResultSearch] = useState<IDebt[]>(
    [],
  );
  const [usersJsonPlaceHolder, setUsersJsonPlaceHolder] = useState<
    IUserJSONPlaceHolder[]
  >([]);
  const [
    userJsonPlaceHolderSelected,
    setUserJsonPlaceHolderSelected,
  ] = useState<IUserJSONPlaceHolder>({
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: '',
    address: {
      street: '',
      suite: '',
      zipcode: '',
      city: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
  });

  /**
   * Executes when a user from select is choosed
   */
  const handleChangeSelectUser = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (!event.target) return;

      const { value } = event.target;

      const userId = Number(value);

      if (!userId) {
        toast.error('Erro.. Id de usuário não encontrado, tente novamente.');
        return;
      }

      const userSelected = usersJsonPlaceHolder.find(
        (user) => user.id === userId,
      );

      if (!userSelected) {
        toast.error('Erro.. Usuário não encontrado, tente novamente.');
        return;
      }

      setUserJsonPlaceHolderSelected(userSelected);
    },
    [usersJsonPlaceHolder],
  );

  /**
   * Executes when user click in Listar Dívidas.
   */
  const handleFindUserDebtsList = useCallback(() => {
    const list = debtList.filter(
      (item) => item.idUsuario === userJsonPlaceHolderSelected.id,
    );

    setUserDebtList(list);

    if (list.length === 0) {
      toast.info('Esse usuário não possui dívidas.');
      return;
    }

    setShowModal(modals.MODAL_USER_DEBT_LIST);
  }, [userJsonPlaceHolderSelected.id, debtList]);

  /**
   * Executes when user click in Button edit inside Card of ModalUserDebtList
   */
  const handleEditDebt = useCallback((debtId: string) => {
    setDebtId(debtId);
    setShowModal(modals.MODAL_CONFIRM_EDIT_DEBT);
  }, []);
  /**
   * Executes when user click in Button delete inside Card of ModalUserDebtList
   */
  const handleDeleteDebt = useCallback((debtId: string) => {
    setDebtId(debtId);
    setShowModal(modals.MODAL_CONFIRM_DELETE_DEBT);
  }, []);

  /**
   * Execute when user click in cancel inside ModalConfirmEditDebt or ModalConfirmDeleteDebt
   */
  const handleBackUserDebtList = useCallback(() => {
    setDebtId('');
    setShowModal(modals.MODAL_USER_DEBT_LIST);
  }, []);

  /** Executes on click confirm delete Debt */
  const handleConfirmDeleteDebt = useCallback(async () => {
    try {
      setLoading(true);

      await api.delete(`/divida/${debtId}`);
      const userDebts = userDebtList.filter((debt) => debt._id !== debtId);
      const allDebtList = debtList.filter((debt) => debt._id !== debtId);
      setUserDebtList(userDebts);
      setDebtList(allDebtList);
      setDebtId('');
      setShowModal(modals.NO_MODAL);
      toast.success('Dívida excluida com sucesso.');
      setLoading(false);
    } catch (err) {
      setLoading(false);

      toast.error('Houve um erro ao excluir a dívida, tente novamente.');
    }
  }, [userDebtList, debtList, debtId]);

  /**
   * Executes when click "Buscar Dívida" after fill the input.
   */
  const handleSearchDebt = useCallback(
    (value: string) => {
      if (!value) {
        toast.error('É necessário preencher um valor para pesquisar a divida.');
        return;
      }
      const debtsFinded = debtList.filter(
        (debt) => debt._id === value
          || debt.motivo.toLowerCase().includes(value.toLowerCase()),
      );
      setDebtsListResultSearch(debtsFinded);
      if (!debtsFinded.length) {
        toast.info('Nenhum dívida encontrada.');
        return;
      }
      setShowModal(modals.MODAL_SEARCH_RESULT_LIST);
    },
    [debtList],
  );

  const handleCloseModalDebtResultSearchList = useCallback(() => {
    setDebtsListResultSearch([]);
    setShowModal(modals.NO_MODAL);
  }, []);

  /**
   * Confirm choose to edit the debt and open modal "ModalEditDebt"
   */
  const handleClickConfirmEditDebt = useCallback(() => {
    const debt = debtList.find((item) => item._id === debtId);

    if (!debt) {
      toast.error('Erro... Dívida não encontrada, por favor tente novamente.');
      return;
    }
    setDebtToEdit(debt);
    setShowModal(modals.MODAL_EDIT_DEBT);
  }, [debtList, debtId]);

  /**
   * Executes when user ends the edit of debt and save inside modal "ModalEditDebt"
   */
  const handleFinishEditDebt = useCallback(
    async (data: IDebt) => {
      try {
        setLoading(true);
        await api.put(`/divida/${data._id}`, {
          valor: data.valor,
          motivo: data.motivo,
        });
        toast.success('dívida editada com sucesso.');

        const debtsListOld = debtList.filter((debt) => debt._id !== data._id);

        const debtsListUpdated = [...debtsListOld, data];

        setDebtList(debtsListUpdated);

        setShowModal(modals.NO_MODAL);

        setDebtId('');

        setDebtToEdit({
          __v: 0,
          _id: '',
          criado: new Date(),
          valor: 0,
          motivo: '',
          idUsuario: 0,
          uuid: '',
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error('Erro. Houve um erro ao editar a dívida.');
      }
    },
    [debtList],
  );

  /**
   * Executes when click button Cadastrar um Dívida
   */
  const handleClickRegisterDebt = useCallback(() => {
    setShowModal(modals.MODAL_CREATE_DEBT);
  }, []);

  /**
   * Executes when click in confirm inside modal ModalCreateDebt
   */
  const handleSubmitSuccessCreateDebt = useCallback(
    async (data: ISubmitSuccessPropsModalCreateDebt) => {
      setLoading(true);

      try {
        await api.post('/divida', data);

        const response: AxiosResponse<IApiResponse> = await api.get('/divida');

        const { result } = response.data;

        setDebtList(result);

        setShowModal(modals.NO_MODAL);
        setLoading(false);
        toast.success('Dívida cadastrada com sucesso.');
      } catch (err) {
        setLoading(false);

        toast.error('Erro.. Houve um erro ao criar a dívida, tente novamente.');
      }
    },
    [],
  );

  /**
   * Get all Users from JSONPlaceHolderApi
   */
  useEffect(() => {
    async function getUserJsonPlaceHolder() {
      setLoading(true);
      const response: AxiosResponse<
        IUserJSONPlaceHolder[]
      > = await apiJsonPlaceHolder('/users');

      setUsersJsonPlaceHolder(response.data);
      setLoading(false);
    }

    getUserJsonPlaceHolder();
  }, []);

  /** Get All Debts From Code7 Api */
  useEffect(() => {
    const getDebtsList = async () => {
      try {
        setLoading(true);

        const response: AxiosResponse<IApiResponse> = await api.get('/divida');

        const { result } = response.data;

        setDebtList(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);

        toast.error('Erro.. Houve um erro ao consultas os dados da Code7');
      }
    };

    getDebtsList();
  }, []);

  return (
    <Container>
      <SectionInformations />
      <ModalUserDebtList
        userDebtList={userDebtList}
        isOpen={showModal === modals.MODAL_USER_DEBT_LIST && true}
        onClickBtnLeft={() => setShowModal(modals.NO_MODAL)}
        onClickBtnRight={() => {}}
        onClickDeleteDebt={(debtId) => handleDeleteDebt(debtId)}
        onClickEditDebt={(debtId) => handleEditDebt(debtId)}
      />
      <ModalConfirmEditDebt
        isOpen={showModal === modals.MODAL_CONFIRM_EDIT_DEBT && true}
        onClickCancel={handleBackUserDebtList}
        onClickConfirm={handleClickConfirmEditDebt}
      />
      <ModalConfirmDeleteDebt
        isOpen={showModal === modals.MODAL_CONFIRM_DELETE_DEBT && true}
        onClickCancel={handleBackUserDebtList}
        onClickConfirm={handleConfirmDeleteDebt}
      />
      <ModalSearchDebt
        isOpen={showModal === modals.MODAL_SEARCH_DEBT && true}
        onClickCancel={() => setShowModal(modals.NO_MODAL)}
        onClickSearch={(value) => handleSearchDebt(value)}
      />
      <ModalDebtListSearchResult
        isOpen={showModal === modals.MODAL_SEARCH_RESULT_LIST && true}
        onClickBtnRight={() => {}}
        onClickBtnLeft={handleCloseModalDebtResultSearchList}
        onClickDeleteDebt={(debtId) => handleDeleteDebt(debtId)}
        onClickEditDebt={(debtId) => handleEditDebt(debtId)}
        debtList={debtsListResultSearch}
        users={usersJsonPlaceHolder}
      />
      <ModalEditDebt
        debt={debtToEdit}
        user={usersJsonPlaceHolder.find(
          (user) => user.id === debtToEdit.idUsuario,
        )}
        onClickCancel={() => setShowModal(modals.NO_MODAL)}
        onSubmitSuccess={handleFinishEditDebt}
        isOpen={showModal === modals.MODAL_EDIT_DEBT}
      />
      <ModalCreateDebt
        isOpen={showModal === modals.MODAL_CREATE_DEBT && true}
        onClickCancel={() => setShowModal(modals.NO_MODAL)}
        onSubmitSuccess={handleSubmitSuccessCreateDebt}
        user={userJsonPlaceHolderSelected}
      />
      <Form>
        <div className="div-header">
          Gerenciamento de Dívidas
          {loading && <Loading className="loading-icon" />}
        </div>

        <UserContent>
          <strong> Selecione um Usuário para Continuar</strong>
          <select defaultValue={0} onChange={handleChangeSelectUser}>
            <option value={0} disabled>
              Selecione um Usuário
            </option>
            {usersJsonPlaceHolder.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          {userJsonPlaceHolderSelected.id > 0 && (
            <>
              <button type="button" onClick={handleFindUserDebtsList}>
                Listar Dívidas
              </button>
              <button type="button" onClick={handleClickRegisterDebt}>
                Cadastrar uma Dívida
              </button>
            </>
          )}
        </UserContent>

        <strong>
          Caso prefira, Você pode buscar as Dívidas pelo ID ou Motivo
        </strong>
        <button
          type="button"
          onClick={() => setShowModal(modals.MODAL_SEARCH_DEBT)}
        >
          Buscar Dívida
        </button>
      </Form>
    </Container>
  );
};

export default MockUp;
