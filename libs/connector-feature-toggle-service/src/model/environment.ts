/**
 * feature-toggle-service
 * The feature toggle service manages feature toggle settings for the microservices in different environments. It can read the current settings as well as change them.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: manuel.hiemer@consort-it.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FeatureToggle } from './featureToggle';

export interface Environment {
  /**
   * Name of the environment (e.g. dev, test, prod)
   */
  name: string;
  toggles: Array<FeatureToggle>;
}
