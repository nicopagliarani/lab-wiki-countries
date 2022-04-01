import React from 'react'
import {useParams,Link} from 'react-router-dom';

function CountryDetail({allCountries}) {
    const { id } = useParams();
    const country = allCountries.find((country) => country.alpha3Code === id) || {};
  return ( <div className="col-7">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
  <h1>{country.name.common}</h1>
  <table className="table">
      <thead />
      <tbody>
          <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital && country.capital[0]}</td>
          </tr>
          <tr>
              <td>Area</td>
              <td>
                  {country.area} km
                  <sup>2</sup>
              </td>
          </tr>
          <tr>
              <td>Borders</td>
              <td>
                  <ul>
                      {country.borders.map((cca3) => {
                          return (
                              <li key={cca3}>
                                  <Link to={`/${cca3}`}>
                                      {
                                          allCountries.find(
                                              (country) => country.alpha3Code === cca3
                                          ).name.common
                                      }
                                  </Link>
                              </li>
                          );
                      })}
                  </ul>
              </td>
          </tr>
      </tbody>
  </table>
</div>
);
};


export default CountryDetail