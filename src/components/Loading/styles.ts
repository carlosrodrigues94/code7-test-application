import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:36px;
  width:36px;
  color:var(--text-light);

  svg {
    font-size:18px;
    animation:rotateSpinner 0.3s linear infinite;
    @keyframes rotateSpinner {
      from {
        transform:rotate(0deg)
      }
      to{
        transform:rotate(360deg)
      }
    }
  }
`;
