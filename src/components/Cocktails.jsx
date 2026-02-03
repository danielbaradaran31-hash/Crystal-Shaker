import React from 'react'
import { cocktailLists, mockTailLists } from '../../constanc'

const Cocktails = () => {
  return (
    <section id='cocktails' className='noisy'>
        <img 
        src='/public/images/cocktail-left-leaf.png' alt='c-left-leaf' />
        <img 
        src='/public/images/cocktail-right-leaf.png' alt='c-right-leaf' />

        <div className='list'>
            <div className='popular'>
                <h2>Popular Cocktails:</h2>
               <ul>
                {cocktailLists.map(({name, country, detail, price }) => (
                   <li key={name}>
                    <div className='md:me-28'>
                        <h3>{name}</h3>
                        <p>{country}| {detail}</p>
                    </div>
                    <span>{price}</span>
                   </li>
                ))} 
               </ul>
            </div>

            <div className='loved'>
                <h2>Most loved mocktails:</h2>
               <ul>
                {mockTailLists.map(({name, country, detail, price }) => (
                   <li key={name}>
                    <div className='me-28'>
                        <h3>{name}</h3>
                        <p>{country}| {detail}</p>
                    </div>
                    <span>{price}</span>
                   </li>
                ))} 
               </ul>
            </div>
            </div>
      
    </section>
  )
}

export default Cocktails