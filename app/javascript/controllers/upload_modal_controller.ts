import { Controller } from 'stimulus';
import { dialog, select, textField } from 'material-components-web/index';
import Dropzone from 'dropzone';

export default class extends Controller {
    static targets = [ "modal", "collapse", "dropzone", "openButton", "step", "replayInput", "uploadForm", "submitButton", "accusationForm", "playerField", "evidenceField" ];
    readonly modalTarget!: Element;
    readonly dropzoneTarget!: Element;
    readonly stepTargets!: Array<Element>;
    readonly replayInputTarget!: HTMLInputElement;
    readonly uploadFormTarget!: HTMLFormElement;
    readonly submitButtonTarget!: HTMLButtonElement;
    readonly accusationFormTarget!: HTMLFormElement;
    readonly playerFieldTarget!: HTMLInputElement;
    readonly evidenceFieldTarget!: HTMLTextAreaElement;
    readonly hasSubmitButtonTarget!: Boolean;
    dialog: dialog.MDCDialog;
    dropzone: Dropzone;
    playerSelect: select.MDCSelect;
    evidence: textField.MDCTextField;


    connect() {
        this.showCurrentStep();
        this.setSubmitButtonState();
        this.dialog = new dialog.MDCDialog(this.modalTarget);
        this.dropzone = new Dropzone(this.dropzoneTarget, {
            previewTemplate: "<div></div>",
            headers: {
                "Accept": "text/html"
            }
        });
        this.dropzone.on('addedfile', () => {
            this.nextStep();
        });
        this.dropzone.on('success', (file, resp) => {
            this.nextStep();
            this.stepElement.innerHTML = resp;
            this.playerSelect = new select.MDCSelect(this.playerFieldTarget);
            this.evidence = new textField.MDCTextField(this.evidenceFieldTarget);
            this.playerSelect.listen("MDCSelect:change", () => {
                this.setSubmitButtonState();
            });
        });
    }

    setSubmitButtonState() {
        const playerGood = this.playerSelect && this.playerSelect.value.length > 0;
        const evidenceGood = this.evidence && this.evidence.value.length >0;
        if(this.hasSubmitButtonTarget) {
            this.submitButtonTarget.disabled = !(playerGood && evidenceGood);

        }
    }

    showCurrentStep() {
        this.stepTargets.forEach((el, i) => {
            el.classList.toggle('upload-step--current', i === this.step);
        })
    }

    submitAccusation() {
        this.nextStep();
        this.accusationFormTarget.submit();
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

    get stepElement() {
        return this.stepTargets[this.step];
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