/**
 * Quality Backend
 * This services gathers Quality Gate information from different sources and prepares a summary report.
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface QualityDetail {
  serviceName: string;
  /**
   * The status of this category or 'Unknown' if the status could not be retrieved.
   */
  status: QualityDetail.StatusEnum;
  /**
   * The point in time when the status was retrieved. Should be in UTC.
   */
  generatedAt: Date;
  /**
   * The url of the metric of the related service.
   */
  ref?: string;
}
export namespace QualityDetail {
  export type StatusEnum = 'Passed' | 'Warning' | 'Failed' | 'Unknown';
  export const StatusEnum = {
    Passed: 'Passed' as StatusEnum,
    Warning: 'Warning' as StatusEnum,
    Failed: 'Failed' as StatusEnum,
    Unknown: 'Unknown' as StatusEnum
  };
}
