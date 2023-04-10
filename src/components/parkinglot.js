import React, { useState } from 'react';

const ParkingLot = () => {
  const [carno, setCarno] = useState("");
  const [data, setData] = useState(['23A', '23B']);
  const handleClick = () => {
    if (carno.length !== 0) {
      setData(newData => [...newData, carno]);
      setCarno("");
    }
  };
  const handleDelete = (index) => {
    data.splice(index, 1);
    setData([...data]);
  }
  return (
    <div className="Container">
      <div className='Parkinglot'>
        <div className={`${data.length !== 0 ? 'ParkinglotNE' : 'EmtyP'}`}>
          <h1>Parking lot Empty</h1>
        </div>
        {data.map((val, i) =>
          <div className='parking'>
            <div className='car-park'>{val}</div>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        )}
      </div>
      <div className='Parkinglot_detail'>
        <div>
          <h3>Parking Lot</h3>
        </div>
        <div>
          <input value={carno} onChange={(e) => setCarno(e.target.value)} />
          <button onClick={handleClick}>Park</button>
        </div>
      </div>
    </div>
  );
}

export default ParkingLot