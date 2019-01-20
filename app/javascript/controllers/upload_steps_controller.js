import { Controller } from 'stimulus';
import Dropzone from "dropzone";

export default class extends Controller {
    static targets = [ "uploadForm", "fileInput", "selectButton", "openButton", "step", "replayInput", "uploadForm", "submitButton", "accusationForm", "playerSelect", "evidence" ];

    initialize() {
        this.showCurrentStep();
        this.setSubmitButtonState();
        // this.dropzone = new Dropzone(this.dropzoneTarget, {
        //     previewTemplate: "<div></div>",
        //     headers: {
        //         "Accept": "text/html"
        //     }
        // });
        // this.dropzone.on('addedfile', () => {
        //     this.nextStep();
        // });
        // this.dropzone.on('success', (file, resp) => {
        //     this.nextStep();
        //     this.stepElement.innerHTML = resp;
        // });
    }

    submit() {
        this.nextStep();
        this.uploadFormTarget.submit();
    }

    selectReplay() {
        this.fileInputTarget.click();
    }

    evidenceChanged() {
        this.setSubmitButtonState();
    }

    playerChanged() {
        this.setSubmitButtonState();
    }

    setSubmitButtonState() {
        const playerGood = this.hasPlayerSelectTarget && this.playerSelectTarget.value.length > 0;
        const evidenceGood = this.hasEvidenceTarget && this.evidenceTarget.value.length > 0;
        if(this.hasSubmitButtonTarget) {
            this.submitButtonTarget.classList.toggle('disabled', !(playerGood && evidenceGood));
        }
    }

    showCurrentStep() {
        console.log("Shwoing current step", this.stepTargets, this.step);;
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
}