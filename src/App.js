import React, { useState } from 'react';
import './App.css';
import ParkingLot from './components/parkinglot';

function App() {
  // const [name,setName] = useState('');
  // const [data, setData] = useState([]);
  // const [show, setShow] = useState(false);
  // const [editIndex, setEditIndex] = useState();

  // const handleAdd = () => {
  //   if(name.length !==0){
  //   setData(newdata => [...newdata,name]);
  //   setName("");
  // }    
  // }
  
  // const handleDelete = (index) => {
  //   data.splice(index, 1);
  //   setData([...data]);
  // }

  // const handleEdit = (i) => {
  //   setName(data[i]);
  //   setShow(true);
  //   setEditIndex(i);
  // }

  // const handleUpdate = () => {
  //   data.splice(editIndex,1,name);
  //   setData([...data]);
  // }
  return (
    <ParkingLot/>
    // <div className='container'>
    //   <input value={name} onChange={(e) => setName(e.target.value)}/>
    //   {!show ?<button onClick={handleAdd}>ADD</button> :
    //   <button onClick={handleUpdate}>UPDATE</button>}
    //   {
    //     data.map((val,i) =>
    //     <div>
    //       <h3>{val}</h3>
    //       <button onClick={() => handleEdit(i)}>EDIT</button>
    //       <button onClick={() => handleDelete(i)}>DELETE</button>
    //     </div>
    //     )
    //   }
    // </div>
  );
}

export default App;
