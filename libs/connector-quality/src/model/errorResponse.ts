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
import { TracePoint } from './tracePoint';


export interface ErrorResponse { 
    /**
     * Represents the http status error that goes along with this error.
     */
    status: number;
    /**
     * Should contain a short, meaningful description of the error case. Might be displayed to the end user.
     */
    message: string;
    /**
     * Contains a trace of errors if available. Only use for forwarding to developer. In case this is missing as it is optional use location to identify where error happened originally.
     */
    trace?: Array<TracePoint>;
    /**
     * Field that indicates where the error occured. This is a mandatory field and should be considered in case trace is not available.
     */
    location: string;
    /**
     * The exact time the error occured within microservice.
     */
    time: Date;
}
