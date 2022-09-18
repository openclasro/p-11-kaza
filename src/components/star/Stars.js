

import './stars.css';
const Stars = ({rating}) => {

    // * rating = 4

    const maxRating = 5;
    const stars = Array.from({length: maxRating}, () => '🟊')
  // *  stars = ['🟊','🟊','🟊','🟊','🟊']
    return(
        <div className="stars">
            {stars.map((star, index) => {
                let active = false;
                if (index < rating) {
                    active = true;
                }
                return (
                    <span 
                        className={active ? "stars__star stars__star--active" : "stars__star stars__star--inactive"}  
                        key={index}>
                            {star}
                    </span>
                )
            })}
        </div>
    )
}

export default Stars