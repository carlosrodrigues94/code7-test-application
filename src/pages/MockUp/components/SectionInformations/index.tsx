import React, { useState } from 'react';
import {
  FaGithub,
  FaInfoCircle,
  FaReact,
  FaRegWindowMinimize,
} from 'react-icons/fa';
import { FiMaximize2 } from 'react-icons/fi';
import { SiStyledComponents, SiTypescript } from 'react-icons/si';

import { Section } from './styles';

const SectionInformations: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <Section isMinimized={isMinimized}>
      <div className="div-title">
        <h2>Teste Code7</h2>
        <button type="button" onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? <FiMaximize2 /> : <FaRegWindowMinimize />}
          {' '}
        </button>
      </div>
      <div className="div-introduction">
        <p>
          Desafio proposto pela empresa Code7 com o propósito de avaliação de
          candidato.
        </p>
        <p>
          O foco deste projeto é a experiência do usuário e a usabilidade do
          frontend desenvolvido.
        </p>
      </div>

      <div className="div-functionalities">
        <p>Funcionalidades do Projeto:</p>
        <p>
          <strong>
            <FaInfoCircle />
            Cadastrar uma nova dívida relacionada a um usuário da api
            JSONPlaceHolder
          </strong>
        </p>
        <p>
          <strong>
            <FaInfoCircle />
            Editar uma dívida já cadastrada.
          </strong>
        </p>
        <p>
          <strong>
            <FaInfoCircle />
            Deletar uma dívida já cadastrada.
          </strong>
        </p>
        <p>
          <strong>
            <FaInfoCircle />
            Buscar uma ou mais dívidas através do Id ou palavras contidas no
            campo *Motivo
          </strong>
        </p>
      </div>

      <p>Tecnologias utilizadas.</p>
      <p>
        <strong>
          <SiTypescript color="#0984e3" />
          {' '}
          Typescript
        </strong>
      </p>

      <p>
        <strong>
          <FaReact color="#6c5ce7" />
          {' '}
          React-JS
        </strong>
      </p>
      <p>
        <strong>
          <SiStyledComponents color="#e84393" />
          {' '}
          Styled-Components
        </strong>
      </p>

      <p style={{ margin: '8px 0' }}>Link do Projeto:</p>

      <p>
        <strong>
          <FaGithub color="#000" />
          {' '}
          <a href="https://github.com/carlosrodrigues94/code7-test-application.git" rel="">Git-Hub/carlosrodrigues94</a>
        </strong>
      </p>
    </Section>
  );
};

export default SectionInformations;
