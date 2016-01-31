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
    var testPizza = new Pizza("Large");
    expect(testPizza.size).to.equal("Large")
    expect(testPizza.toppings).to.eql([]);
  });
  it("adds the pizza total method to Pizza", function() {
    var testPizza = new Pizza("Large");
    testPizza.toppings.push("peperoni");
    testPizza.toppings.push("sausage");
    expect(testPizza.pizzaTotal()).to.equal(11.5);
  });
  it("add concatinates all the toppings of the .topping array of Pizza", function() {
    var testPizza = new Pizza("Large");
    testPizza.toppings.push("peperoni");
    testPizza.toppings.push("sausage");
    testPizza.toppings.push("Extra cheese");
    expect(testPizza.fullPizza()).to.equal("Large peperoni, sausage, Extra cheese pizza $14.50");
  });
});
describe('Drink', function() {
  it("creates a new Drink with given properties", function() {
    var testDrink = new Drink("Root Beer", "Medium");
    expect(testDrink.name).to.equal("Root Beer");
    expect(testDrink.size).to.equal("Medium");
  });
  it("adds the Drink total method to Drink", function() {
    var testDrink = new Drink("Root Beer", "Medium");
    expect(testDrink.drinkTotal()).to.equal(1);
  });
  it("add concatinates the dring and size of Drink", function() {
    var testDrink = new Drink("Root Beer", "Medium");
    expect(testDrink.fullDrink()).to.equal("Medium Root Beer $1.00");
  });
});
