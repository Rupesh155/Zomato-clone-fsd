
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ViewFood.css'; // Import the CSS file
const ViewFood = () => {
  const navigate = useNavigate();
  const { restroId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function showProduct() {
      const restaurant = await axios.get(`http://localhost:4000/api/restro/${restroId}`);
      setRestaurant(restaurant.data)
      const product = await axios.get('http://localhost:4000/api/product');
      // setProducts(product.data)
      console.log(product, "rr");
      const filteredProducts = product.data.filter(p => p.restaurant === restroId);
      setProducts(filteredProducts);
    }
    showProduct()
  }, []);
  const handleplus = (id) => {
    let updatedProduct = [...products];
    updatedProduct[id].quantity = ((updatedProduct[id].quantity || 0) + 1);
    setProducts(updatedProduct);

    const productToAdd = { ...products[id] };
    setCart([...cart.filter(item => item._id !== productToAdd._id), productToAdd]);
    calculateTotalPrice();
  }

  const handleminus = (id) => {
    let updatedProduct = [...products];
    updatedProduct[id].quantity = Math.max(((updatedProduct[id].quantity || 0) - 1), 0);
    setProducts(updatedProduct);

    const productToRemove = { ...products[id] };
    setCart(cart.filter(item => item._id !== productToRemove._id));
    calculateTotalPrice();
  }

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce((acc, curr) => {
      return acc + (curr.price || 0) * (curr.quantity || 0);
    }, 0);
    setTotalPrice(totalPrice);
  };
  const addProductToCart = (id) => {
    let updatedProduct = [...products];
    updatedProduct[id].quantity = ((updatedProduct[id].quantity || 0) + 1);;
    setProducts(updatedProduct);

    const productToAdd = { ...products[id]};
    setCart([...cart, productToAdd]);
    calculateTotalPrice();

  }
  const viewCart = () => {
    navigate(`/viewCart/${restroId}`, { state: { cart,totalPrice,restaurant } });
  }
  const addProduct = () => {
    navigate(`/view/${restroId}/addproduct`)
  }
  return (
    <>

      <div id='parent' className=' '>

        <div className='button_cart mb-5'>
          <button onClick={addProduct}> add product</button>
          <button onClick={viewCart}>
            View Cart ({cart.length})
          </button>
        </div>
        <div>
          <img id='restroImage' src={restaurant.image} alt='Restaurant' />
          <h4>{restaurant.name}</h4>
        </div>
        <div className='row'>
          {products.map((data, id) => (
            <div key={id} id='product' className='col-lg-4'>
              <img id='productImage' src={data.image} alt='Product' />
              <div id='product_name'>
                <h2>{data.name}</h2>
                <h1>{data.price}</h1>
              </div>
              <div id='quanity_button'>  <p id='quantity'>Quantity: {data.quantity || 0}
              </p>
                {!data.quantity ? (
                  <button onClick={() => addProductToCart(id)}>Add</button>
                ) : (
                  <>
                    <button onClick={() => handleplus(id)}>+</button>
                    <button onClick={() => handleminus(id)}>-</button>
                  </>
                )}
              </div>
              <p>Total Price: {data.price * (data.quantity || 0)}</p>
            </div>
          ))}
        </div>
        {/* <p>Total Price of all products: {totalPrice}</p> */}
      </div>
    </>

  );
};

export default ViewFood;

