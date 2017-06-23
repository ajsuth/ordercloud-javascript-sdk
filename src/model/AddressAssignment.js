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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AddressAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddressAssignment model module.
   * @module model/AddressAssignment
   * @version 1.0.56
   */

  /**
   * Constructs a new <code>AddressAssignment</code>.
   * @alias module:model/AddressAssignment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AddressAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressAssignment} obj Optional instance to populate.
   * @return {module:model/AddressAssignment} The populated <code>AddressAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AddressID')) {
        obj['AddressID'] = ApiClient.convertToType(data['AddressID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('IsShipping')) {
        obj['IsShipping'] = ApiClient.convertToType(data['IsShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('IsBilling')) {
        obj['IsBilling'] = ApiClient.convertToType(data['IsBilling'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} AddressID
   */
  exports.prototype['AddressID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {Boolean} IsShipping
   */
  exports.prototype['IsShipping'] = undefined;
  /**
   * @member {Boolean} IsBilling
   */
  exports.prototype['IsBilling'] = undefined;



  return exports;
}));


