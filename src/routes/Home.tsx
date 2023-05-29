import React, { useState } from 'react'
import Search from '../components/Search'

import { UserProps } from '../types/user'


        // Import UserProps para dizer que esse userState tem (UserProps) os valores ja tipados
const Home: React.FC = () => {
    const [user, setUser] = useState<UserProps | null>(null)


    // Funcao Assncrona para Buscar Dados da API do github
  const loadUser = async(userName: string) => {

      const res = await fetch(`https://api.github.com/users/${userName}`)
      const data = await res.json()
      
      const {
        avatar_url,
        login,
        location,
        followers,
        following,
      } = data

      const userData:  UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      }
      setUser(userData)
  }

  return <div>
  
    <Search loadUser={loadUser} />

    <div>
      {
        user && <li>{user.login}</li>
      }
    </div>
  </div>
}

export default Home;