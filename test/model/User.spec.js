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
    instance = new OrderCloud.User();
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

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instane = new OrderCloud.User();
      //expect(instance).to.be.a(OrderCloud.User);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "Username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "Password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "Phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property termsAccepted (base name: "TermsAccepted")', function() {
      // uncomment below and update the code to test the property termsAccepted
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "Active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

    it('should have the property availableRoles (base name: "AvailableRoles")', function() {
      // uncomment below and update the code to test the property availableRoles
      //var instane = new OrderCloud.User();
      //expect(instance).to.be();
    });

  });

}));
