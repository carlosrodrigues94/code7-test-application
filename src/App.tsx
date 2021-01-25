import React from 'react';
import { ToastContainer } from 'react-toastify';
import MockUp from './pages/MockUp';
import Global from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App:React.FC = () => (
  <>
    <ToastContainer />
    <MockUp />
    <Global />
  </>
);

export default App;
