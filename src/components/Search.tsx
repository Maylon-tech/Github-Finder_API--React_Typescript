import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
// import { Container } from './styles';

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}


const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("")


  return (
    <div>
        <h1>Busque por um usuario:</h1>
        <p>Conheca seus melhores repositorios.</p>

        <div>
            <input 
              type="text" 
              placeholder='Digite o nome do usuario.' 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <button onClick={() => loadUser(userName)}>
                <BsSearch />
                Pesquisar
            </button>
        </div>
    </div>
  )
}

export default Search;