/*!
 * bclient.js - http client for bcoin
 * Copyright (c) 2018, Jonathan Gonzalez (MIT License).
 * https://github.com/brokegang/bwallet
 */

'use strict';

const assert = require('assert');
const EventEmitter = require('events');
const bclient = require('bclient');

class Client extends EventEmitter {
  constructor() {
  super();
  this.wallet = new bclient.WalletClient();
  }

  init() {
    await this.wallet.open();
  }
}

