import { Controller } from 'stimulus';
import { dialog } from 'material-components-web/index';
import { Dropzone } from 'dropzone';

export default class extends Controller {
    static targets = [ "modal", "collapse", "dropzone", "placeholder", "loader", "openButton" ];
    readonly modalTarget!: Element;
    readonly dropzoneTarget!: Element;
    readonly placeholderTarget!: Element;
    readonly loaderTarget!: Element;
    dialog: dialog.MDCDialog;
    dropzone: Dropzone;

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
}