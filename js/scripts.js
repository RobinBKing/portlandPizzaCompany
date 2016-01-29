//business logic
function Order(deliveryType){
  this.pizzas = [];
  this.drinks = [];
  this.deliveryType = deliveryType;
};
Order.prototype.orderTotal = function() {
  var orderTotal = 0;
  for (var i = 0; i < this.pizzas.length; i++){
    var pizza = this.pizzas[i];
    orderTotal = (orderTotal + pizza.price());
  };
  for (var i = 0; i < this.drinks.length; i++){
    var drink = this.drinks[i];
    orderTotal = (orderTotal + drink.price());
  };
  return orderTotal;
};
function Pizza(size){
  this.size = size;
  this.toppings = [];
};
Pizza.prototype.pizzaTotal = function() {
  var basePrice = 5.00;
  var toppingPrice = 1.00;
  switch(this.size) {
    case "small":
      break;
    case "medium":
      toppingPrice = toppingPrice * 2;
      break;
    case "large":
      toppingPrice = toppingPrice * 3;
      break;
    case "Xlarge":
      toppingPrice = toppingPrice * 4;
      break;
    default:
      break;
  };
  return (this.toppings.length * toppingPrice) + basePrice;
};
function Drink(name, size){
  this.name = name;
  this.size = size;
};
Drink.prototype.drinkTotal = function() {
  var price = 0;
  switch(this.drinkSize) {
    case "small":
        price = .75;
        break;
    case "medium":
        price = 1.00;
        break;        break;
    case "large":
         price = 1.25;
        break;
    default:
        price = 0;
        break;
   };
   return price;
};
//interface
// $(document).ready(function() {
// });
