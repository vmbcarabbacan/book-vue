/* eslint-disable */
import { App } from 'vue';
import VueAxios from 'vue-axios';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { pStore } from '@/store';

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    const token = window.localStorage.getItem('token');
    ApiService.vueInstance.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(resource: string, params: AxiosRequestConfig): Promise<AxiosResponse> {
    ApiService.vueInstance.axios.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );

    ApiService.vueInstance.axios.interceptors.response.use(
      (res) => res,
      (err) => Promise.reject(err),
    );
    ApiService.setHeader();
    return ApiService.vueInstance.axios.get(resource, params).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(resource: string, slug = '' as string): Promise<AxiosResponse> {
    ApiService.vueInstance.axios.interceptors.request.use(
      (config) => config,
      (error) => {
        Promise.reject(error)
      },
    );

    ApiService.vueInstance.axios.interceptors.response.use(
      (res) => res,
      (err) => {
        Promise.reject(err)
        console.log({err})
        if(err.response.status === 403) {
          pStore.refresh();
        }
      },
    );
    ApiService.setHeader();
    return ApiService.vueInstance.axios.get(`${resource}`).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  }

  public static auth(resource: string, params: AxiosRequestConfig | any): Promise<any> {
    return ApiService.vueInstance.axios.post(`${resource}`, params, { withCredentials: true });
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: AxiosRequestConfig | any): Promise<AxiosResponse> {
    ApiService.vueInstance.axios.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );

    ApiService.vueInstance.axios.interceptors.response.use(
      (res) => res,
      (err) => Promise.reject(err),
    );
    ApiService.setHeader();
    return ApiService.vueInstance.axios.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: AxiosRequestConfig | any): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    ApiService.setHeader();
    return ApiService.vueInstance.axios.delete(resource).catch((error) => {
      throw new Error(`ApiService ${error}`);
    });
  }
}

export default ApiService;
