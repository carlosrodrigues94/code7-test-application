import styled from 'styled-components';

interface IModalContainerProps {
  isOpen: boolean;
}

export const ModalContainer = styled.div<IModalContainerProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  overflow-y: auto;
  padding: 8px;
  top: 0;
  left: 0;

  > div {
    animation: showModalAnimation 0.3s ease-in-out normal;
    @keyframes showModalAnimation {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background: var(--text-light);
  text-align: center;
  position: relative;

  @media(max-width:500px){
    width:98%;
  }

`;
export const Line = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 16px 0;

  button {
    height: 32px;
    width: 120px;
    border-radius: 5px;
    border: 0;
    background: var(--success);
    color:var(--text-light);
    font-weight:bold;

    &:nth-child(1) {
      background: var(--danger);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: var(--modal-header);
  height: 42px;
  border-radius: 5px 5px 0 0;
  border: 1px solid 5px;
  border-bottom: 0;
  color:var(--text-light);

  h4 {
    color: var(--text-light);
    margin: 0;
    font-weight: bold;
    font-size: 16px;
  }
`;
