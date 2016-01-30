//business logic
function Pizza(size){
  this.size = size;
  this.toppings = [];
};
Pizza.prototype.pizzaTotal = function() {
  var basePrice = 5.50;
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
  return parseFloat((this.toppings.length * toppingPrice) + basePrice);
};
function Drink(name, size){
  this.name = name;
  this.size = size;
};
Drink.prototype.drinkTotal = function() {
  var price = 0.00;
  switch(this.drinkSize) {
    case "Small":
        price = 0.75;
        break;
    case "Medium":
        price = 1.00;
        break;
    case "Large":
         price = 1.25;
        break;
    default:
        price = 0;
        break;
   };
   return parseFloat(price);
};
function Order(deliveryType){
  this.pizzas = [];
  this.drinks = [];
  this.deliveryType = deliveryType;
};
Order.prototype.orderTotal = function() {
  var orderTotal = 0.00;
  for (var i = 0; i < this.pizzas.length; i++){
    var pizza = this.pizzas[i];
    orderTotal = (orderTotal + pizza.pizzaTotal());
  };
  for (var i = 0; i < this.drinks.length; i++){
    var drink = this.drinks[i];
    orderTotal = (orderTotal + drink.drinkTotal());
  };
  return parseFloat(orderTotal);
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

  var newDrinks = ["Cola", "Lemon Lime", "Root Beer", "Lemonade", "Fruit Punch", "Milk"];
  $("#drinksSelect").empty;
  $("#drinkSelect").append("<option></option>");
  for(var i=0; i < newDrinks.length; i++){
    $("#drinkSelect").append("<option>" + newDrinks[i] + "</option>");
  };
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var newPizzaSize = $("select#pizzaSizeSelect").val();
    newPizza = new Pizza(newPizzaSize);
    for(var i=0; i < newToppings.length; i++){
      var checkboxCheck = "input#" + newToppings[i];
      if($(checkboxCheck).prop('checked')){
        newPizza.push(newToppings[i]);
      };
    };
    var newDrinkselct = $("select#drinkSelect").val();
    var newDrinkSizeSelect = $("select#drinkSizeSelect").val();
    var newDrink = new Drink(newDrinkselct, newDrinkSizeSelect);
    var newOrder = new Order("To go");
    newOrder.pizzas.push(newPizza);
    newOrder.drinks.push(newDrink);

    $("ul#orderList").empty;
    for(var i=0; i<newOrder.pizzas.length; i++){
      var orderedPizza = newOrder.pizzas[i];
      var fullPizza = orderedPizza.size + " Pizza " + orderedPizza.pizzaTotal();
      $("ul#orderList").append("<li><span class='pizzaOrderdlist'>" + fullPizza +"</span></li>");
    };
    for(var i=0; i<newOrder.drinks.length; i++){
      var orderedDrinks = newOrder.drinks[i];
      if(orderedDrinks.drinkTotal() > 0){
        var fullDrinks = orderedDrinks.size + " " + orderedDrinks.name  + " " + orderedDrinks.drinkTotal();
        $("ul#orderList").append("<li><span class='drinksOrderdlist'>" + fullDrinks + "</span></li>");
      };
    };
    $("#orderTotal").text(newOrder.orderTotal());
    $("#showOrder").show();
  });
});
