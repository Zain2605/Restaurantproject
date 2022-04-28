import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        const body = [];
        for (let i = 0;i<count ; ++i)
        {
            if (checkedState[i] == true)
            {
                c++;
                body.push(menuitems[i].Name);
                
            }
        }
        if (c === 0)
        {
            alert("Select at least one item ");
            return ; 
        }
        
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
                    <div class="form-row">
                     
                      <div class="col">
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
          <button type="button" class="btn btn-primary w-50" onClick={placeOrderHandler}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
