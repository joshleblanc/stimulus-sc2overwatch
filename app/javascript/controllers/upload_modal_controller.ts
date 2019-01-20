import { Controller } from 'stimulus';
import { dialog } from 'material-components-web/index';
export default class extends Controller {
    static targets = [ "modal" ];
    readonly modalTarget: HTMLDivElement;
    dialog: dialog.MDCDialog;

    connect() {
        this.dialog = new dialog.MDCDialog(this.modalTarget);
    }

    openModal() {
        this.dialog.open();
    }
}