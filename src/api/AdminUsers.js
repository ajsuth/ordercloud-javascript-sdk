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
    define(['ApiClient', 'model/ListUser', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUser'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminUsers = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListUser, root.OrderCloud.User);
  }
}(this, function(ApiClient, ListUser, User) {
  'use strict';

  /**
   * AdminUser service.
   * @module api/AdminUsers
   * @version v1.0.42-preview
   */

  /**
   * Constructs a new AdminUsers. 
   * @alias module:api/AdminUsers
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Create = function(user) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Create");
      }


      var pathParams = {
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
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(userID) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Delete");
      }


      var pathParams = {
        'userID': userID
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
        '/adminusers/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Get = function(userID) {
      var postBody = null;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Get");
      }


      var pathParams = {
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
        '/adminusers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Patch = function(userID, user) {
      var postBody = user;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Patch");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Patch");
      }


      var pathParams = {
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Update = function(userID, user) {
      var postBody = user;

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Update");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Update");
      }


      var pathParams = {
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/adminusers/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
