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
    instance = new OrderCloud.Shipment();
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

  describe('Shipment', function() {
    it('should create an instance of Shipment', function() {
      // uncomment below and update the code to test Shipment
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be.a(OrderCloud.Shipment);
    });

    it('should have the property buyerID (base name: "BuyerID")', function() {
      // uncomment below and update the code to test the property buyerID
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property shipper (base name: "Shipper")', function() {
      // uncomment below and update the code to test the property shipper
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property dateShipped (base name: "DateShipped")', function() {
      // uncomment below and update the code to test the property dateShipped
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property dateDelivered (base name: "DateDelivered")', function() {
      // uncomment below and update the code to test the property dateDelivered
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "TrackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "Cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "Account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property fromAddressID (base name: "FromAddressID")', function() {
      // uncomment below and update the code to test the property fromAddressID
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property toAddressID (base name: "ToAddressID")', function() {
      // uncomment below and update the code to test the property toAddressID
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property fromAddress (base name: "FromAddress")', function() {
      // uncomment below and update the code to test the property fromAddress
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property toAddress (base name: "ToAddress")', function() {
      // uncomment below and update the code to test the property toAddress
      //var instane = new OrderCloud.Shipment();
      //expect(instance).to.be();
    });

  });

}));
