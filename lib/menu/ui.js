import assert from 'assert';
import React, { Component } from 'react';

/**
 * Menu
 * @alias module:menu.UI
 */

class UI extends Component {
  constructor(options) {
    super();

    this.options = new MenuOptions(options);
  }
}


/**
 * MenuOptions
 * @alias module:menu.UIOptions
 */

class UIOptions {
    /**
     * Create Menu options.
     * @constructor
     * @param {Object} options
     */

    constructor(options) {
      this.components = null;

      if (options)
       this.fromOptions(options);
}
