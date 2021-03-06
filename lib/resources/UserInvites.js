/*
 * Copyright (C) 2014-present Cloudflare, Inc.

 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

'use strict';

const prototypal = require('es-class');
const auto = require('autocreate');
const Resource = require('../Resource');
const method = require('../method');

/**
 * UserInvites represents the /user/invites API endpoint.
 *
 * @class UserInvites
 * @hideconstructor
 * @extends Resource
 */
module.exports = auto(
  prototypal({
    extends: Resource,
    path: 'user/invites',
    includeBasic: ['browse', 'read'],
    accept: method({
      method: 'PATCH',
      path: ':id',
    }),
  })
);
