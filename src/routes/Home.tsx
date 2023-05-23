import React, { useState } from 'react';
import Search from '../components/Search'


const Home: React.FC = () => {
    const [user, setUser] = useState(null)

  return <div>
    <h1>Ola Home</h1>
    <Search />
  </div>
}

export default Home;