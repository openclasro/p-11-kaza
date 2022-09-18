
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router';
import DropDown from '../../components/dropdown/DropDown.js';
import Slider from '../../components/slider/Slider.js';
import Stars from '../../components/star/Stars.js';
import Tag from '../../components/tag/Tag.js';

import './logement.css';

const Logement = () => {

    const [location, setlocation] = useState();

    const { id } = useParams();
    const navigate = useNavigate();
    
    
    const getData = (id) => {
        fetch("../logements.json"
        
        )
        .then(async function (response) {
            const logements1 = await response.json();

            if( logements1.filter(logement => logement.id === id).length === 0){
                navigate("/404");
            }

            setlocation(logements1.filter(logement => logement.id === id)[0]);
          })
          
      };
    
    
    useEffect(() => {
       
        getData(id);
     
    }, [id])
    
    return (
        <div className="housing">
            
          {location && <Slider tabimages={location?.pictures} />}
          <section className="housing__content">
            <div className="housing__content__heading">
              <div className="housing-details">
                <h2>{location?.title}</h2>
                <h5 className="housing-details__subtitle" >{location?.location}</h5>
                <ul className="housing-details__tags">
                  {location?.tags.map((tag, index) => ( 
                    <Tag key={index} tag={tag}/>
                  ))}
                </ul>
              </div>
              <div className="housing-informations">
                <div className="housing-informations__host">
                  <img src={location?.host.picture} alt={location?.title}/>
                  <h5>{location?.host.name}</h5>
                </div>
                <div className="housing-informations__stars">
                    <Stars rating={location?.rating}/>
                </div>
              </div>
            </div>
            <div className="housing__content__description">
              <DropDown title="Description" content={location?.description}/>
              <DropDown title="Equipement" content={location?.equipments}/>
            </div>
          </section>
        </div>
      )
}
 
export default Logement;