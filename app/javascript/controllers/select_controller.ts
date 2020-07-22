import { Controller } from 'stimulus';
import { MDCSelect } from '@material/select';

export default class extends Controller {
  static targets = ['field'];

  fieldTarget;
  select;

  connect() {
    this.select = new MDCSelect(this.element);
    this.select.listen("MDCSelect:change", () => {
      console.log(this.fieldTarget);
      this.fieldTarget.value = this.select.value;
    });
  }
}
