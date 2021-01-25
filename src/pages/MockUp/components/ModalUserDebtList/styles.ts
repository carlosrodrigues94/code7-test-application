import styled from 'styled-components';

export const ContentDebtList = styled.div`
  display: flex;
  width: 98%;
  flex-direction: column;
  align-items: center;
  height: 400px;
  overflow-y: auto;
  justify-content: flex-start;
  border: 2px solid var(--secondary);
  border-radius: 5px;

  .div-card-debt {
    flex-direction:row;

    .div-informations {
      display:flex;
      align-items:flex-start;
      height:100%;
      width:100%;
      flex-direction:column;
      justify-content:center;
      text-align:start;
    }
    .div-edit-delete  {
      display:flex;
      align-items:center;
      height:100%;
      width:80px;

      button {
        display:flex;
        align-items:center;
        padding:4px;
        height:42px;
        width:42px;
        font-size:18px;
        margin:4px;
        border:2px solid var(--border-color);
        border-radius:5px;

        &:hover {
          background:var(--alert);
          color:var(--text-light);
        }

      }
    }



    &:hover {
      cursor: pointer;
      background: var(--primary);
      color: var(--text-light);
    }


  }
`;
