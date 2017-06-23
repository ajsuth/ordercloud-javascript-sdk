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
    root.OrderCloud.Promotion = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Promotion model module.
   * @module model/Promotion
   * @version 1.0.56
   */

  /**
   * Constructs a new <code>Promotion</code>.
   * @alias module:model/Promotion
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Promotion} obj Optional instance to populate.
   * @return {module:model/Promotion} The populated <code>Promotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('RedemptionLimit')) {
        obj['RedemptionLimit'] = ApiClient.convertToType(data['RedemptionLimit'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionLimitPerUser')) {
        obj['RedemptionLimitPerUser'] = ApiClient.convertToType(data['RedemptionLimitPerUser'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionCount')) {
        obj['RedemptionCount'] = ApiClient.convertToType(data['RedemptionCount'], 'Number');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('FinePrint')) {
        obj['FinePrint'] = ApiClient.convertToType(data['FinePrint'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('EligibleExpression')) {
        obj['EligibleExpression'] = ApiClient.convertToType(data['EligibleExpression'], 'String');
      }
      if (data.hasOwnProperty('ValueExpression')) {
        obj['ValueExpression'] = ApiClient.convertToType(data['ValueExpression'], 'String');
      }
      if (data.hasOwnProperty('CanCombine')) {
        obj['CanCombine'] = ApiClient.convertToType(data['CanCombine'], 'Boolean');
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
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} RedemptionLimit
   */
  exports.prototype['RedemptionLimit'] = undefined;
  /**
   * @member {Number} RedemptionLimitPerUser
   */
  exports.prototype['RedemptionLimitPerUser'] = undefined;
  /**
   * @member {Number} RedemptionCount
   */
  exports.prototype['RedemptionCount'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} FinePrint
   */
  exports.prototype['FinePrint'] = undefined;
  /**
   * @member {String} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {String} EligibleExpression
   */
  exports.prototype['EligibleExpression'] = undefined;
  /**
   * @member {String} ValueExpression
   */
  exports.prototype['ValueExpression'] = undefined;
  /**
   * @member {Boolean} CanCombine
   */
  exports.prototype['CanCombine'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


