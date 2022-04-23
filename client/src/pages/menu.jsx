import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [menuitems, setmenuitems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/menu")
      .then((res) => setmenuitems(res.data))
      .catch((error) => console.log(error));
  }, []);

  // let [num, setNum] = useState(0);
  // let incNum = () => {
  //     if (num < 10) {
  //         setNum(Number(num) + 1);
  //     }
  // };
  // let decNum = () => {
  //     if (num > 0) {
  //         setNum(num - 1);
  //     }
  // }
  // let handleChange = (e) => {
  //     setNum(e.target.value);
  // }

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
                Quantity
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
                    {/* <div className="d-flex row"> */}

                    {/* <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                        
                        <input type="text" class="form-control" value={num} onChange={handleChange}/>
                        
                        
                        <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button> */}
                    {/* <div className="text-center">
                        <button type="button" class="btn btn-primary w-50 ">Add to cart</button>
                        </div> */}

                    {/* </div> */}
                    {/* <div class="form-group text-center">
                      <label for="exampleFormControlSelect1">
                        
                      </label>
                      <select
                        class=" custom-select"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div> */}

                    <div class="form-row">
                      {/* <div class="col-7">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="City"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="State"
                        />
                      </div> */}
                      <div class="col">
                        <input
                          type="number"
                          min='0'
                          class="form-control"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}

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
        <div className="text-center">
          <button type="button" class="btn btn-primary w-50 ">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
