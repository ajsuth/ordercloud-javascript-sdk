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
    define(['ApiClient', 'model/ListPayment', 'model/Payment', 'model/PaymentTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPayment'), require('../model/Payment'), require('../model/PaymentTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Payments = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPayment, root.OrderCloud.Payment, root.OrderCloud.PaymentTransaction);
  }
}(this, function(ApiClient, ListPayment, Payment, PaymentTransaction) {
  'use strict';

  /**
   * Payment service.
   * @module api/Payments
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new Payments. 
   * @alias module:api/Payments
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {module:model/Payment} payment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Create = function(buyerID, orderID, payment) {
      var postBody = payment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Create");
      }

      // verify the required parameter 'payment' is set
      if (payment == undefined || payment == null) {
        throw new Error("Missing the required parameter 'payment' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID,
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/PaymentTransaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.CreateTransaction = function(buyerID, orderID, paymentID, transaction) {
      var postBody = transaction;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling CreateTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling CreateTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling CreateTransaction");
      }

      // verify the required parameter 'transaction' is set
      if (transaction == undefined || transaction == null) {
        throw new Error("Missing the required parameter 'transaction' when calling CreateTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, orderID, paymentID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Delete");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
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
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteTransaction = function(buyerID, orderID, paymentID, transactionID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling DeleteTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling DeleteTransaction");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID == undefined || transactionID == null) {
        throw new Error("Missing the required parameter 'transactionID' when calling DeleteTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
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
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Get = function(buyerID, orderID, paymentID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Get");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPayment}
     */
    this.List = function(buyerID, orderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID,
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
      var returnType = ListPayment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/Payment} partialPayment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Patch = function(buyerID, orderID, paymentID, partialPayment) {
      var postBody = partialPayment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Patch");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Patch");
      }

      // verify the required parameter 'partialPayment' is set
      if (partialPayment == undefined || partialPayment == null) {
        throw new Error("Missing the required parameter 'partialPayment' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @param {module:model/PaymentTransaction} partialTransaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.PatchTransaction = function(buyerID, orderID, paymentID, transactionID, partialTransaction) {
      var postBody = partialTransaction;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling PatchTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling PatchTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling PatchTransaction");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID == undefined || transactionID == null) {
        throw new Error("Missing the required parameter 'transactionID' when calling PatchTransaction");
      }

      // verify the required parameter 'partialTransaction' is set
      if (partialTransaction == undefined || partialTransaction == null) {
        throw new Error("Missing the required parameter 'partialTransaction' when calling PatchTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {module:model/Payment} payment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.Update = function(buyerID, orderID, paymentID, payment) {
      var postBody = payment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Update");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling Update");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling Update");
      }

      // verify the required parameter 'payment' is set
      if (payment == undefined || payment == null) {
        throw new Error("Missing the required parameter 'payment' when calling Update");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} orderID ID of the order.
     * @param {String} paymentID ID of the payment.
     * @param {String} transactionID ID of the transaction.
     * @param {module:model/PaymentTransaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Payment}
     */
    this.UpdateTransaction = function(buyerID, orderID, paymentID, transactionID, transaction) {
      var postBody = transaction;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling UpdateTransaction");
      }

      // verify the required parameter 'orderID' is set
      if (orderID == undefined || orderID == null) {
        throw new Error("Missing the required parameter 'orderID' when calling UpdateTransaction");
      }

      // verify the required parameter 'paymentID' is set
      if (paymentID == undefined || paymentID == null) {
        throw new Error("Missing the required parameter 'paymentID' when calling UpdateTransaction");
      }

      // verify the required parameter 'transactionID' is set
      if (transactionID == undefined || transactionID == null) {
        throw new Error("Missing the required parameter 'transactionID' when calling UpdateTransaction");
      }

      // verify the required parameter 'transaction' is set
      if (transaction == undefined || transaction == null) {
        throw new Error("Missing the required parameter 'transaction' when calling UpdateTransaction");
      }


      var pathParams = {
        'buyerID': buyerID,
        'orderID': orderID,
        'paymentID': paymentID,
        'transactionID': transactionID
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
      var returnType = Payment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
