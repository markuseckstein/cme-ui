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

export interface TracePoint {
  methodName: string;
  fileName: string;
  lineNumber: number;
  className: string;
  nativeMethod: boolean;
}
