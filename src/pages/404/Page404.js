import { Link } from 'react-router-dom'

import './page404.css';

const Page404 = () => {
  return (
    <div className="error404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Page404