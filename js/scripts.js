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
    orderTotal += pizza.pizzaTotal();
  };
  for (var i = 0; i < this.drinks.length; i++){
    var drink = this.drinks[i];
    orderTotal += drink.drinkTotal();
  };
  return parseFloat(orderTotal);
};
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
Pizza.prototype.fullPizza = function() {
  if (this.toppings.length > 0) {
    var allToppings = this.size + " " + this.toppings[0];
    for (var i = 1; i < this.toppings.length; i++){
      allToppings = allToppings + ", " +  this.toppings[i];
    };
    return allToppings.replace(/_/g," ") + " pizza $" + this.pizzaTotal().toFixed(2);
  }
  else {
    return "";
  };
}
function Drink(name, size){
  this.name = name;
  this.size = size;
};
Drink.prototype.drinkTotal = function() {
  var price = 0;
  switch(this.size) {
    case "Small":
        price = 0.75;
        break;
    case "Medium":
        price = 1;
        break;
    case "Large":
         price = 1.25;
        break;
    default:
        break;
   };
   return parseFloat(price);
};
Drink.prototype.fullDrink = function() {
  return this.size + " " + this.name + " $" + this.drinkTotal().toFixed(2);
};
//interface
$(document).ready(function() {
  var listToppings = ["Pepperoni","Sausage","Beef","Chicken","Onions","Green_Peppers","Black_Olives","Mushrooms","Tomatos","Garlic","Jalapenos","Extra_Cheese"];
  $("#toppingsCheck").empty();
  for(var i=0; i < listToppings.length; i++){
    $("#toppingsCheck").append("<div class='form-group;>" +
                                 "<div class='checkbox'>" +
                                   "<label><input type='checkbox' id='" + listToppings[i] + "'> " + listToppings[i].replace(/_/g," ") + "</label>" +
                                 "</div>" +
                               "</div>");
  };
  var listDrinks = ["Cola", "Lemon Lime", "Root Beer", "Lemonade", "Fruit Punch", "Milk"];
  $("#drinksSelect").empty();
  $("#drinkSelect").append("<option></option>");
  for(var i=0; i < listDrinks.length; i++){
    $("#drinkSelect").append("<option>" + listDrinks[i] + "</option>");
  };
  var newOrder = new Order("To go");
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var newPizzaSize = $("select#pizzaSizeSelect").val();
    newPizza = new Pizza(newPizzaSize);
    for(var i=0; i < listToppings.length; i++){
      var checkboxCheck = "input#" + listToppings[i];
      if($(checkboxCheck).prop('checked') === true){
        newPizza.toppings.push(listToppings[i]);
      };
    };
    var newDrinkSizeSelect = $("select#drinkSizeSelect").val();
    var newDrinkselect = $("select#drinkSelect").val();
    var newDrink = new Drink(newDrinkselect, newDrinkSizeSelect);
    if(newPizza.size){
      newOrder.pizzas.push(newPizza);
    };
    if(newDrink.name){
      newOrder.drinks.push(newDrink);
    };
    $("ul#orderList").empty();
    for(var i = 0; i < newOrder.pizzas.length; i++){
      var newOrderPizza = newOrder.pizzas[i];
        if(newOrderPizza.pizzaTotal() > 0){
          $("ul#orderList").append("<li>" + newOrderPizza.fullPizza() +"</li>");
        };
    };
    for(var i=0; i<newOrder.drinks.length; i++){
      var newOrderDrink = newOrder.drinks[i];
      if(newOrderDrink.drinkTotal() > 0){
        $("ul#orderList").append("<li>" + newOrderDrink.fullDrink() + "</li>");
      };
    };
    $("#orderTotal").text("$" + newOrder.orderTotal().toFixed(2));
    $("#showOrder").show();
    $('#pizzaForm').trigger("reset");
  });
});
