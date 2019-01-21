import { Controller } from 'stimulus';
import { list } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'list' ];
    readonly listTarget: HTMLDivElement;
    list: list.MDCList;

    initialize() {
        this.list = new list.MDCList(this.listTarget);
        this.list.wrapFocus = true;
    }
}