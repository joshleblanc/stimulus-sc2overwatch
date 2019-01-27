import {Controller} from 'stimulus';
import {drawer, list, ripple} from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer', 'list', 'navbar', 'search', 'searchInput', 'step', 'searchResultList', 'searchResultsContainer' ];
    readonly drawerTarget: HTMLElement;
    readonly listTarget: HTMLElement;
    readonly navbarTarget: HTMLElement;
    readonly searchTarget: HTMLElement;
    readonly searchInputTarget: HTMLInputElement;
    readonly stepTargets: Array<HTMLElement>;
    readonly searchResultListTarget: HTMLElement;
    readonly hasSearchResultListTarget: boolean;
    readonly searchResultsContainerTarget: HTMLElement;
    drawer: drawer.MDCDrawer;
    searchTimeout: number;

    initialize() {
        this.drawer = new drawer.MDCDrawer(this.drawerTarget);
        const l = new list.MDCList(this.listTarget);
        l.wrapFocus = true;
        this.drawer.listen('MDCDrawer:closed', () => {
            this.open = false;
        });
        this.drawer.list_.singleSelection = true;
        this.showNavbar();
        this.setDrawerState();
        window.addEventListener('keyup', e => {
            if(e.key === 'Escape') {
                this.searchOpen = false;
            }
        })
    }

    showCurrentStep() {
        this.stepTargets.forEach((s, i) => {
            s.classList.toggle('hide', this.step !== i);
        });
    }

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

    itemClicked() {
        this.open = false;
    }

    searchChange(e) {
        clearTimeout(this.searchTimeout);
        if(e.target.value.length === 0) {
            this.step = 0;
        } else {
            this.searchTimeout = setTimeout(this.search, 500);
        }
    }

    showNavbar() {
        this.navbarTarget.classList.toggle('hide', this.searchOpen);
        this.searchTarget.classList.toggle('hide', !this.searchOpen);
        this.searchResultsContainerTarget.classList.toggle('hide', !this.searchOpen);
    }

    toggleSearch() {
        this.searchOpen = !this.searchOpen;
    }

    setDrawerState() {
        this.drawer.open = this.open;
    }

    get open() {
        return this.data.get('open') === "true";
    }

    get searchOpen() {
        return this.data.get('searchOpen') === 'true';
    }

    set searchOpen(b) {
        this.data.set('searchOpen', b.toString());
        this.showNavbar();
    }

    set open(state) {
        this.data.set('open', state.toString());
        this.setDrawerState();
    }

    get step() {
        return parseInt(this.data.get('step'));
    }

    set step(step) {
        this.data.set('step', step.toString());
        this.showCurrentStep();
    }

    toggleDrawer() {
        this.open = !this.open;
    }
}