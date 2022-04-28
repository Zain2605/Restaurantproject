import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

export default function Menu() {
    const [menuitems, setmenuitems] = useState([]);
    
    
    

    useEffect(() => {
        axios
        .get("http://localhost:5000/menu")
        .then((res) => setmenuitems(res.data))
        .catch((error) => console.log(error));
    }, []);

    const [checkedState, setCheckedState] = useState(
        new Array(10).fill(false)
    );
    
    const placeOrderHandler = () => {
        let count = menuitems.length;
        let c = 0;
        let orderid=0
        const body = [];
        for (let i = 0;i<count ; ++i)
        {
            if (checkedState[i] === true)
            {
                c++;
                orderid=Math.floor((Math.random() * 1000) + 1);
                
                body.push([menuitems[i].Name, menuitems[i].Price]);
                // const orderid = require('order-id');
                // const id = orderid.generate();
                
            }
        }
        if (c === 0)
        {
            alert("Select at least one item ");
            return ; 
        }
        localStorage.setItem("orderid",orderid);
        localStorage.setItem("selectedItem", JSON.stringify(body));
        window.location.replace("http://localhost:3000/placeOrder");
        console.log(body);
        console.log(checkedState);
    };

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    
        
      };
    
    return (
    <>
      <div className="container mt-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center" scope="col">
                Sr.No
              </th>
              <th className="text-center" scope="col">
                Name
              </th>
              <th className="text-center" scope="col">
                Category
              </th>
              <th className="text-center" scope="col">
                Price
              </th>
              <th className="text-center" scope="col">
                Select
              </th>
            </tr>
          </thead>
          <tbody>
            {menuitems.map((item, key) => {
              return (
                <tr key={key}>
                  <td className="text-center"> {key + 1} </td>
                  <td className="text-center"> {item.Name}</td>
                  <td className="text-center">{item.Category}</td>
                  <td className="text-center">{item.Price}</td>
                  <td>
                    <div className="form-row">
                     
                      <div className="col">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${key}`}
                        
                        checked={checkedState[key]}
                        onChange={() => handleOnChange(key)}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-center">
          <button type="button" className="btn btn-primary w-50" onClick={placeOrderHandler}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
