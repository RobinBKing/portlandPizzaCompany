//business logic
function Order(deliveryType){
  this.pizzas = [];
  this.drinks = [];
  this.deliveryType = deliveryType;
};
Order.prototype.orderTotal = function() {
  var orderTotal = 20;
  for (var i = 0; i < this.pizzas.length; i++){
    var pizza = this.pizzas[i];
    orderTotal = (orderTotal + pizza.price);
  }
  
  for (var i = 0; i < this.drinks.length; i++){
    var drink = this.drings[i];
    orderTotal = (orderTotal + drink.price);
  }

  return orderTotal;
};
//interface
// $(document).ready(function() {
// });
