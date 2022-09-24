import { useState } from "react";
import "./dropdown.css";
import {FaChevronUp,FaChevronDown } from 'react-icons/fa';


const DropDown = ({title,content}) => {

  
  const [openDropDown, setopenDropDown] = useState(false);
  
  return (
    <div className="dropdown"  >
      <div className="dropdown-header" onClick={() => setopenDropDown(!openDropDown)}>
        <div className="dropdown-title">{title}</div>
        <div className="dropdown-icon"> {openDropDown ?  (<FaChevronUp/>) : (<FaChevronDown/>)} </div>
      </div>

      {openDropDown && <div className="dropdown-body"  >{ content } 
         
    </div>}
    </div>
  );
};

export default DropDown;
