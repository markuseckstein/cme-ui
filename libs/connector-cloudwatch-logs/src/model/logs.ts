/**
 * Cloudwatch Logs Adapter
 * A microservice called cloudwatch-logs-adapter observing AWS logs from different microservices. It serves a specific amount of last log lines of corresponding microservice identified by name. Ticket at [http://swagger.io](http://swagger.io).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: david.renner@consort-it.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { LogEntry } from './logEntry';

export interface Logs extends Array<LogEntry> {}
