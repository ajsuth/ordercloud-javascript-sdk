import { ListPage } from '../models/ListPage';
import { Webhook } from '../models/Webhook';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Webhooks {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
    }

   /**
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TWebhook extends Webhook>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TWebhook>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TWebhook>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/webhooks`, { params: { ...options,  filters: options.filters, ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param webhook Required fields: Name, Url, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TWebhook extends Webhook>(webhook: Webhook, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/webhooks`, webhook, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param webhookID ID of the webhook.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TWebhook extends Webhook>(webhookID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/webhooks/${webhookID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param webhookID ID of the webhook.
    * @param webhook Required fields: Name, Url, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TWebhook extends Webhook>(webhookID: string, webhook: Webhook, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/webhooks/${webhookID}`, webhook, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param webhookID ID of the webhook.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(webhookID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/webhooks/${webhookID}`, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param webhookID ID of the webhook.
    * @param webhook 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TWebhook extends Webhook>(webhookID: string, webhook: PartialDeep<Webhook>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/webhooks/${webhookID}`, webhook, { params: {  ...requestOptions, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Webhooks.As().List() // lists Webhooks using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Webhooks();