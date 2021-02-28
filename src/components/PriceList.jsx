import React from "react";

const PriceList = props => {
  const { productList } = props;
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <h1 className="font-weight-light">Price List</h1>

        {productList.map((product, index) => (
          <div className="col-lg-6" key={index}>
            <div className="card">
              <h5 className="card-header">{product.productName}</h5>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Number of items</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.priceList.map((x, index2) => (
                      <tr key={index2}>
                        <th scope="row">{x.numberOfUnits}</th>
                        <td>{x.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
