import React from 'react';
import WebView from "react-native-webview";

const ItemDetailScreen = (props) => {

    let { name, price, description, manufacturer, Image } = props.route.params.item

    const view = `
    <html>
    <head>
   
    <style>
    /* Basic Styling */
    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }
     
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px;
      display: flex;
    }

    /* Columns */
.left-column {
  width: 65%;
  position: relative;
  margin-top: 60px;
}
 
.right-column {
  width: 35%;
  margin-top: 60px;
}

/* Left Column */
.left-column img {
  width: 80%;
  position: absolute;
  left: 50;
  top: 0;

}

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}
.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 30px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  margin-top: 20px;
  transition: all .5s;
}

</style>
    </head>

    <body>

	
    <main class="container">
 
    <!-- Left Column / Headphones Image -->
    <div class="left-column">
    <img src=${Image} alt=${name}>
    </div>
   
   
    <!-- Right Column -->
    <div class="right-column">
   
      <!-- Product Description -->
      <div class="product-description">
        <h1>${name}</h1>
        <p>${description}</p>
      </div>
   
      <!-- Product Configuration -->
      <div class="product-configuration">
   
        <!-- Product Color -->
        <div class="product-color">
          <span>${manufacturer}</span>
  
        </div>
      </div>
   
      <!-- Product Pricing -->
      <div class="product-price">
        
        <a href="#" class="cart-btn">$${price}</a>
      </div>
    </div>
  </main>
  
  </body>
    </html>
    `

    return (
        <WebView
            source={{ html: view }}
            onLoad={console.log()}
        />
    )
}

export default ItemDetailScreen