import React, {useState} from 'react'

export default function Bid() {
    const [bid, setBid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bid)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Bid:</label>
            <input className="bid-input" type="number" value={bid} required onChange={(e) => setBid(e.target.valueAsNumber)}/>
            <input className="bid-btn" type="submit" value="add bid" />
        </form>
    )
}