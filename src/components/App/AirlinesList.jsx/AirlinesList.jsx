import React from 'react';
import { useSelector } from 'react-redux';

function AirlinesList() {
    const airlinesList = useSelector(store => store.airlinesList) ?? [];

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Airline Name</th>
                </tr>
            </thead>
            <tbody>
                {airlinesList.map((airline, index) => (
                    <tr key={index}>
                        <td>{airline}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );

}

export default AirlinesList