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
    root.OrderCloud.BaseSpec = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BaseSpec model module.
   * @module model/BaseSpec
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new <code>BaseSpec</code>.
   * @alias module:model/BaseSpec
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>BaseSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseSpec} obj Optional instance to populate.
   * @return {module:model/BaseSpec} The populated <code>BaseSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ListOrder')) {
        obj['ListOrder'] = ApiClient.convertToType(data['ListOrder'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('DefaultValue')) {
        obj['DefaultValue'] = ApiClient.convertToType(data['DefaultValue'], 'String');
      }
      if (data.hasOwnProperty('Required')) {
        obj['Required'] = ApiClient.convertToType(data['Required'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowOpenText')) {
        obj['AllowOpenText'] = ApiClient.convertToType(data['AllowOpenText'], 'Boolean');
      }
      if (data.hasOwnProperty('DefaultOptionID')) {
        obj['DefaultOptionID'] = ApiClient.convertToType(data['DefaultOptionID'], 'String');
      }
      if (data.hasOwnProperty('DefinesVariant')) {
        obj['DefinesVariant'] = ApiClient.convertToType(data['DefinesVariant'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Number} ListOrder
   */
  exports.prototype['ListOrder'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} DefaultValue
   */
  exports.prototype['DefaultValue'] = undefined;
  /**
   * @member {Boolean} Required
   */
  exports.prototype['Required'] = undefined;
  /**
   * @member {Boolean} AllowOpenText
   */
  exports.prototype['AllowOpenText'] = undefined;
  /**
   * @member {String} DefaultOptionID
   */
  exports.prototype['DefaultOptionID'] = undefined;
  /**
   * @member {Boolean} DefinesVariant
   */
  exports.prototype['DefinesVariant'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


