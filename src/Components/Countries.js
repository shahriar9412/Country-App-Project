import React from 'react'
import { v4 as uuidv4 } from 'uuid'
//component
import Country from './Country'
//css file
import style from './Countries.module.css'

const Countries = (props) => {
  //return function
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() }
        return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />
      })}
    </section>
  )
}

export default Countries
