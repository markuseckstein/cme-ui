/**
 * metadata-service
 * This is the metadata service of consort-group. It handels CRU(D)-operations for the application metadata.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: manuel.hiemer@consort-it.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Service {
  name: string;
  description?: string;
  /**
   * A string describing the icon of the service in google material icon font (https://material.io/icons)
   */
  icon?: string;
  serviceType: Service.ServiceTypeEnum;
  url?: string;
  /**
   * Name of the Message Queue where the service has subscribed to
   */
  messageQueue?: string;
  /**
   * Other microservice to whom content is provided
   */
  dependencies?: string;
  /**
   * Name of the persisten storage where data is collected from
   */
  persistence?: string;
}
export namespace Service {
  export type ServiceTypeEnum = 'UI' | 'Backend';
  export const ServiceTypeEnum = {
    UI: 'UI' as ServiceTypeEnum,
    Backend: 'Backend' as ServiceTypeEnum
  };
}
