import {Controller} from 'stimulus';
import {drawer, list} from 'material-components-web/index';

export default class extends Controller {
    static targets = [ 'drawer', 'list', 'navbar', 'search', 'searchInput', 'searchResults', 'searchPlaceholder' ];
    readonly drawerTarget: HTMLElement;
    readonly listTarget: HTMLElement;
    readonly navbarTarget: HTMLElement;
    readonly searchTarget: HTMLElement;
    readonly searchInputTarget: HTMLInputElement;
    readonly searchResultsTarget: HTMLElement;
    readonly searchPlaceholderTarget: HTMLElement;
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
    }

    connect() {
        this.toggleVisibleNavbar(this.searchOpen);
    }

    search = async () => {
        const query = this.searchInputTarget.value;
        const resp = await fetch(`${this.data.get('searchUrl')}?q=${query}`);
        this.searchPlaceholderTarget.classList.toggle('hide', true);
        this.searchResultsTarget.innerHTML = await resp.text();
    };

    searchChange(e) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(this.search, 250);
    }

    toggleVisibleNavbar(b) {
        this.navbarTarget.classList.toggle('hide', b);
        this.searchTarget.classList.toggle('hide', !b);
    }

    toggleSearch() {
        this.searchOpen = !this.searchOpen;
        this.toggleVisibleNavbar(this.searchOpen);
    }

    get open() {
        return this.data.get('open') === "true";
    }

    get searchOpen() {
        return this.data.get('searchOpen') === 'true';
    }

    set searchOpen(b) {
        this.data.set('searchOpen', b.toString());
    }

    set open(state) {
        this.drawer.open = state;
        this.data.set('open', state.toString());
    }

    toggleDrawer() {
        this.open = !this.open;
    }
}