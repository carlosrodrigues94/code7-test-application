import React from 'react';
import { FaInfoCircle, FaReact } from 'react-icons/fa';
import { SiStyledComponents, SiTypescript } from 'react-icons/si';

// import { Container } from './styles';

const SectionInformations: React.FC = () => (

  <section>
    <h2>Teste Code7</h2>
    <p>
      Desafio proposto pela empresa Code7 com o propósito de avaliação de
      candidato.
    </p>
    <p>
      O foco deste projeto é a experiência do usuário e a usabilidade do
      frontend desenvolvido.
    </p>
    <div>

      <p>Funcionalidades do Projeto:</p>
      <p>
        <strong>
          <FaInfoCircle />
          Cadastrar uma nova dívida relacionada a um usuário
          da api JSONPlaceHolder
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
      <p>
        Tecnologias utilizadas.
      </p>
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
    </div>

  </section>

);

export default SectionInformations;
