import React from 'react'

function placeOrder() {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem')) || "";
    const orderid=localStorage.getItem('orderid');
    return (
        <>
            <h2 className='text-center mt-5'>
                Order Placed Successfully
                <br />
                Order ID : {orderid}
           </h2>
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
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedItem.map((item, key) => {
              return (
                    <tr key={key}>
                    <td className="text-center"> {key + 1} </td>
                    <td className="text-center"> {item[0]}</td>
                    <td className="text-center"> {item[1]}</td>
                    </tr>
              );
            })}
          </tbody>
        </table>
       
      </div>
    </>
    )
}

export default placeOrder
