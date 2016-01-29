/* global expect */
describe('Orders', function() {
  it("creates a new order with given properties", function() {
    var testOrder = new Order("To go");
    expect(testOrder.pizzas).to.eql([]);  
    expect(testOrder.drinks).to.eql([]);        
    expect(testOrder.deliveryType).to.equal("To go");
  });
  // it("adds the fullMovie method to all movies", function() {
  //    var testOrder = new Order("To go");
  //   expect(testOrder.orderTotal()).to.equal("$20");
  // });

});
