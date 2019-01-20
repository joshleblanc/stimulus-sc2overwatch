import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = [ "modal" ];

    connect() {
        this.dialog = window.app.dialog.create({
            el: this.modalTarget,
            closeByBackdropClick: true,
            backdrop: true,
        });

    }

    openModal() {
        this.dialog.open();
    }
}