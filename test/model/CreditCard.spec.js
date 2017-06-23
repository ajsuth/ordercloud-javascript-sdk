/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.CreditCard();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreditCard', function() {
    it('should create an instance of CreditCard', function() {
      // uncomment below and update the code to test CreditCard
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be.a(OrderCloud.CreditCard);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "Token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "DateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property cardType (base name: "CardType")', function() {
      // uncomment below and update the code to test the property cardType
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property partialAccountNumber (base name: "PartialAccountNumber")', function() {
      // uncomment below and update the code to test the property partialAccountNumber
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property cardholderName (base name: "CardholderName")', function() {
      // uncomment below and update the code to test the property cardholderName
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "ExpirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instane = new OrderCloud.CreditCard();
      //expect(instance).to.be();
    });

  });

}));
