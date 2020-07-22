import { Controller } from 'stimulus';
import { MDCRipple } from '@material/ripple';

export default class extends Controller {
  connect() {
    new MDCRipple(this.element);
    this.element.classList.remove(
      'mdc-ripple-upgraded--background-focused',
      'mdc-ripple-upgraded--foreground-activation',
      'mdc-ripple-upgraded--foreground-deactivation'
    )
  }
}
