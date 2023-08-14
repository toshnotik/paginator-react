import React from "react";

const Countries = ({ countries, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group mb-2">
            {
                countries.map((country, i) => (
                    <li className="list-group-item">
                        {country.name}
                        <img src={country.flag} alt="Флаг" className="ml-2" style={{width:50}} />
                    </li>
                ))
            }
        </ul>
    )
}

export default Countries