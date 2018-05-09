/**
 * Gitlab Adapter
 * This is the gitlab adapter service of consort-group. It gets files from gitlab and returns them when api request are made.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: paul.krugel@consort-group.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Commit Metadata of a given object
 */
export interface CommitMetadata {
  id: string;
  shortId: string;
  title: string;
  createdAt: Date;
  parentIds: Array<string>;
  message: string;
  authorName: string;
  authorEmail: string;
  authoredDate: Date;
  committerName: string;
  committerEmail: string;
  committerDate: Date;
}
