import { Controller } from 'stimulus';
import { select, textField } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ "form", "playerSelect", "evidence", "submitButton" ];

    readonly formTarget: HTMLFormElement;
    readonly formFieldTarget: HTMLDivElement;
    readonly playerSelectTarget: HTMLDivElement;
    readonly evidenceTarget: HTMLTextAreaElement;
    readonly submitButtonTarget: HTMLButtonElement;
    select: select.MDCSelect;
    evidence: textField.MDCTextField;


    connect() {
        this.select = new select.MDCSelect(this.playerSelectTarget);
        this.select.listen("MDCSelect:changed", () => this.setFormValid());
        this.evidence = new textField.MDCTextField(this.evidenceTarget);
        this.setSubmitButtonState();
    }

    setSubmitButtonState() {
        this.submitButtonTarget.disabled = !this.formValid;
    }

    setFormValid() {
        this.formValid = this.select.value.length > 0 && this.evidence.value.length > 0;
        this.setSubmitButtonState();
    }

    playerChanged() {
        this.setFormValid();
    }

    evidenceChanged() {
        this.setFormValid();
        console.log("Evidence Changed");
    }

    get formValid() {
        return this.data.get('formValid') === "true";
    }

    set formValid(b) {
        this.data.set('formValid', b.toString());
    }


}
