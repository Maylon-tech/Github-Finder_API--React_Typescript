import { useState, KeyboardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'
// import { Container } from './styles';
import classes from './Search.module.css'

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}


const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("")

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName)
    }
  }

  return (
    <div className={classes.search}>
        <h1>Busque por um usuario:</h1>
        <p>Conheca seus melhores repositorios.</p>

        <div className={classes.search_container}>
            <input 
              type="text" 
              placeholder='Digite o nome do usuario.' 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={() => loadUser(userName)}>
                <BsSearch className={classes.icon} />
             
            </button>
        </div>
    </div>
  )
}

export default Search;