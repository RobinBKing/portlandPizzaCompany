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
    case "Small":
      break;
    case "Medium":
      toppingPrice = toppingPrice * 2;
      break;
    case "Large":
      toppingPrice = toppingPrice * 3;
      break;
    case "XLSarge":
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
    case "Small":
        price = .75;
        break;
    case "Medium":
        price = 1.00;
        break;        break;
    case "Large":
         price = 1.25;
        break;
    default:
        price = 0;
        break;
   };
   return price;
};
//interface
$(document).ready(function() {
  var newToppings = ["Pepperoni","Sausage","Beef","Chicken","Onions","Green Peppers","Black Olives","Mushrooms","Tomatos","Garlic","Peppers","Extra Cheese"];

  $("#toppingsCheck").empty;
  for(var i=0; i < newToppings.length; i++){
    $("#toppingsCheck").append("<div class='form-group;>" +
                                 "<div class='checkbox'>" +
                                   "<label><input type='checkbox' value='" + newToppings[i] + "'> " + newToppings[i] + "</label>" +
                                 "</div>" +
                               "</div>");
  };

  var newDrinks = ["Select a drink", "Cola", "Lemon Lime", "Root Beer", "Lemonade", "Fruit Punch", "Milk"];
  $("#drinksSelect").empty;
  for(var i=0; i < newDrinks.length; i++){
    $("#drinkSelect").append("<option>" + newDrinks[i] + "</option>");
  };
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
  });
});
