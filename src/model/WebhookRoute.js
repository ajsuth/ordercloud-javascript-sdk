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
    define(['Sdk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.WebhookRoute = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The WebhookRoute model module.
   * @module model/WebhookRoute
   */

  /**
   * Constructs a new <code>WebhookRoute</code>.
   * @alias module:model/WebhookRoute
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>WebhookRoute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookRoute} obj Optional instance to populate.
   * @return {module:model/WebhookRoute} The populated <code>WebhookRoute</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Route')) {
        obj['Route'] = Sdk.convertToType(data['Route'], 'String');
      }
      if (data.hasOwnProperty('Verb')) {
        obj['Verb'] = Sdk.convertToType(data['Verb'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Route
   */
  exports.prototype['Route'] = undefined;
  /**
   * @member {String} Verb
   */
  exports.prototype['Verb'] = undefined;



  return exports;
}));

