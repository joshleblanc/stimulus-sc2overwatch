import { Controller } from 'stimulus';
import { snackbar, ripple } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ "snackbar" ];
    readonly snackbarTarget: HTMLDivElement;
    snackbar: snackbar.MDCSnackbar;

    initialize() {
        this.snackbar = new snackbar.MDCSnackbar(this.snackbarTarget);
        if(this.notice) {
            this.snackbar.open();
            setTimeout(() => this.snackbar.close(), 5000);
        }

    }

    get notice() {
        return this.data.get('notice');
    }
}