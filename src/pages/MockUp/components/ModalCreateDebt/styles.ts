import styled from 'styled-components';

export const ContentInputs = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:200px;
  background:var(--secondary);
  flex-direction:column;
  border-radius:5px;
  padding:16px;
  margin:8px 0;

  p{
    align-self:flex-start;
  }


  input {
    border-radius:5px;
    height:40px;
    width:250px;
    padding:0 0 0 8px;
    background:none;
    border:2px solid var(--border-color);
    margin:8px 0;
  }

  @media(max-width:300px){
    input{
      width:98%;
    }
  }

`;
