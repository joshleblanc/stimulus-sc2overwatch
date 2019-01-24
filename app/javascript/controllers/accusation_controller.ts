import { Controller } from 'stimulus';
import { select, formField } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ "form", "playerSelect" ];

    readonly formTarget: HTMLFormElement;
    readonly formFieldTarget: HTMLDivElement;
    readonly playerSelectTarget: HTMLDivElement;
    select: select.MDCSelect;

    connect() {
        this.select = new select.MDCSelect(this.playerSelectTarget);
    }


}