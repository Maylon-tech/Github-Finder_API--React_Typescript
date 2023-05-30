import { UserProps } from "../types/user"
import { MdLocationPin } from "react-icons/md"
import { Link } from 'react-router-dom'

import classes from './User.module.css'

const User = ({
    avatar_url,
    login,
    location,
    followers,
    following,
}: UserProps) => {
  return (
    <div className={classes.usuario}>
      <img src={avatar_url} alt={login} />

      <div className="infoContainer">
        <div className={classes.infoLeft}>
          <h2>{login}</h2>
          <p>
            <MdLocationPin />
            <span>{location}</span>
          </p>
        </div>

          <span className={classes.divide}></span>
          
        <div className={classes.infoRight}>
          <div>
            <p>Segidores:</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Seguindo:</p>
            <p>{following}</p>
          </div>
        </div>
      </div>

      <Link className={classes.navLink} to={`/repos/${login}`}>Ver Melhore Projetos</Link>
    </div>
  )
}

export default User