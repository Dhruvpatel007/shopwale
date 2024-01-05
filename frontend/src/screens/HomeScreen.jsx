// import React, { useState, useEffect} from 'react'
// import axios from 'axios'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { useGetProductsQuery } from '../slices/productApiSlice'


const HomeScreen = () => {

  // const [products, setProducts] = useState([]);

  // useEffect(()=>{
   
  //   const fetchProduct =async ()=>{
  //      const {data} = await axios.get('/api/products');
  //     //  console.log(data);
  //      setProducts(data);
  //   }
  //   fetchProduct();
  // }, []);
  const {data: products, isLoading, error} = useGetProductsQuery();
  // if (isLoading) return <h1>Loading...</h1>
  // console.log(products);

  return (
    <>
    {isLoading ? (<Loader />): error? (<Message verient='danger'>{error?.data?.message || error.error}</Message>) : (<>
    <h1>Latest Product</h1>
    <Row>
      {products.map((product)=>{
        return(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
         </Col>
        )
      })}
    </Row>
    </>)}
    </>

  )
}

export default HomeScreen