import { Controller } from 'stimulus';
import { autoInit } from 'material-components-web/index';
export default class extends Controller {
    initialize() {
        autoInit();
    }
}