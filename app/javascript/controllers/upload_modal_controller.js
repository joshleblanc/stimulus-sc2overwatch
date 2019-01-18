import { Controller } from 'stimulus';
import { dialog } from 'material-components-web/index';

export default class extends Controller {

    static targets = [ "modal", "collapse", "dropzone", "placeholder", "loader", "openButton" ];

    initialize() {
        this.dialog = new dialog.MDCDialog(this.modalTarget);
        this.dropzone = new Dropzone(this.dropzoneTarget, {
            previewTemplate: "<div></div>"
        });
        this.dropzone.on('addedfile', () => {
            this.toggleLoader();
        });
        this.dropzone.on('success', (a, b) => {
            this.toggleLoader();
        });
    }

    toggleLoader() {
        this.placeholderTarget.classList.toggle('upload-state--current');
        this.loaderTarget.classList.toggle('upload-state--current');
    }

    openModal() {
        //this.modal.open();
        this.dialog.open();
        console.log("Open modal");
    }

    get modal() {
        // return M.Modal.getInstance(this.modalTarget);
    }

    get collapse() {
        // return M.Collapsible.getInstance(this.collapseTarget);
    }

}