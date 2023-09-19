import React from 'react'
//css file
import style from './Country.module.css'

const Country = (props) => {
  //destructuring properties
  const { name, flags, capital, population, area } = props.country
  //country remove handler
  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  }
  //return function
  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button className={style.btn} onClick={() => {
          handleRemoveCountry(name.common)
        }}>Remove Country</button>
      </div>
    </article>
  )
}

export default Country
