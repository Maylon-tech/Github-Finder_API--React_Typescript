import React, { useState } from 'react'
import Search from '../components/Search'
import User from '../components/User'
import Error from '../components/Error'

import { UserProps } from '../types/user'


        // Import UserProps para dizer que esse userState tem (UserProps) os valores ja tipados
const Home: React.FC = () => {
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)

    // Funcao Assncrona para Buscar Dados da API do github
  const loadUser = async(userName: string) => {
      setError(false)
      setUser(null)

      const res = await fetch(`https://api.github.com/users/${userName}`)
      const data = await res.json()
      
      if (res.status === 404) {
        setError(true)
        return
      }

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
        user && <User {...user} />
      }

      {error && <Error />}
    </div>
  </div>
}

export default Home;