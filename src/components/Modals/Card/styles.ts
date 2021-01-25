import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 5px;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  margin: 4px;
  background: var(--teriary-lighter);

  p {
    margin: 4px 0 0 0;
  }

  label {
    align-items: center;
  }

  .any-button-used-inside-card {
    display: flex;
    align-items: center;
    align-self: center;
    margin: 8px 0;
    background: none;
    position: relative;
    padding: 4px 8px;
    margin: 4px 0;
    border: 1px solid rgb(0,0,0,0.3);
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s;
  }
`;
