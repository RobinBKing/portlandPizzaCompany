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
    expect(testOrder.orderTotal()).to.equal(20);
  });
});
describe('Pizza', function() {
  it("creates a new pizza with given properties", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.pizzaSize).to.equal("Large")
    expect(testPizza.toppings).to.eql([]);
  });
});