import { Controller } from 'stimulus';

export default class extends Controller {

    static targets = [ "modal", "collapse", "dropzone", "placeholder", "loader" ];

    initialize() {
        M.Modal.init(this.modalTarget);
        M.Collapsible.init(this.collapseTarget, { accordion: true });
        console.log(this.collapseTarget, { accordion: true });
        console.log(this.dropzoneTarget);
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
            console.log(a,b);
        });
    }

    uploadFinished() {
        console.log("????");
    }

    openModal() {
        this.modal.open();
        console.log("Open modal");
    }

    get modal() {
        return M.Modal.getInstance(this.modalTarget);
    }

}