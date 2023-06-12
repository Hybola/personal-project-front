
export default function Bill() {
  return (
    <div>
      <div className="col-lg-4">
        <div style={{ display: "none" }}>
          <ComponentToPrint
            cart={cart}
            totalAmount={totalAmount}
            ref={componentRef}
          />
        </div>
        <div className="table-responsive bg-dark">
          <table className="table table-responsive table-dark table-hover">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cart
                ? cart.map((cartProduct, key) => (
                    <tr key={key}>
                      <td>{cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{cartProduct.totalAmount}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeProduct(cartProduct)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                : "No Item in Cart"}
            </tbody>
          </table>
          <h2 className="px-2 text-white">Total Amount: ${totalAmount}</h2>
        </div>

        <div className="mt-3">
          {totalAmount !== 0 ? (
            <div>
              <button className="btn btn-primary" onClick={handlePrint}>
                Pay Now
              </button>
            </div>
          ) : (
            "Please add a product to the cart"
          )}
        </div>
      </div>
    </div>
  );
}
