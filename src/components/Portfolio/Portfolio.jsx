import React, { useEffect, useRef, useState } from "react";
import './Portfolio.scss'
import Card from "../Card/Card";
import Isotope from 'isotope-layout';
import Article from "../Article/Article";

const Portfolio = () => {
 
  const isotope = useRef()
    const [filterKey, setFilterKey] = React.useState('*')

    useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.portfolio__card',
      layoutMode: 'fitRows',
    })
      return () => isotope.current.destroy()
  }, [])

    useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)
console.log(filterKey)
  return (
    <>
      <div className='filter'>
        <div>
        <input type='radio' name='portfolio' id='filterAll' className='filter__item' value="*"  checked={filterKey === '*'} onChange={handleFilterKeyChange('*')}/>
        <label htmlFor="filterAll">All</label>
        </div>
        <div>
        <input type='radio' name='portfolio' id='filterUI' className='filter__item' value="ui" checked={filterKey === 'ui'} onChange={handleFilterKeyChange('ui')}/>
        <label htmlFor="filterUI">UI</label>
        </div>
        <div>
        <input type='radio' name='portfolio' id='filterCode' className='filter__item' value="code" checked={filterKey === 'code'} onChange={handleFilterKeyChange('code')}/>
        <label htmlFor="filterCode">Code</label>
        </div>
    </div>
     
    <div className="filter-container">
                <Card type='code'/>
                <Card type='ui'/>
                <Card type='code'/>
                <Card type='ui'/>
        
        
      </div>    </>
  )
}

 export default Portfolio;
