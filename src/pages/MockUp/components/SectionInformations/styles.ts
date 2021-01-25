import styled from 'styled-components';

interface ISectionProps {
  isMinimized:boolean;
}

export const Section = styled.section<ISectionProps>`
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
  margin: 24px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  text-align: start;
  transition:all 0.3s;

  .div-title {
    display: flex;

    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    margin: 0 0 16px 0;
    background: var(--primary);
    color: var(--text-light);
    border-radius: 5px 5px 0 0;
    position: relative;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 16px;
      background: none;
      color: var(--text-light);
      border: 0;
      svg {
        color: var(--text-light);
        font-size: 18px;
      }
    }
  }

  .div-introduction {
    display: ${(props) => (props.isMinimized ? 'none' : 'flex')};
    flex-direction:column;
    background: var(--secondary);
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);
    margin: 0 16px;
    transition:all 0.3s;
  }

  .div-functionalities {
    display: ${(props) => (props.isMinimized ? 'none' : 'flex')};
    flex-direction:column;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);
    background: var(--secondary);
    padding: 8px;
    border-radius: 5px;
    margin: 4px 0;
    transition:all 0.3s;

    strong {
      font-size: 14px;
    }
  }

  p {
    margin: 4px 0;
    text-align: start;
  }

  svg {
    margin: 0 8px 0 0;
    color: var(--success);
  }
`;
