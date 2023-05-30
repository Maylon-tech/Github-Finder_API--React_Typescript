import classes from './User.module.css'
const Error = () => {
  return (
    <div className={classes.error}>
        <p>Usuario nao encontrado.</p>
    </div>
  )
}

export default Error