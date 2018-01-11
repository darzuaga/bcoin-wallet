import assert from 'assert';
import React, { Component } from 'react';
import ui from  './ui.scss';

/**
 * UI
 * @alias module:menu.UI
 */

class UI extends Component {
  constructor(options) {
    super();

    this.options = new UIOptions(options);
  }
}


/**
 * UIOptions
 * @alias module:menu.UIOptions
 */

class UIOptions {
    /**
     * Create UI options.
     * @constructor
     * @param {Object} options
     */

    constructor(options) {
      this.components = null;
      this.stylesheet = ui;

      if (options)
       this.fromOptions(options);
}
