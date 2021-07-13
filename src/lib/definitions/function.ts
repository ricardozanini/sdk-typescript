/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { normalizeTypeRestProperty } from './utils';

export class Function {
  constructor(model: any) {
    const defaultModel = { type: 'rest' };
    Object.assign(this, defaultModel, model);
  }

  /**
   * Unique function name
   */
  name: string;
  /**
   * If type is `rest`, <path_to_openapi_definition>#<operation_id>. If type is `rpc`, <path_to_grpc_proto_file>#<service_name>#<service_method>. If type is `expression`, defines the workflow expression.
   */
  operation: string;
  /**
   * Defines the function type. Is either `rest`, `rpc` or `expression`. Default is `rest`
   */
  type?: 'rest' | 'rpc' | 'expression';

  /**
   * Normalize the value of each property by recursively deleting properties whose value is equal to its default value. Does not modify the object state.
   * @returns {Specification.Function} without deleted properties.
   */

  normalize = (): Function => {
    const clone = new Function(this);

    normalizeTypeRestProperty(clone);

    return clone;
  };
}