import React from 'react'
import {Link} from 'react-router-dom';

function CountriesList({allCountries}) {
  return (
    <div>{allCountries.map((elem,i)=>{
        return(
            <Link
            key={elem.alpha3Code}
            className="list-group-item list-group-item-action"
            to={`/${elem.alpha3Code}`}
          >
               <img 
            src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} 
            alt='flag'
            style={{width: '25px', margin: '2px 10px 2px 2px'}}
            />
            {elem.name.common}
          </Link>
            
            // <div>
            //     <Link to={elem.alpha3Code}>{elem.name.common}</Link>
            //     </div>
        );
    })}
        </div>
  );
}

export default CountriesList