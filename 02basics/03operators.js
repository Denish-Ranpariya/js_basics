// discount = ((listing price - selling price) / listing price) * 100

var listingPrice = 799;
var sellingPrice = 199;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log('Discount percentage is: ' + discountPercentage);

var displayDiscountPercentage = Math.round(discountPercentage);

console.log('Display discount percentage is:' + displayDiscountPercentage);