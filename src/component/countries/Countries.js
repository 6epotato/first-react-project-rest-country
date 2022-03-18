import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountry] = useState([])

    useEffect(() =>
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
        , [])
    return (
        <div>
            <h1>All Countries From World</h1>
            <h3>Country Count : {countries.length}</h3>

            <div className='country-container'>
                {
                    countries.map(country => <Country country={country}>

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries; 