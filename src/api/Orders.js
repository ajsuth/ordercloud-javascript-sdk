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
    define(['ApiClient', 'model/Address', 'model/BuyerShipment', 'model/ListOrder', 'model/ListOrderApproval', 'model/ListOrderPromotion', 'model/ListUser', 'model/Order', 'model/OrderApprovalInfo', 'model/Promotion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/BuyerShipment'), require('../model/ListOrder'), require('../model/ListOrderApproval'), require('../model/ListOrderPromotion'), require('../model/ListUser'), require('../model/Order'), require('../model/OrderApprovalInfo'), require('../model/Promotion'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Orders = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.BuyerShipment, root.OrderCloud.ListOrder, root.OrderCloud.ListOrderApproval, root.OrderCloud.ListOrderPromotion, root.OrderCloud.ListUser, root.OrderCloud.Order, root.OrderCloud.OrderApprovalInfo, root.OrderCloud.Promotion);
  }
}(this, function(ApiClient, Address, BuyerShipment, ListOrder, ListOrderApproval, ListOrderPromotion, ListUser, Order, OrderApprovalInfo, Promotion) {
  'use strict';

  /**
   * Order service.
   * @module api/Orders
   * @version 1.0.1-staging
   */

  /**
   * Constructs a new Orders. 
   * @alias module:api/Orders
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} promoCode Promo code of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.AddPromotion = function(direction, orderID, promoCode) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling AddPromotion");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling AddPromotion");
      }

      // verify the required parameter 'promoCode' is set
      if (promoCode == undefined || promoCode == null) {
        throw new Error("Missing the required parameter 'promoCode' when calling AddPromotion");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'promoCode': promoCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/promotions/{promoCode}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/OrderApprovalInfo} info 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Approve = function(direction, orderID, info) {
      var postBody = info;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Approve");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Approve");
      }

      // verify the required parameter 'info' is set
      if (info == undefined || info == null) {
        throw new Error("Missing the required parameter 'info' when calling Approve");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/approve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Cancel = function(direction, orderID) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Cancel");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Cancel");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {module:model/Order} order 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Create = function(direction, order) {
      var postBody = order;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Create");
      }

      // verify the required parameter 'order' is set
      if (order == undefined || order == null) {
        throw new Error("Missing the required parameter 'order' when calling Create");
      }


      var pathParams = {
        'direction': direction
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/OrderApprovalInfo} info 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Decline = function(direction, orderID, info) {
      var postBody = info;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Decline");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Decline");
      }

      // verify the required parameter 'info' is set
      if (info == undefined || info == null) {
        throw new Error("Missing the required parameter 'info' when calling Decline");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/decline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(direction, orderID) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Delete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Delete");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Get = function(direction, orderID) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Get");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.supplierID ID of the supplier.
     * @param {String} opts.from Lower bound of date range that the order was created.
     * @param {String} opts.to Upper bound of date range that the order was created.
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrder}
     */
    this.List = function(direction, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling List");
      }


      var pathParams = {
        'direction': direction
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'supplierID': opts['supplierID'],
        'from': opts['from'],
        'to': opts['to'],
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrder;

      return this.apiClient.callApi(
        '/orders/{direction}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrderApproval}
     */
    this.ListApprovals = function(direction, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling ListApprovals");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling ListApprovals");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrderApproval;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/approvals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
     */
    this.ListEligibleApprovers = function(direction, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling ListEligibleApprovers");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling ListEligibleApprovers");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUser;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/eligibleapprovers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOrderPromotion}
     */
    this.ListPromotions = function(direction, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling ListPromotions");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling ListPromotions");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListOrderPromotion;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/promotions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Order} partialOrder 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Patch = function(direction, orderID, partialOrder) {
      var postBody = partialOrder;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Patch");
      }

      // verify the required parameter 'partialOrder' is set
      if (partialOrder == undefined || partialOrder == null) {
        throw new Error("Missing the required parameter 'partialOrder' when calling Patch");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.PatchBillingAddress = function(direction, orderID, address) {
      var postBody = address;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling PatchBillingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchBillingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling PatchBillingAddress");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/billto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.PatchShippingAddress = function(direction, orderID, address) {
      var postBody = address;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling PatchShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling PatchShippingAddress");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/shipto', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {String} promoCode Promo code of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.RemovePromotion = function(direction, orderID, promoCode) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling RemovePromotion");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling RemovePromotion");
      }

      // verify the required parameter 'promoCode' is set
      if (promoCode == undefined || promoCode == null) {
        throw new Error("Missing the required parameter 'promoCode' when calling RemovePromotion");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID,
        'promoCode': promoCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/promotions/{promoCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.SetBillingAddress = function(direction, orderID, address) {
      var postBody = address;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling SetBillingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling SetBillingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling SetBillingAddress");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/billto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.SetShippingAddress = function(direction, orderID, address) {
      var postBody = address;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling SetShippingAddress");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling SetShippingAddress");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling SetShippingAddress");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/shipto', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/BuyerShipment} shipment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Ship = function(direction, orderID, shipment) {
      var postBody = shipment;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Ship");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Ship");
      }

      // verify the required parameter 'shipment' is set
      if (shipment == undefined || shipment == null) {
        throw new Error("Missing the required parameter 'shipment' when calling Ship");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/ship', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Submit = function(direction, orderID) {
      var postBody = null;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Submit");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Submit");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}/submit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} direction Direction of the order. Possible values: Incoming, Outgoing.
     * @param {String} orderID ID of the order.
     * @param {module:model/Order} order 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    this.Update = function(direction, orderID, order) {
      var postBody = order;

      // verify the required parameter 'direction' is set
      if (direction == undefined || direction == null) {
        throw new Error("Missing the required parameter 'direction' when calling Update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Update");
      }

      // verify the required parameter 'order' is set
      if (order == undefined || order == null) {
        throw new Error("Missing the required parameter 'order' when calling Update");
      }


      var pathParams = {
        'direction': direction,
        'orderID': orderID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{direction}/{orderID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
