

import { Link } from 'react-router-dom'
import './card.css';
const Card = ({id, title, img}) => {
    return (
        <Link to={`/location/${id}`}>
            <article className="card">
                <img src={img} alt=""/>
                <h4>{title}</h4>
            </article>
        </Link>
    )
}

export default Card