import React from 'react';
function Filter({productCount, filters={size:"ALL", price : null}, setFilters}){
    function handleChange(event){
        setFilters({...filters, [event.target.name]:event.target.value})
    }
    return (
        <>
        <div>{productCount} Products</div>
          <div>
              <label htmlFor="price">Price</label>
              <select onChange={handleChange} name="price" id="price">
                  <option value="latest">Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
              </select>
          </div>
          <div>
              <label htmlFor="size">Size</label>
              <select onChange={handleChange} name="size" id="size">
                  <option value="ALL">ALL</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
              </select>
          </div>
        </>
    )
}
export default Filter;