import { Controller } from 'stimulus';
import '@material/fab/mdc-fab';
import { MDCRipple } from '@material/ripple/index';

export default class extends Controller {

    static targets = [ "modal", "collapse", "dropzone", "placeholder", "loader", "openButton" ];

    connect() {
    }
    initialize() {
        MDCRipple.attachTo(this.openButtonTarget);
        console.log(this.openButtonTarget);

        this.dropzone = new Dropzone(this.dropzoneTarget, {
            previewTemplate: "<div></div>"
        });
        this.dropzone.on('addedfile', () => {
            this.placeholderTarget.classList.toggle('upload-state--current');
            this.loaderTarget.classList.toggle('upload-state--current');
        });
        this.dropzone.on('success', (a, b) => {
            this.placeholderTarget.classList.toggle('upload-state--current');
            this.loaderTarget.classList.toggle('upload-state--current');
            this.collapse.open(1);
            console.log(a,b);
        });
    }

    openModal() {
        //this.modal.open();
        console.log("Open modal");
    }

    get modal() {
        // return M.Modal.getInstance(this.modalTarget);
    }

    get collapse() {
        // return M.Collapsible.getInstance(this.collapseTarget);
    }

}