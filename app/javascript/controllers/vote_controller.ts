import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = [ "player", "verdict", "submit" ];
    readonly playerTarget: HTMLSelectElement;
    readonly submitTarget: HTMLButtonElement;
    readonly verdictTarget: HTMLSelectElement;
}