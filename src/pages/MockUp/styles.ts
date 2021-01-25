import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #636e72;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    margin: 16px 0 auto 0;
    width: 100%;
    max-width: 600px;
    background: var(--tertiary);
    min-height: 200px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    padding: 4px;

    text-align: start;

    div {

    }

    p{
      margin:4px 0;
      text-align: start;
    }

    svg{
      margin:0 8px 0 0;
      color:var(--success);
    }


  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 5px;
  background: var(--secondary);
  min-height: 500px;
  font-size: 14px;
  position: relative;
  align-items: center;
  margin: 0 0 auto 0;

  .div-header {
    height: 45px;
    width: 100%;
    background: var(--primary);
    border-radius: 5px 5px 0 0;
    align-items: center;
    justify-content: center;
    display: flex;
    color: var(--text-light);
    font-weight: bold;
    margin: 0 0 16px 0;
    position: relative;
  }

  .loading-icon {
    position: absolute;
    right: 16px;
  }

  button {
    border-radius: 5px;
    border: 2px solid var(--border-color);
    height: 36px;
    min-width: 150px;
    margin: 4px 0;
    padding-left: 8px;
    margin: 4px;
    font-weight: bold;
    color: var(--text-dark);
    background: var(--success);
    color: var(--text-light);
    border-color: var(--success);

    &:hover {
      opacity: 0.8;
    }
  }

  > strong {
    margin: 8px 0;
  }

  @media (max-width: 410px) {
    width: 98%;
  }
`;
export const UserContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 250px;
  width: 95%;
  border-radius: 5px;
  background: var(--tertiary);
  margin: 0 0 16px 0;

  > strong {
    margin: 8px 0;
  }

  select {
    border-radius: 5px;
    border: 2px solid var(--border-color);
    background: none;
    height: 36px;
    width: 95%;
    margin: 4px 0;
    padding-left: 8px;
  }

  button {
    border-radius: 5px;
    border: 2px solid var(--border-color);
    background: none;
    height: 36px;
    min-width: 150px;
    margin: 4px 0;
    padding-left: 8px;
    margin: 4px;
    font-weight: bold;
    color: var(--text-dark);
    &:hover {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--text-light);
    }
  }
`;
