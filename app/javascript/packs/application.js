/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import "material-components-web/material-components-web";
import { autoInit } from "material-components-web/index";
window.autoInit = autoInit;
const application = Application.start();
const context = require.context("controllers", true, /.ts$/);
application.load(definitionsFromContext(context));
