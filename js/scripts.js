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
    orderTotal = (orderTotal + pizza.price);
  };
  for (var i = 0; i < this.drinks.length; i++){
    var drink = this.drings[i];
    orderTotal = (orderTotal + drink.price);
  };
  return orderTotal;
};
function Pizza(pizzaSize){
  this.pizzaSize = pizzaSize;
  this.toppings = [];
};
Pizza.prototype.pizzaTotal = function() {
  var defaultPrice = 5;
  var sizeInt;
  switch(this.pizzaSize) {
    case "small":
        sizeInt = 0;
        break;
    case "medium":
        sizeInt = 1;
        break;        break;
    case "large":
        sizeInt = 2;
        break;
    case "Xlarge":
        sizeInt = 3;
        break;
    default:
        sizeInt = 0;
        break;
   };
   return (this.toppings.length * defaultPrice) * sizeInt 
};
function Drink(name, size){
  this.name = name;
  this.size = size;
};
//interface
// $(document).ready(function() {
// });
