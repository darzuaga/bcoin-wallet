import assert from 'assert';
import React, { Component } from 'react';

/**
 * Menu
 * @alias module:menu.Menu
 */

class Menu extends Component {
  constructor(options) {
    super();

    this.options = new MenuOptions(options);
  }
}


/**
 * MenuOptions
 * @alias module:menu.MenuOptions
 */

class MenuOptions {
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
