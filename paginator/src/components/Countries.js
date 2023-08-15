import React from "react";

const Countries = ({ countries, loading, search, target }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <div className='text-center mb-3 mt-3'>
                <input
                    type='text'
                    onChange={(e) => search(e.target.value)}
                    placeholder='Поиск'
                />
            </div>
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
                        countries.filter((country) => {
                            return target.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(target);
                        })
                            .map((country) => (
                                <tr key={country.id}>
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
        </div>
    )
}

export default Countries