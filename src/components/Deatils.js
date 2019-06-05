import React, { Component } from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom'; 
import {ButtonContainer} from './Button'

export default class Deatils extends Component {
  render() {
    return (
      <ProductConsumer>
         {(value)=>{
           const {id,company,price,img,info,title,inCart} = value.detailProduct

           return(
             <div className='container py-5'>
              {/* title start */}
                <div className='row'>
                   <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                      <h1>{title}</h1>
                   </div>
                </div>
              {/* end of title */}
              {/* product info*/}
                <div className='row'>
                   <div className='col-10 mx-auto lol-md-6 my-3 text-capitalize'>
                     <img src={img} className='img-fluid' alt='product'/>
                   </div>
                   {/* product text*/}
                   <div className='col-10 mx-auto lol-md-6 my-3 text-capitalize'>
                     <h1> model : {title} </h1>
                     <h4 className='text-title text-upercase text-muted mt-3 mb-2'>
                      made by : <span className='text-upercase'>
                         {company} </span> 
                      </h4>
                      <h4 className='text-blue' >
                         <strong>
                           price : <span>$</span> {price}      
                         </strong>
                      </h4>
                      <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                         product information:
                           </p>
                         <p className='text-muted lead'> 
                          {info}
                          </p> 
                       <div>
                        <Link to='/'>
                          <ButtonContainer> 
                            back to products
                          </ButtonContainer>
                           </Link>

                          <ButtonContainer
                          cart 
                          disabled={inCart ? true : false}
                          onClick={()=>{
                            value.addToCart(id);
                            value.addToCart(id);
                          }}
                          >
                            {inCart ? 'inCart' : 'add to card'}
                          </ButtonContainer>
                      </div>
                   </div>
                </div>
              {/* end of product info */}
             </div>
           )
         }}
      </ProductConsumer>
    );
  }
}
