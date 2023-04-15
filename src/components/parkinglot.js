import React, { useState } from 'react';

const ParkingLot = () => {
  const [carno, setCarno] = useState("");
  const [data, setData] = useState(['23A', '23B']);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const plateRegex = /^[A-Z]{2}-[0-9]{2}-[A-Z]{2}-[0-9]{4}$/;
  const handleClick = () => {
    if (carno.length !== 0 && plateRegex.test(carno)) {
      setData(newData => [...newData, carno]);
      setCarno("");
    }
  };
  const handleDelete = (index) => {
    data.splice(index, 1);
    setData([...data]);
  }
  const handleEdit = (i) => {
    setCarno(data[i]);
    setShow(true);
    setEditIndex(i);
  }
  const handleUpdate = () => {
    data.splice(editIndex,1,carno);
    setData([...data]);
  }
  return (
    <div className="Container">
      <div className='Parkinglot'>
        <div className={`${data.length !== 0 ? 'ParkinglotNE' : 'EmtyP'}`}>
          <h1>Parking lot Empty</h1>
        </div>
        {data.map((val, i) =>
          <div>
            <div className='parking'>
              <div className='car-park'>{val}</div>
            </div>
            <div className='DLTbtn'>
            <i onClick={() => handleDelete(i)} class="fa fa-trash" aria-hidden="true"></i>
            <i onClick={() => handleEdit(i)} class="fa fa-pencil-square-o" aria-hidden="true"></i>
            {/* <button className='DLTbtn' onClick={() => handleDelete(i)}>Delete</button> */}
            </div>
          </div>
        )}
      </div>
      <div className='Parkinglot_detail'>
        <div>
          <h3>Parking Lot</h3>
        </div>
        <div>
          <input value={carno} onChange={(e) => setCarno(e.target.value)} />
          {!show ?<button onClick={handleClick}>Park</button> : <button onClick={handleUpdate}>UPDATE</button>}
        </div>
      </div>
    </div>
  );
}

export default ParkingLot