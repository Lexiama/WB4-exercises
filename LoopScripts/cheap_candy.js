let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
]; 
    

   // Which candies costs less than $4.00?
   var cheapCandy = [];

   for (let i = 0; i < products.length; i++) {
       if (products[i].price < 4.00) {
           cheapCandy.push(products[i]);
       }
    }
       for (let i = 0; i < cheapCandy.length; i++) {
           console.log(cheapCandy[i].product);
       }



 //Which candies has "M&M" its name?
   var mAndM = [];
   for (let i = 0; i < products.length; i++) {
    if (products[i].product.includes("M&M")) {
        mAndM.push(products[i]);
    }
}

   for (let i = 0; i < mAndM.length; i++) { 
        console.log(mAndM[i].product);
   }

// Do we carry "Swedish Fish"?

var swedishFish = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].product.includes("Swedish Fish")) {
        swedishFish.push(products[i]);
    }
}

if (swedishFish.length > 0) {
    console.log("Yes, we carry Swedish Fish.");
} else {
    console.log("No, we do not carry Swedish Fish.");
}
