import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <p>class MumMboga {
  
    constructor() {
      this.products = [];
      this.carts = [];
      this.orders = [];
      this.customers  = [];
    }
    
    addProduct(productId,name,price,quantity){
      let product ={
      productId:productId,
      name:name,
      price:price,
      quantity:quantity
      }
    this.products.push(product);
    }
    
    
    getProducts(productId){
     for(var i=0;i<this.products.length;i++){
       let farm = this.products[i];
        if (product.productId===productId);
        {
          return product;
        }
      } 
   }
    
     removeProduct(productId){
      let product = this.getProduct(productId);
      let index = this.products.indexOf(product);
      this.products.splice(index,1);
    }
    
    updateProduct(productId,name,price,quantity){
      let product ={productId:productId,
      name:name,
      price:price,
      quantity:quantity
      }
      this.products.push(product);
    }
    getProductCatalog(){
      for(var i=0;i<this.carts.length;i++){
        let product=this.product[1];
        let productsCatalog={
          product:productname,
          quantity:productquantity,
  //       this.productCatalog.push(productsCatalog)
        
        }
        return(this.productCatalog)
      } 
      
    }
     
    addToCart(cartId,product,orderQuantity,customerId){
      let item ={
      cartId:cartId,
      product:product,
      orderQuantity:orderQuantity,
      customerId:customerId
      }
    this.carts.push(item);
    }
    getFromCart(productId){
     for(var i=0;i<this.carts.length;i++){
       let item = this.carts[i];
        if (item.productId===productId);
        {
          return item;
        }
      } 
   }
    
     removeFromCart(productId){
      let product= this.getProduct(productId);
      let index = this.carts.indexOf(product);
      this.carts.splice(index,1);
    }
    createOrder(orderId,cartId){
      let order= (orderId,
          cardId)
      this.orders.push(order)
      
    }
    cancelOrder(orderId){}
    calculateOrderCost(){}
    getOrder(orderId){
       for(var i=0;i<this.customers.length;i++){
       let orders= this.orders[i];
      if (orders.ordersId===ordersId);
        
          return orders;
        }
    }
    
     addCustomer(customerId,name,email,address){
      let customer ={
      customerId:customerId,
      name:name,
      email:email,
      address:address
      }
   this.customers.push(customer);
  }
     
    getCustomer(customerId){
     for(var i=0;i<this.customers.length;i++){
       let customer = this.customers[i];
        if (customer.customerId===customerId);
        {
          return customer;
        }
      } 
   }
    removeCustomer(customerId){
      let customer = this.getCustomer(customerId);
      let index = this.customers.indexOf(customer);
      this.customers.splice(index,1);
    }
    updateCustomer(customerId,name,email,address){
      let customer2 ={
      customerId:customerId,
      name:name,
      email:email,
      address:address
      }
      this.customers.push(customer2);
    } 
    
  }
  var brocolli = new MumMboga();
  brocolli.addProduct(23,"brocolli","150",3);
  brocolli.addProduct(22,"cucumber","15",7);
  
  console.log(brocolli.products);
  
  
  var tomatoe = new MumMboga();
  tomatoe.updateProduct(10,"tomatoe","50",6);
  tomatoe.updateProduct(10,"pepper","50",3);
  console.log(tomatoe.products);
  
  
  var kiwi = new MumMboga();
  kiwi.addToCart(14,"kiwi",34,37);
  console.log(kiwi.carts);
  
  var customer = new MumMboga();
  customer.addCustomer(254,"Sheliza","Sheliza@hotmail.com",147);
  console.log(customer.customers);
  
  var customer= new MumMboga();
  customer.addCustomer(256,"starr","njambi@hotmail.com",144);
  console.log(customer.customers);
              
  </p>
       document.getElementByclassName('mama_mboga'
    );
    </script> 
   </body>
  </html>
  

  </h1>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();