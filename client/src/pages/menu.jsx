import React from "react";

export default function menu({menuitems}) {
  return (
    <>
      <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          
          {menuitems.map((item,key)=>{
            return(
            <div>
                <tr key={key}>
                  <td> {key + 1} </td>
                  <td> {item.Name}</td>
                  <td>{item.Category}</td>
                  <td>{item.Price}</td>
                </tr> 
            </div>
              
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
