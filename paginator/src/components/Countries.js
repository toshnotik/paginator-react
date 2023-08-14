import React from "react";

const Countries = ({ countries, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <table className="table">
            <thead className="table-info">
                <tr>
                    <th>Страна</th>
                    <th>Столица</th>
                    <th>Флаг</th>
                    <th>Регион</th>
                    <th>Подрегион</th>
                </tr>
            </thead>
            <tbody className="table-striped">
                    {
                        countries.map((country, i) => (
                            <tr>
                                <th>
                                    {country.name.common}
                                    
                                </th>
                                <td>
                                    {country.capital}
                                </td>
                                <td>
                                    <img src={country.flags.png} alt={(country.name)} style={{ width: 50 }} />
                                </td>
                                <td>
                                    {country.region}
                                </td>
                                <td>
                                    {country.subregion}
                                </td>
                            </tr>                            
                        ))
                    }
            </tbody>
        </table>
    )
}

export default Countries