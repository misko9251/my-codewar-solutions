// DESCRIPTION:
// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

function discoverOriginalPrice(discountedPrice, salePercentage){
    return +(discountedPrice/((100-salePercentage))*100).toFixed(2)
  }