import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AirlinesForm() {
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({
            type: "AIRLINE_ADD",
            payload: newAirline
        })
        setNewAirline('');
    }
    const [newAirline, setNewAirline] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={newAirline} 
                onChange={event => setNewAirline(event.target.value)} 
                placeholder="Enter airline name" 
            />
            <button type="submit">Add Airline</button>
        </form>
    );
}


export default AirlinesForm;