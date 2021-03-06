/**
 * Kubernetes Adapter
 * A microservice called kubernetes-adapter observing Kubernetes objects required to run microservices. Ticket at [http://swagger.io](http://swagger.io).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: david.renner@consort-it.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Pod {
  /**
   * service name. This i a unique value, like an ID. It has the form 'service-name' or 'service-adapter'
   */
  name: string;
  /**
   * version/tag of service container image.
   */
  version: string;
  /**
   * Is the service running or something else?
   */
  status: Pod.StatusEnum;
}
export namespace Pod {
  export type StatusEnum = 'Initializing' | 'Running' | 'Stopped' | 'Broken';
  export const StatusEnum = {
    Initializing: 'Initializing' as StatusEnum,
    Running: 'Running' as StatusEnum,
    Stopped: 'Stopped' as StatusEnum,
    Broken: 'Broken' as StatusEnum
  };
}
