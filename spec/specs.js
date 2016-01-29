/* global expect */
describe('Orders', function() {
  it("creates a new order with given properties", function() {
    var testOrder = new Order("To go");
    expect(testOrder.pizzas).to.eql([]);  
    expect(testOrder.drinks).to.eql([]);        
    expect(testOrder.deliveryType).to.equal("To go");
  });
  it("adds the Order total method to Order", function() {
    var testOrder = new Order("To go");
    expect(testOrder.orderTotal()).to.equal(0);
  });
});
describe('Pizza', function() {
  it("creates a new pizza with given properties", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.equal("large")
    expect(testPizza.toppings).to.eql([]);
  });
  it("adds the pizza total method to Pizza", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.pizzaTotal()).to.equal(5);
  });
});
describe('Drink', function() {
  it("creates a new Drink with given properties", function() {
    var testDrink = new Drink("Root Beer", "medium");
    expect(testDrink.name).to.equal("Root Beer");
    expect(testDrink.size).to.equal("medium");
  });
  it("adds the Drink total method to Drink", function() {
    var testDrink = new Drink("Root Beer", "medium");
    expect(testDrink.drinkTotal()).to.equal(0);
  });
});