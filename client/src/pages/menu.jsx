import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Menu() {
    const[menuitems,setmenuitems]=useState([]);
  
    useEffect( () =>{
    
        axios.get("http://localhost:5000/menu")
             .then(res =>setmenuitems(res.data))
       .catch(error => console.log(error))
     
    });
    
    
        let [num, setNum] = useState(0);
        let incNum = () => {
            if (num < 10) {
                setNum(Number(num) + 1);
            }
        };
        let decNum = () => {
            if (num > 0) {
                setNum(num - 1);
            }
        }
        let handleChange = (e) => {
            setNum(e.target.value);
        }
      
    

  return (
    <>
      <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          
          {menuitems.map((item,key)=>{
            return(
            
                <tr key={key}>
                
                    <td> {key + 1} </td>
                    <td> {item.Name}</td>
                    <td>{item.Category}</td>
                    <td>{item.Price}</td>
                    <td>
                        <div className="d-flex row">
                            
                        
                            <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                        
                        <input type="text" class="form-control" value={num} onChange={handleChange}/>
                        
                        <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                        
                        </div>
                    
                    
                    </td>
                </tr> 
            
              
          )})}
           
          
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
      </div>
    </>
  );
}
