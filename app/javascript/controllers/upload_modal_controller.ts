import { Controller } from 'stimulus';
import { dialog } from 'material-components-web/index';
import Dropzone from 'dropzone';

export default class extends Controller {
    static targets = [ "modal", "collapse", "dropzone", "openButton", "step", "replayInput", "uploadForm" ];
    readonly modalTarget!: Element;
    readonly dropzoneTarget!: Element;
    readonly stepTargets!: Array<Element>;
    readonly replayInputTarget!: HTMLInputElement;
    readonly uploadFormTarget!: HTMLFormElement;
    dialog: dialog.MDCDialog;
    dropzone: Dropzone;


    initialize() {
        this.showCurrentStep();
        this.dialog = new dialog.MDCDialog(this.modalTarget);
        // this.dropzone = new Dropzone(this.dropzoneTarget, {
        //     previewTemplate: "<div></div>"
        // });
        // this.dropzone.on('addedfile', () => {
        //     this.nextStep();
        // });
        // this.dropzone.on('success', (a, b) => {
        //     console.log(a,b);
        //     this.nextStep();
        // });
    }

    showCurrentStep() {
        console.log(this.step);
        this.stepTargets.forEach((el, i) => {
            console.log(el, i);
            el.classList.toggle('upload-step--current', i === this.step);
        })
    }

    replaySelected() {
        this.nextStep();
        this.uploadFormTarget.submit();

    }

    uploadClicked() {
        this.replayInputTarget.click();
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    get step() {
        return parseInt(this.data.get('step'));
    }

    set step(i) {
        this.data.set('step', i.toString());
        this.showCurrentStep();
    }

    openModal() {
        this.dialog.open();
    }
}