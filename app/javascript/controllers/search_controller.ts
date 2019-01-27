import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = [ 'searchInput', 'step'  ];
    readonly searchInputTarget: HTMLInputElement;
    readonly stepTargets: Array<HTMLElement>;

    search = async () => {
        const query = this.searchInputTarget.value;
        this.step = 1;
        const resp = await fetch(`${this.data.get('searchUrl')}?q=${query}`);
        this.stepTargets[2].innerHTML = await resp.text();
        if(this.hasSearchResultListTarget) {
            const tmp = list.MDCList.attachTo(this.searchResultListTarget);
            tmp.listElements.forEach(l => new ripple.MDCRipple(l));
        }
        this.step = 2;
    };

    searchChange(e) {
        clearTimeout(this.searchTimeout);
        if(e.target.value.length === 0) {
            this.step = 0;
        } else {
            this.searchTimeout = setTimeout(this.search, 500);
        }
    }
}