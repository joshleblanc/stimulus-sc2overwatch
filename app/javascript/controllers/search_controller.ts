import { Controller } from 'stimulus';
import { list, ripple } from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'searchInput', 'step', 'searchResultList' ];
    readonly searchInputTarget: HTMLInputElement;
    readonly stepTargets: Array<HTMLElement>;
    readonly searchResultListTarget: HTMLElement;
    readonly hasSearchResultListTarget: boolean;
    searchTimeout: number ;

    search = async () => {
        const query = this.searchInputTarget.value;
        this.step = 1;
        const resp = await fetch(`${this.data.get('url')}?q=${query}`);
        this.stepTargets[2].innerHTML = await resp.text();
        if(this.hasSearchResultListTarget) {
            const tmp = list.MDCList.attachTo(this.searchResultListTarget);
            tmp.listElements.forEach(l => new ripple.MDCRipple(l));
        }
        this.step = 2;
    };

    showCurrentStep() {
        this.stepTargets.forEach((s, i) => {
            s.classList.toggle('hide', this.step !== i);
        });
    }


    searchChange(e) {
        clearTimeout(this.searchTimeout);
        if(e.target.value.length === 0) {
            this.step = 0;
        } else {
            this.searchTimeout = window.setTimeout(this.search, 100);
        }
    }

    get step() {
        return parseInt(this.data.get('step'));
    }

    set step(step) {
        this.data.set('step', step.toString());
        this.showCurrentStep();
    }
}
