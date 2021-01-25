import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

  :root {

    --modal-header:#2980b9;
    --primary:#3498db;
    --secondary:#bdc3c7;
    --tertiary:#dfe6e9;
    --teriary-lighter:#ecf0f1;
    --text-light:#FFF;
    --text-dark:#444;
    --border-color:#95a5a6;
    --danger:#e74c3c;
    --success:#27ae60;
    --alert:#f1c40f

  }

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family:Roboto;

  }
/* // para os inputs nao ficarem com o azulzinho  outline:0  */
  *:focus {
      outline:0;
  }
/* // Para as fontes ficarem mais definidas -webkit-font-smoothing:antialiased;  */
  body {
    -webkit-font-smoothing:antialiased;
  }


  html, body, #root {
      height:100vh;
      overflow-x:hidden;
      select {
          -webkit-appearance: none;
          -moz-appearance: none;
      }

  }
  input,select{
    font-size:14px;
  }

  body, input, button {
      font-family:Roboto;
      font: 14px;
      &:focus {
          outline:0;
      }
  }

  a {
      text-decoration: none;

  }

  ul {
      list-style: none
  }

  button {
      cursor: pointer
  }


`;
export default Global;
