import React, { useEffect, useRef, useState } from "react";
import './Portfolio.scss'
import Card from "../Card/Card";

import Isotope from 'isotope-layout';


// const cardsDefault = [
//   {
//     id: "a",
//     filter: ["ui"]
//   },
//   {
//     id: "b",
//     filter: ["ui"]
//   },
//   {
//     id: "c",
//     filter: ["js"]
//   },
//   {
//     id: "d",
//     filter: ["js"]
//   }
// ];

// const filtersDefault = [
//   { label: "all", isChecked: true },
//   { label: "ui", isChecked: false },
//   { label: "js", isChecked: false },
//   ];

//  function Portfolio() {
//   const [filters, updateFilters] = useState(filtersDefault);


  

//   const onFilter = event => {
//     const {
//       target: { value, checked }
//     } = event;

//     updateFilters(state =>
//       state.map(f => {
//         if (f.label === value) {
//           return {
//             ...f,
//             isChecked: checked
//           };
//         }

//         return f;
//       })
//     );
//   };

//   return (
//     <div className='portfolio'>
      
     
//         {filters.map(f => (
//          <>
//             <input
//               id={f.label}
//               type="checkbox"
//               name="filter"
//               value={f.label}
//               onChange={onFilter}
//               checked={f.isChecked}
//             />
//             <label htmlFor={f.label}>{f.label}</label>
//            </>
          
//         ))}
//       <div>
//        <IsoTopeGrid 
//           gridLayout={cardsDefault}
//           noOfCols={4}
//           unitWidth={308}
//           unitHeight={190}
//           filters={filters}
//         >
//           {cardsDefault.map(card => (
//             <div key={card.id}>
//               <Card type={card.filter[0]}/>
//             </div>
//           ))}
//         </IsoTopeGrid> 
//       </div>

     
      
     
        
     
//     </div>
//   );
// }

const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*')

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <>
      <ul className='filter__list'>
        <li onClick={handleFilterKeyChange('*')}>All</li>
        <li onClick={handleFilterKeyChange('js')}>JS</li>
        <li onClick={handleFilterKeyChange('ui')}>UI</li>
      </ul>
    
      <ul className="filter-container">
        <div className="filter-item js">
         <Card type='js'/>
        </div>
        <div className="filter-item ui">
        <Card type='ui'/>
        </div>
        <div className="filter-item js">
         <Card type='js'/>
        </div>
        <div className="filter-item ui">
        <Card type='ui'/>
        </div>
      </ul>
    </>
  )
}

 export default Portfolio;
