import { Controller } from 'stimulus';
import { select } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ "player", "verdict", "submit" ];
    readonly playerTarget: HTMLSelectElement;
    readonly submitTarget: HTMLButtonElement;
    readonly verdictTarget: HTMLSelectElement;
    player: select.MDCSelect;
    verdict: select.MDCSelect;

    initialize() {
        this.player = new select.MDCSelect(this.playerTarget);
        this.player.listen("MDCSelect:change", () => this.setFormValid());
        this.verdict = new select.MDCSelect(this.verdictTarget);
        this.verdict.listen("MDCSelect:change", () => this.setFormValid());
        this.setSubmitButtonState();
    }

    setSubmitButtonState() {
        this.submitTarget.disabled = !this.formValid;
    }

    setFormValid() {
        this.formValid = this.player.value.length > 0 && this.verdict.value.length > 0;
        this.setSubmitButtonState();
    }

    playerChanged() {
        this.setFormValid();
        console.log("player changed");
    }

    verdictChanged() {
        this.setFormValid();
    }

    set formValid(b) {
        this.data.set('formValid', b.toString());
    }

    get formValid() {
        return this.data.get('formValid') === 'true';
    }
}
