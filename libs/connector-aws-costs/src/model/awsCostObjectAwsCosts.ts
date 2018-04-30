/**
 * AWS Cost API Adapter
 * This is an adapter service to proxy information from AWS Cost Explorer API.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: nicole.tornow@consort-group.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface AwsCostObjectAwsCosts {
  amount: number;
  currency: AwsCostObjectAwsCosts.CurrencyEnum;
}
export namespace AwsCostObjectAwsCosts {
  export type CurrencyEnum = 'USD';
  export const CurrencyEnum = {
    USD: 'USD' as CurrencyEnum
  };
}
