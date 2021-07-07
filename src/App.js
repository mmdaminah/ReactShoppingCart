import React from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import Products from './components/products/Products';
import Filter from './components/filter/filter'
import productsList from './components/data/productList';
import CartProduct from './components/cartproduct/cartproduct'
function App() {
  const [filters, setFilters] = useState({
    price:null,
    size:null
  })
  useEffect(()=>{
    if(filters.size!=='ALL'){
      setFilteredProducts(productsList.filter(item=>item.size===filters.size))
    }
    else
      setFilteredProducts(productsList)
  }, [filters.size])
  useEffect(()=>{
    if(filters.price!=='lowest'){
      setFilteredProducts(productsList.sort((a,b)=>a.price - b.price))
    }
    else if(filters.price=='highest'){
      setFilteredProducts(productsList.sort((a,b)=>b.price - a.price))
    }
    else{
      setFilteredProducts(productsList.sort((a,b)=>b.id - a.id))
    }
  }, [filters.price])
  const [filteredProducts, setFilteredProducts] = useState(productsList)
  function addProduct(){
    const newProduct = {
      id:1,
      title:"Midi sundress with shirring detail",
      price: 29.9,
      img:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg"
    }
    setFilteredProducts([...filteredProducts, newProduct])
  }
  function handleRemove(id){
    setFilteredProducts(filteredProducts.filter(item => item.id !== id))
  }
  const [cart, setCart] = useState([])
  function addToCart(product){
    let foundItem = cart.find((item)=> item.id === product.id)
    if(!foundItem){
      setCart([...cart, {...product, count:1}])
    }else{
      foundItem.count++
      setCart(cart.filter((item)=> item !=foundItem.id),foundItem)
    }
  }
  return (
    <div>
      <div className="header">
          <div>React Shopping Cart</div>
      </div> 
      <div className="main-container">
        <div className="filter-container">
          <Filter productCount={filteredProducts.length} filters={filters} setFilters={setFilters}/>
        </div>
        <div className="cart-container">
          <div>Cart is Empty</div>
        </div>
      </div>
      <button onClick={addProduct} className="">Click to add more!</button>
      <div className="body-container">
          <div className="products">
              {
                filteredProducts.map((item)=>(
                  <Products 
                    description= {item.title}
                    price={item.price}
                    imgSrc={item.img}
                    deleteItem={()=>handleRemove(item.id)}
                    addToCart={()=>addToCart(item)}
                  />
                ))
              }
          </div>
          <div className="cart">
          {
            cart.map((item)=>(
                  <CartProduct 
                    img={item.img}
                    price={item.price*item.count}
                  />
                ))
              }
          </div>
      </div>
    </div>
  );
}
export default App;