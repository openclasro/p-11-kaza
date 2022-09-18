
import './banner.css';

const Banner = ({img,title}) => {
    return ( <div className="banner">
    <img src={img} className="banner__img" alt="Paysage de la nature"/>
    
       {title !=='' &&
       <h2 className="banner__title">{title}</h2>}
        

</div> );
}
 
export default Banner;