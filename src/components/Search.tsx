import React from 'react';
import { BsSearch } from 'react-icons/bs'
// import { Container } from './styles';

const components: React.FC = () => {
  return (
    <div>
        <h1>Busque por um usuario:</h1>
        <p>Conheca seus melhores repositorios.</p>

        <div>
            <input type="text" placeholder='Digite o nome do usuario.' />
            <button>
                <BsSearch />
                Pesquisar
            </button>
        </div>
    </div>
  )
}

export default components;